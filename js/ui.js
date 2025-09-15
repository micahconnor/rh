// This file handles all UI-related tasks: rendering content, managing charts, and modals.
import { guideData, modalData, lexiconData } from "./data.js";

let currentCharts = [];
const contentArea = document.getElementById("content-area");
const modalContainer = document.getElementById("modal-container");
const modalContent = document.getElementById("modal-content");

// --- FONCTIONS DU LEXIQUE ---

function applyLexicon(container) {
  const terms = Object.keys(lexiconData);
  if (terms.length === 0) return;
  const regex = new RegExp(`\\b(${terms.join("|")})\\b`, "gi");
  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  let node;
  while ((node = walker.nextNode())) {
    if (
      node.parentElement.tagName === "A" ||
      node.parentElement.classList.contains("lexicon-term")
    )
      continue;
    const matches = node.nodeValue.match(regex);
    if (matches) {
      const newNode = document.createElement("span");
      newNode.innerHTML = node.nodeValue.replace(regex, (match) => {
        const termKey = Object.keys(lexiconData).find(
          (key) => key.toLowerCase() === match.toLowerCase()
        );
        return `<span class="lexicon-term">${match}<span class="tooltip-text">${lexiconData[termKey]}</span></span>`;
      });
      node.parentNode.replaceChild(newNode, node);
    }
  }
}

function openLexiconModal(term) {
  const definition = lexiconData[term];
  if (!definition) return;

  // Search for references in the guide
  let referencesHTML =
    '<p class="text-sm text-gray-500">Aucune référence trouvée dans le guide.</p>';
  const references = [];
  const termRegex = new RegExp(`\\b${term}\\b`, "gi");

  for (const sectionId in guideData) {
    const section = guideData[sectionId];
    if (section.practices) {
      section.practices.forEach((practice, index) => {
        const fullText = `${practice.title} ${practice.content}`;
        if (fullText.match(termRegex)) {
          references.push({
            sectionId: sectionId,
            practiceIndex: index,
            title: practice.title.replace(/^[0-9]\.[0-9]\s?⸺\s?/, ""),
            path: section.title,
          });
        }
      });
    }
  }

  if (references.length > 0) {
    referencesHTML = references
      .map(
        (ref) =>
          `<a href="#" class="lexicon-ref-link" data-section="${ref.sectionId}" data-practice="${ref.practiceIndex}">
                <span class="font-semibold">${ref.title}</span>
                <span class="text-xs text-gray-500 block">${ref.path}</span>
            </a>`
      )
      .join("");
  }

  const modalHTML = `
        <div id="lexicon-modal-overlay" class="modal-overlay visible">
            <div id="lexicon-modal-content" class="modal-content">
                <div id="modal-header" class="flex justify-between items-center mb-4">
                    <h2 class="text-2xl font-bold" style="color: var(--c-primary);">${term}</h2>
                    <button id="close-lexicon-modal-btn" class="text-gray-500 hover:text-gray-800 text-3xl leading-none">&times;</button>
                </div>
                <div class="prose max-w-none">
                    <p>${definition}</p>
                    <hr class="my-6">
                    <h3 class="text-lg font-bold" style="color: var(--c-primary);">Retrouver ce terme dans le guide :</h3>
                    <div class="lexicon-references">${referencesHTML}</div>
                </div>
            </div>
        </div>
    `;
  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

// --- FONCTIONS GÉNÉRALES ---

function clearCharts() {
  currentCharts.forEach((chart) => chart.destroy());
  currentCharts = [];
}

function openModal(modalId) {
  const data = modalData[modalId];
  if (!data) return;
  const { jsPDF } = window.jspdf;
  const { html2canvas } = window;
  const { saveAs } = window;
  const { htmlDocx } = window;

  modalContent.innerHTML = `
        <div id="modal-header" class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold" style="color: var(--c-primary);">${data.title}</h2>
            <div id="modal-actions" class="flex items-center">
                <button id="close-modal-btn" class="text-gray-500 hover:text-gray-800 text-3xl leading-none">&times;</button>
            </div>
        </div>
        <div class="prose max-w-none" style="color: var(--c-secondary);">${data.content}</div>
    `;
  modalContainer.classList.add("visible");

  // Ensure the header X button closes the modal for all tools
  const headerCloseBtn = document.getElementById("close-modal-btn");
  if (headerCloseBtn) {
    headerCloseBtn.addEventListener("click", closeModal, { once: true });
  }

  if (modalId === "outil_annonce") {
    const modalActions = document.getElementById("modal-actions");
    modalActions.insertAdjacentHTML(
      "afterbegin",
      `<button id="download-pdf-btn" class="tool-button mr-2">PDF</button><button id="download-word-btn" class="tool-button mr-4">Word</button>`
    );
    const form = {
      logo: document.getElementById("annonceLogo"),
      titre: document.getElementById("annonceTitre"),
      contrat: document.getElementById("annonceContrat"),
      entreprise: document.getElementById("annonceEntreprise"),
      missions: document.getElementById("annonceMissions"),
      avantages: document.getElementById("annonceAvantages"),
      profil: document.getElementById("annonceProfil"),
    };
    const preview = {
      logo: document.getElementById("previewLogo"),
      titre: document.getElementById("previewTitre"),
      contrat: document.getElementById("previewContrat"),
      entreprise: document.getElementById("previewEntreprise"),
      missions: document.getElementById("previewMissions"),
      avantages: document.getElementById("previewAvantages"),
      profil: document.getElementById("previewProfil"),
    };
    preview.logo.onerror = () => {
      preview.logo.src =
        "https://i.postimg.cc/3xYdhRdZ/Logo-Reunir-Services-2.png";
    };
    const updatePreview = () => {
      preview.logo.src = form.logo.value.trim()
        ? form.logo.value
        : "https://i.postimg.cc/3xYdhRdZ/Logo-Reunir-Services-2.png";
      preview.titre.textContent = form.titre.value;
      preview.contrat.textContent = form.contrat.value;
      preview.entreprise.textContent = form.entreprise.value;
      const updateList = (textarea, ul) => {
        ul.innerHTML = textarea.value
          .split("\n")
          .filter((i) => i.trim())
          .map((i) => `<li>${i.replace(/^- /, "")}</li>`)
          .join("");
      };
      updateList(form.missions, preview.missions);
      updateList(form.avantages, preview.avantages);
      updateList(form.profil, preview.profil);
    };
    Object.values(form).forEach((el) =>
      el.addEventListener("input", updatePreview)
    );
    document
      .getElementById("download-pdf-btn")
      .addEventListener("click", () => {
        html2canvas(document.getElementById("annonce-content-to-export"), {
          scale: 2,
          useCORS: true,
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
          });
          const contentWidth = pdf.internal.pageSize.getWidth() - 30;
          const imgHeight = (canvas.height * contentWidth) / canvas.width;
          pdf.addImage(imgData, "PNG", 15, 15, contentWidth, imgHeight);
          pdf.save("offre_emploi.pdf");
        });
      });
    document
      .getElementById("download-word-btn")
      .addEventListener("click", () => {
        const header = `<style>body{font-family:Arial,sans-serif;font-size:11pt;}h3,h4{color:#0D142D;}ul{list-style-type:disc;padding-left:20px;}</style>`;
        const contentNode = document
          .getElementById("annonce-content-to-export")
          .cloneNode(true);
        const img = contentNode.querySelector("#previewLogo");
        if (img) img.src = preview.logo.src;
        const fullHtml = `<!DOCTYPE html><html><head><meta charset="UTF-8">${header}</head><body>${contentNode.innerHTML}</body></html>`;
        saveAs(htmlDocx.asBlob(fullHtml), "offre_emploi.docx");
      });
  } else if (modalId === "outil_pve_builder") {
    const generatorContainer = document.getElementById(
      "pve-generator-container"
    );
    if (!generatorContainer) return;

    const generateBtn = generatorContainer.querySelector("#generatePveBtn");
    const copyBtn = generatorContainer.querySelector("#copyPveBtn");
    const previewArea = generatorContainer.querySelector("#pvePreviewArea");
    const statusEl = generatorContainer.querySelector("#pveStatus");

    if (!generateBtn || !copyBtn || !previewArea) {
      console.error("PVE Builder elements not found in the modal.");
      return;
    }

    // === Configure your endpoint here ===
    const EVP_API_ENDPOINT = "/api/evp/generate"; // << change if needed

    const TITLES = {
      culture: "🤝 Notre Culture :",
      carriere: "🚀 Votre Carrière :",
      remuneration: "💰 Vos Avantages :",
      equilibre: "❤️ Votre Bien-être :",
    };

    function gatherSelections() {
      const results = {
        culture: [],
        carriere: [],
        remuneration: [],
        equilibre: [],
      };
      Object.keys(results).forEach((category) => {
        const checkboxes = generatorContainer.querySelectorAll(
          `input[type="checkbox"][data-category="${category}"]:checked`
        );
        checkboxes.forEach((cb) => results[category].push(cb.value));

        const textField = generatorContainer.querySelector(
          `input[type="text"][data-category="${category}"]`
        );
        if (textField && textField.value.trim() !== "") {
          results[category].push(textField.value.trim());
        }
      });
      return results;
    }

    // Render helper – always outputs a <strong> + <ul> to preserve your visuals
    function renderList(sectionEl, title, items) {
      if (!sectionEl) return;
      // Sanitize by using textContent for all dynamic text.
      // Build the list with DOM APIs to avoid injection.
      sectionEl.innerHTML = ""; // clear

      const strong = document.createElement("strong");
      strong.textContent = title;
      sectionEl.appendChild(strong);

      const ul = document.createElement("ul");
      ul.className = "list-disc pl-5 mt-1";

      items.forEach((raw) => {
        const li = document.createElement("li");
        // Capitalize first letter
        const txt = raw ? raw.toString().trim() : "";
        const cap = txt ? txt.charAt(0).toUpperCase() + txt.slice(1) : "";
        li.textContent = cap;
        ul.appendChild(li);
      });

      sectionEl.appendChild(ul);
    }

    function renderFromAPI(response, fallbackSelections) {
      // Response contract (flexible):
      // {
      //   culture: string | string[],
      //   carriere: string | string[],
      //   remuneration: string | string[],
      //   equilibre: string | string[]
      // }
      // If a field is missing/empty, we fallback to the user's selected items.

      const normalize = (val, fallbackArr) => {
        if (Array.isArray(val)) return val.filter(Boolean);
        if (typeof val === "string" && val.trim()) {
          // Convert paragraph to bullets: split on sentence-ish boundaries.
          const sentences = val
            .split(
              /(?<=[.!?])\s+(?=[A-ZÀÂÄÇÉÈÊËÎÏÔÖÙÛÜŸa-zàâäçéèêëîïôöùûüÿ0-9])/
            )
            .map((s) => s.trim())
            .filter((s) => s);
          return sentences.length ? sentences : fallbackArr;
        }
        return fallbackArr;
      };

      const sections = [
        ["culture", "#previewCulture"],
        ["carriere", "#previewCarriere"],
        ["remuneration", "#previewRemuneration"],
        ["equilibre", "#previewEquilibre"],
      ];

      sections.forEach(([key, selector]) => {
        const el = previewArea.querySelector(selector);
        const items = normalize(response?.[key], fallbackSelections[key]);
        if (items.length === 0) {
          // nothing to show; clear section
          el.innerHTML = "";
        } else {
          renderList(el, TITLES[key], items);
        }
      });

      previewArea.classList.remove("hidden");
    }

    function renderLocalFallback(selections) {
      const sections = [
        ["culture", "#previewCulture"],
        ["carriere", "#previewCarriere"],
        ["remuneration", "#previewRemuneration"],
        ["equilibre", "#previewEquilibre"],
      ];
      sections.forEach(([key, selector]) => {
        const el = previewArea.querySelector(selector);
        const arr = selections[key] || [];
        if (arr.length === 0) {
          el.innerHTML = "";
        } else {
          renderList(el, TITLES[key], arr);
        }
      });
      previewArea.classList.remove("hidden");
    }

    async function callEVPApi(payload) {
      // Example payload:
      // {
      //   language: "fr",
      //   companyName: "[Nom de l'entreprise]" (optional),
      //   categories: {
      //     culture: ["ambiance familiale", "..."],
      //     carriere: ["formations régulières", "..."],
      //     remuneration: ["13e mois", "..."],
      //     equilibre: ["plannings stables", "..."]
      //   }
      // }
      const res = await fetch(EVP_API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`EVP API error: ${res.status}`);
      }
      // Expected response shape (flexible as documented above)
      return res.json();
    }

    function setBusy(isBusy, message) {
      if (!statusEl) return;
      if (isBusy) {
        statusEl.textContent = message || "Génération en cours…";
        statusEl.classList.remove("hidden");
        generateBtn.disabled = true;
        generateBtn.classList.add("opacity-60", "cursor-not-allowed");
      } else {
        statusEl.classList.add("hidden");
        generateBtn.disabled = false;
        generateBtn.classList.remove("opacity-60", "cursor-not-allowed");
      }
    }

    generateBtn.addEventListener("click", async () => {
      const selections = gatherSelections();

      // If user selected absolutely nothing, keep behavior simple: clear preview
      const hasAny =
        selections.culture.length ||
        selections.carriere.length ||
        selections.remuneration.length ||
        selections.equilibre.length;

      if (!hasAny) {
        // Optional: still call API with empty arrays to let it draft from scratch
        // But by default we’ll just clear
        [
          "#previewCulture",
          "#previewCarriere",
          "#previewRemuneration",
          "#previewEquilibre",
        ].forEach((sel) => (previewArea.querySelector(sel).innerHTML = ""));
        previewArea.classList.remove("hidden");
        return;
      }

      setBusy(true, "Génération en cours…");

      try {
        const payload = {
          language: "fr",
          categories: selections,
          // Optional: include context that can help your API produce richer EVP
          // tone: "professionnel et chaleureux",
          // maxItemsPerCategory: 4
        };

        const apiResponse = await callEVPApi(payload);

        // If the API gave nothing usable, fallback
        const empty =
          !apiResponse ||
          Object.keys(TITLES).every(
            (k) =>
              !apiResponse[k] ||
              (Array.isArray(apiResponse[k]) && apiResponse[k].length === 0)
          );

        if (empty) {
          renderLocalFallback(selections);
        } else {
          renderFromAPI(apiResponse, selections);
        }
      } catch (err) {
        console.error(err);
        // Show a subtle error and fallback
        if (statusEl) {
          statusEl.textContent =
            "Impossible de générer via l’API. Affichage local.";
          statusEl.classList.remove("hidden");
        }
        renderLocalFallback(selections);
        // Hide the status after a moment
        setTimeout(() => statusEl && statusEl.classList.add("hidden"), 3000);
      } finally {
        setBusy(false);
      }
    });

    copyBtn.addEventListener("click", () => {
      const getTextFromList = (selector) => {
        const element = previewArea.querySelector(selector);
        if (!element || !element.innerHTML) return "";

        const strong = element.querySelector("strong");
        const title = strong ? strong.innerText : "";

        const items = Array.from(element.querySelectorAll("li")).map(
          (li) => `- ${li.innerText}`
        );
        if (!title && items.length === 0) return "";
        return `${title}\n${items.join("\n")}`;
      };

      const parts = [
        "✨ Notre Promesse Employeur chez [Nom de l'entreprise] ✨",
        getTextFromList("#previewCulture"),
        getTextFromList("#previewCarriere"),
        getTextFromList("#previewRemuneration"),
        getTextFromList("#previewEquilibre"),
      ];

      const textToCopy = parts.filter(Boolean).join("\n\n");

      navigator.clipboard.writeText(textToCopy).then(() => {
        const feedback = generatorContainer.querySelector("#copyPveFeedback");
        feedback.classList.remove("hidden");
        setTimeout(() => feedback.classList.add("hidden"), 2000);
      });
    });
  } else if (modalId === "outil_storytelling_atelier") {
    const modalActions = document.getElementById("modal-actions");
    modalActions.insertAdjacentHTML(
      "afterbegin",
      `<button id="download-pdf-btn" class="tool-button mr-4">Télécharger en PDF</button>`
    );

    document
      .getElementById("download-pdf-btn")
      .addEventListener("click", () => {
        const contentToExport = document.getElementById(
          "storytelling-content-to-export"
        );
        const { jsPDF } = window.jspdf;
        const { html2canvas } = window;

        // Temporarily adjust styles for better PDF rendering
        contentToExport.style.padding = "20px";
        contentToExport.style.backgroundColor = "#ffffff";

        html2canvas(contentToExport, {
          scale: 2, // Use a higher scale for better resolution
          useCORS: true,
          logging: false,
          windowWidth: contentToExport.scrollWidth,
          windowHeight: contentToExport.scrollHeight,
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/jpeg", 0.95); // Use JPEG for smaller file size

          const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
          });

          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const margin = 15; // 15mm margin

          const contentWidth = pdfWidth - margin * 2;
          const contentHeight = (canvas.height * contentWidth) / canvas.width;

          let heightLeft = contentHeight;
          let position = 0;

          // Add the first page
          pdf.addImage(
            imgData,
            "JPEG",
            margin,
            margin,
            contentWidth,
            contentHeight
          );
          heightLeft -= pdfHeight - margin * 2;

          // Add new pages if content overflows
          while (heightLeft > 0) {
            position = heightLeft - contentHeight;
            pdf.addPage();
            // The negative position shifts the image up to show the next part
            pdf.addImage(
              imgData,
              "JPEG",
              margin,
              position - margin,
              contentWidth,
              contentHeight
            );
            heightLeft -= pdfHeight - margin * 2;
          }

          pdf.save("atelier_storytelling.pdf");

          // Restore original styles
          contentToExport.style.padding = "";
          contentToExport.style.backgroundColor = "";
        });
      });
  } else if (modalId === "outil_cv_inverse") {
    const modalActions = document.getElementById("modal-actions");
    modalActions.insertAdjacentHTML(
      "afterbegin",
      `<button id="download-example-pdf-btn" class="tool-button mr-2">Télécharger l'Exemple</button>
       <button id="download-guide-pdf-btn" class="tool-button mr-4" style="display: none;">Télécharger le Guide</button>`
    );

    const generatePdf = (elementId, filename) => {
      const contentToExport = document.getElementById(elementId);
      if (!contentToExport) return;

      html2canvas(contentToExport, { scale: 2, useCORS: true }).then(
        (canvas) => {
          const imgData = canvas.toDataURL("image/jpeg", 0.95);
          const { jsPDF } = window.jspdf;
          const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
          });

          const pdfWidth = pdf.internal.pageSize.getWidth();
          const contentWidth = pdfWidth - 30; // 15mm margins
          const contentHeight = (canvas.height * contentWidth) / canvas.width;

          pdf.addImage(imgData, "JPEG", 15, 15, contentWidth, contentHeight);
          pdf.save(filename);
        }
      );
    };

    document
      .getElementById("download-example-pdf-btn")
      .addEventListener("click", () => {
        generatePdf("cv-inverse-example-export", "exemple_cv_inverse.pdf");
      });
    document
      .getElementById("download-guide-pdf-btn")
      .addEventListener("click", () => {
        generatePdf("cv-inverse-guide-export", "guide_cv_inverse.pdf");
      });

    // Tab logic
    const tabs = modalContent.querySelectorAll(".sub-nav-button");
    const panes = modalContent.querySelectorAll(".sub-content-pane");
    const btnExample = document.getElementById("download-example-pdf-btn");
    const btnGuide = document.getElementById("download-guide-pdf-btn");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        const targetPaneId = tab.dataset.target;
        panes.forEach((pane) => {
          pane.classList.toggle("hidden", pane.id !== targetPaneId);
        });

        // Toggle visibility of download buttons
        btnExample.style.display =
          targetPaneId === "pane-cv-example" ? "inline-flex" : "none";
        btnGuide.style.display =
          targetPaneId === "pane-cv-guide" ? "inline-flex" : "none";
      });
    });
    document
      .getElementById("close-modal-btn")
      .addEventListener("click", closeModal);
  }
}

function closeModal() {
  modalContainer.classList.remove("visible");
}

function renderContent(targetId) {
  clearCharts();
  contentArea.innerHTML = "";
  const data = guideData[targetId];
  if (!data) return;

  if (data.isToolbox) {
    // --- Build Toolbox Content (NEW ELEGANT LAYOUT) ---
    let toolboxContent = '<div class="space-y-4">';
    for (const key in guideData) {
      const section = guideData[key];
      if (
        !section.practices ||
        !section.icon ||
        ["ressources", "dashboard"].includes(key)
      )
        continue;

      let practicesWithTools = section.practices.filter(
        (p) => p.tools && p.tools.length > 0
      );
      if (practicesWithTools.length > 0) {
        const headerTitle =
          section.icon.replace("mb-1", "") +
          `<span class="font-semibold text-lg">${section.shortTitle}</span>`;
        // Add "resources-item" class for searching
        toolboxContent += `<div class="border rounded-lg resources-item" style="border-color: var(--c-light);" data-search-content="${
          section.shortTitle
        } ${practicesWithTools
          .map((p) => p.title)
          .join(
            " "
          )}"><div class="accordion-header flex items-center gap-3 p-4">${headerTitle}<span class="accordion-icon ml-auto">▼</span></div><div class="accordion-content px-4"><div class="space-y-4">`;
        practicesWithTools.forEach((practice) => {
          const toolsHTML = `<div class="flex flex-wrap gap-2">${practice.tools
            .map((t) =>
              t.type === "link"
                ? `<a href="${t.url}" target="_blank" rel="noopener noreferrer" class="tool-button">${t.name}</a>`
                : `<button class="open-modal-btn tool-button" data-modalid="${t.id}">${t.name}</button>`
            )
            .join("")}</div>`;
          toolboxContent += `
                        <div class="p-4 rounded-lg bg-gray-50 border">
                            <h4 class="font-semibold text-base">${practice.title.replace(
                              /^[0-9]\.[0-9]\s?⸺\s?/,
                              ""
                            )}</h4>
                            <div class="mt-3">${toolsHTML}</div>
                        </div>`;
        });
        toolboxContent += `</div></div></div>`;
      }
    }
    toolboxContent += "</div>";

    // --- Build Lexicon Content (interactive grid) ---
    let lexiconContent = '<div class="lexicon-grid">';
    for (const term in lexiconData) {
      // Add "resources-item" class and search content
      lexiconContent += `<button class="lexicon-grid-item resources-item" data-term="${term}" data-search-content="${term} ${lexiconData[term]}">${term}</button>`;
    }
    lexiconContent += "</div>";

    // --- Assemble the final HTML with Tabs and NEW SEARCH BAR ---
    const finalHTML = `
        <div class="bg-white p-6 md:p-8 rounded-lg shadow-md">
            ${data.intro}

            <div class="my-6">
                <div class="relative">
                    <input type="text" id="resourcesSearchInput" placeholder="Rechercher un outil ou un terme..." class="w-full p-3 pl-10 text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-accent transition-colors" style="border-color: var(--c-light); background-color: var(--c-white);">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                </div>
            </div>

            <div class="sub-nav-container">
                <button class="sub-nav-button active" data-target="sub-pane-toolbox">🧰 Boîte à Outils</button>
                <button class="sub-nav-button" data-target="sub-pane-lexicon">📖 Lexique</button>
            </div>

            <div id="resources-no-results" class="hidden text-center py-8 text-gray-500">
                <p>Aucun outil ou terme ne correspond à votre recherche.</p>
            </div>

            <div id="sub-pane-toolbox" class="sub-content-pane">
                ${toolboxContent}
            </div>
            <div id="sub-pane-lexicon" class="sub-content-pane hidden">
                ${lexiconContent}
            </div>
        </div>`;

    contentArea.innerHTML = finalHTML;
    applyLexicon(contentArea);
    return;
  }

  const { Chart, ChartDataLabels } = window;
  let contentHTML = `<div class="bg-white p-6 rounded-lg shadow-md">${
    data.intro || ""
  }`;
  if (targetId === "dashboard") {
    contentHTML += '<div class="grid grid-cols-1 md:grid-cols-2 gap-6">';
    (data.stats || []).forEach((stat) => {
      contentHTML +=
        stat.type === "chart"
          ? `<div class="bg-gray-50 p-4 rounded-lg text-center stat-card"><h3 class="font-semibold text-lg" style="color: var(--c-primary);">${stat.label}</h3><div class="chart-container mt-4"><canvas id="${stat.id}"></canvas></div><p class="text-xs italic text-gray-500 mt-2">${stat.detail}</p></div>`
          : `<div class="bg-gray-50 p-4 rounded-lg text-center flex flex-col justify-center stat-card"><h3 class="font-semibold text-lg" style="color: var(--c-primary);">${stat.label}</h3><p class="text-4xl font-bold my-2" style="color: var(--c-primary);">${stat.value}</p><p class="text-sm" style="color: var(--c-secondary);">${stat.detail}</p></div>`;
    });
    contentHTML += "</div>";
  } else if (data.practices && data.practices.length > 0) {
    contentHTML += '<div class="space-y-4">';
    data.practices.forEach((practice) => {
      const toolsHTML = practice.tools
        ? `<div class="mt-4 flex flex-wrap gap-2">${practice.tools
            .map((t) =>
              t.type === "link"
                ? `<a href="${t.url}" target="_blank" rel="noopener noreferrer" class="tool-button">${t.name}</a>`
                : `<button class="open-modal-btn tool-button" data-modalid="${t.id}">${t.name}</button>`
            )
            .join("")}</div>`
        : "";
      contentHTML += practice.title.startsWith("💡")
        ? `<div class="border rounded-lg p-4 bg-gray-50" style="border-color: var(--c-light);"><h3 class="font-semibold text-2xl mb-4 text-center" style="color: var(--c-primary);">${practice.title}</h3><div class="prose max-w-none">${practice.content}</div>${toolsHTML}</div>`
        : `<div class="border rounded-lg" style="border-color: var(--c-light);"><div class="accordion-header flex justify-between items-center p-4"><h3 class="font-semibold text-lg">${practice.title}</h3><span class="accordion-icon">▼</span></div><div class="accordion-content px-4"><div class="prose max-w-none">${practice.content}</div>${toolsHTML}</div></div>`;
    });
    contentHTML += "</div>";
  }
  contentHTML += "</div>";
  contentArea.innerHTML = contentHTML;

  if (targetId === "dashboard" && Chart) {
    Chart.register(ChartDataLabels);
    ["recruitmentReasonChart", "loyaltyActionsChart", "cultureChart"].forEach(
      (id) => {
        const chartId = id.replace("Chart", "");
        const ctx = document.getElementById(id)?.getContext("2d");
        if (ctx && data.charts[chartId])
          currentCharts.push(
            new Chart(ctx, {
              ...data.charts[chartId],
              plugins: [ChartDataLabels],
            })
          );
      }
    );
  }
  // === LA MODIFICATION CLÉ EST ICI ===
  // Cette logique universelle va maintenant trouver et afficher les graphiques sur N'IMPORTE QUELLE page
  if (data.charts && Chart) {
    Chart.register(ChartDataLabels);
    setTimeout(() => {
      // On parcourt les clés de l'objet 'charts' de la section actuelle
      for (const chartId in data.charts) {
        // On cherche l'élément canvas correspondant à la clé (ex: "marqueEmployeurStatsChart")
        const ctx = document.getElementById(chartId)?.getContext("2d");
        if (ctx) {
          // Si on le trouve, on crée le graphique
          currentCharts.push(new Chart(ctx, { ...data.charts[chartId] }));
        }
      }
    }, 0); // setTimeout garantit que le DOM est prêt
  }
  applyLexicon(contentArea);
}

function renderSearchResults(results) {
  const searchResultsContainer = document.getElementById(
    "searchResultsContainer"
  );
  if (results.length === 0) {
    searchResultsContainer.innerHTML =
      '<p class="text-center text-gray-500">Aucun résultat trouvé.</p>';
    return;
  }
  let resultsHTML =
    '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">';
  results.forEach((result) => {
    resultsHTML += `<div class="search-result-card" data-section="${result.sectionId}" data-practice="${result.practiceIndex}"><h4>${result.title}</h4><div class="snippet">${result.snippet}</div><div class="path">${result.path}</div></div>`;
  });
  resultsHTML += "</div>";
  searchResultsContainer.innerHTML = resultsHTML;
}

export {
  renderContent,
  openModal,
  closeModal,
  renderSearchResults,
  openLexiconModal,
};
