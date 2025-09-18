import {
  guideData,
  modalData,
  lexiconData,
  partnersData,
  getSelectedLogo,
} from "./data.js";
// This file handles all UI-related tasks: rendering content, managing charts, and modals.

let currentCharts = [];
const contentArea = document.getElementById("content-area");
const modalContainer = document.getElementById("modal-container");
const modalContent = document.getElementById("modal-content");

// --- FONCTIONS DU LEXIQUE ---

function applyLexicon(container) {
  if (!container || !lexiconData) return;
  const terms = Object.keys(lexiconData || {});
  if (!terms.length) return;

  // Trier par longueur décroissante pour éviter que "RH" ne capture dans une chaine plus longue.
  const sorted = [...terms].sort((a, b) => b.length - a.length);
  // Construire une class d'ensemble en échappant les caractères spéciaux.
  const escaped = sorted.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(?!<[^>]*)(?:\\b(${escaped.join("|")})\\b)`, "gi");

  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim())
          return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (
          parent.closest(".lexicon-term") ||
          parent.tagName === "A" ||
          parent.closest("button") ||
          parent.closest(".tooltip-text")
        )
          return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    },
    false
  );

  const toProcess = [];
  let node;
  while ((node = walker.nextNode())) toProcess.push(node);

  toProcess.forEach((textNode) => {
    const original = textNode.nodeValue;
    if (!regex.test(original)) return; // test rapide
    regex.lastIndex = 0; // reset après test

    // Remplacement manuel pour préserver toutes les occurrences
    const frag = document.createDocumentFragment();
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(original))) {
      const termText = match[0];
      const before = original.slice(lastIndex, match.index);
      if (before) frag.appendChild(document.createTextNode(before));
      const key = terms.find((k) => k.toLowerCase() === termText.toLowerCase());
      if (!key) {
        frag.appendChild(document.createTextNode(termText));
      } else {
        const wrapper = document.createElement("span");
        wrapper.className = "lexicon-term";
        wrapper.setAttribute("data-term", key);
        wrapper.innerHTML = `${termText}<span class="tooltip-text"><span class="definition-block">${lexiconData[key]}</span><button class="see-in-lexicon-btn" data-term="${key}" type="button">Voir dans le lexique</button></span>`;
        frag.appendChild(wrapper);
      }
      lastIndex = match.index + termText.length;
    }
    const rest = original.slice(lastIndex);
    if (rest) frag.appendChild(document.createTextNode(rest));
    textNode.parentNode.replaceChild(frag, textNode);
  });
}

// Nouvelle fonction d'assistance pour le téléchargement PDF générique
function generateGenericPdf(contentElementId, titleText) {
  const contentToExport = document.getElementById(contentElementId);
  if (!contentToExport) return;

  const { jsPDF } = window.jspdf;
  const { html2canvas } = window;
  const logoUrl = getSelectedLogo();
  const headerContainer = document.createElement("div");
  // Crée un nom de fichier sécurisé à partir du titre
  const filename =
    (titleText || "outil_rh")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .substring(0, 40) + ".pdf";

  let logoHTML = "";
  if (logoUrl) {
    logoHTML = `<img src="${logoUrl}" style="max-height: 40px; width: auto; margin: 0 auto;" crossorigin="anonymous" />`;
  }

  // Crée un en-tête complet incluant le logo et le titre de l'outil
  headerContainer.id = "temp-pdf-header";
  headerContainer.style.textAlign = "center";
  headerContainer.style.paddingBottom = "15px";
  headerContainer.style.borderBottom = "1px solid #eee";
  headerContainer.style.marginBottom = "15px";
  headerContainer.innerHTML = `
    ${logoHTML}
    <h2 style="font-size: 1.5rem; font-weight: 700; color: #0D142D; margin-top: 10px; padding: 0 20px;">
      ${titleText}
    </h2>`;

  // === Sandbox hors écran pour la capture ===
  const sandbox = document.createElement("div");
  sandbox.id = "pdf-export-sandbox";
  sandbox.style.position = "fixed";
  sandbox.style.left = "-10000px"; // hors écran mais visible
  sandbox.style.top = "0";
  const measuredWidth = Math.max(
    contentToExport.scrollWidth || 0,
    contentToExport.offsetWidth || 0,
    800
  );
  sandbox.style.width = measuredWidth + "px";
  sandbox.style.background = "#ffffff";
  sandbox.style.zIndex = "-1"; // s'assure qu'il ne couvre rien

  // Clone profond du contenu à exporter
  const cloned = contentToExport.cloneNode(true);
  // Éviter un id dupliqué
  cloned.id = contentElementId + "-clone-for-pdf";

  // Insérer l'en-tête puis le contenu cloné
  const container = document.createElement("div");
  container.style.padding = "20px";
  container.style.backgroundColor = "#ffffff";
  container.appendChild(headerContainer);
  container.appendChild(cloned);
  sandbox.appendChild(container);
  document.body.appendChild(sandbox);

  // Applique un attribut de scope et une feuille de style temporaire pour forcer la couleur du texte (dans le sandbox)
  const scopeAttr = "data-pdf-export-scope";
  container.setAttribute(scopeAttr, "");
  const tempStyle = document.createElement("style");
  tempStyle.id = "temp-pdf-contrast-style";
  tempStyle.textContent = `
    [data-pdf-export-scope],
    [data-pdf-export-scope] * { color: #111111 !important; opacity: 1 !important; }
    [data-pdf-export-scope] h1,
    [data-pdf-export-scope] h2,
    [data-pdf-export-scope] h3,
    [data-pdf-export-scope] h4,
    [data-pdf-export-scope] h5,
    [data-pdf-export-scope] h6 { color: #0D142D !important; }
    [data-pdf-export-scope] th,
    [data-pdf-export-scope] td { color: #111111 !important; border-color: #444444 !important; }
    [data-pdf-export-scope] th { font-weight: 700 !important; }
    [data-pdf-export-scope] td { font-weight: 500 !important; }
  `;
  // Le style dans le body est pris en compte par html2canvas; on le met aussi dans <head> via onclone par sécurité
  sandbox.appendChild(tempStyle);

  // Forcer un reflow et attendre 2 frames pour garantir l'application des styles
  // afin d'éviter les captures parfois sans les overrides de contraste
  // Reflow
  void sandbox.offsetHeight;
  // Attente double RAF
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      html2canvas(container, {
        // Échelle plus élevée pour améliorer la netteté du texte
        scale: 3,
        useCORS: true,
        backgroundColor: "#ffffff",
        letterRendering: true,
        logging: false,
        windowWidth: container.scrollWidth,
        windowHeight: container.scrollHeight,
        onclone: (clonedDoc) => {
          try {
            // Scope et styles dans le clone
            const clonedContainer =
              clonedDoc.getElementById("pdf-export-sandbox")?.firstElementChild;
            if (clonedContainer) clonedContainer.setAttribute(scopeAttr, "");
            // Inject style into clone's head to ensure application
            const styleInClone = clonedDoc.createElement("style");
            styleInClone.textContent = `
              [data-pdf-export-scope],
              [data-pdf-export-scope] * { color: #111111 !important; }
              [data-pdf-export-scope] h1,
              [data-pdf-export-scope] h2,
              [data-pdf-export-scope] h3,
              [data-pdf-export-scope] h4,
              [data-pdf-export-scope] h5,
              [data-pdf-export-scope] h6 { color: #0D142D !important; }
              [data-pdf-export-scope] th,
              [data-pdf-export-scope] td { color: #111111 !important; border-color: #444444 !important; }
              [data-pdf-export-scope] th { font-weight: 700 !important; }
              [data-pdf-export-scope] td { font-weight: 500 !important; }
            `;
            clonedDoc.head.appendChild(styleInClone);
          } catch (e) {
            // En cas d'erreur d'injection dans le clone, on s'appuie sur les styles injectés dans le DOM original
            console.warn("onclone style injection failed", e);
          }
        },
      }).then((canvas) => {
        // Utiliser PNG (sans perte) pour conserver un texte net et contrasté
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const margin = 15;
        const contentWidth = pdfWidth - margin * 2;
        const contentHeight = (canvas.height * contentWidth) / canvas.width;
        let heightLeft = contentHeight;
        let position = 0;

        pdf.addImage(
          imgData,
          "PNG",
          margin,
          margin,
          contentWidth,
          contentHeight
        );
        heightLeft -= pdfHeight - margin * 2;

        while (heightLeft > 0) {
          position = heightLeft - contentHeight;
          pdf.addPage();
          pdf.addImage(
            imgData,
            "PNG",
            margin,
            position - margin,
            contentWidth,
            contentHeight
          );
          heightLeft -= pdfHeight - margin * 2;
        }
        pdf.save(filename);

        // Nettoyage du sandbox
        if (sandbox && sandbox.parentNode)
          sandbox.parentNode.removeChild(sandbox);
      });
    });
  });
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
        <div id="modal-exportable-content" class="prose max-w-none" style="color: var(--c-secondary);">${data.content}</div>
    `;
  modalContainer.classList.add("visible");

  // Ensure the header X button closes the modal for all tools
  const headerCloseBtn = document.getElementById("close-modal-btn");
  if (headerCloseBtn) {
    headerCloseBtn.addEventListener("click", closeModal, { once: true });
  }

  // Appliquer le lexique sur le contenu de la modale (pour souligner les nouveaux termes)
  const modalExportable = document.getElementById("modal-exportable-content");
  if (modalExportable) {
    applyLexicon(modalExportable);
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
    // Ajout d'un bouton PDF personnalisé pour exporter la zone de prévisualisation
    const pveModalActions = document.getElementById("modal-actions");
    if (pveModalActions) {
      pveModalActions.insertAdjacentHTML(
        "afterbegin",
        `<button id="pve-download-pdf-btn" class="tool-button mr-4">Télécharger en PDF</button>`
      );
    }
    // Attache dès maintenant un handler générique opérationnel (fallback sur le contenu de la modale)
    const pvePdfBtnEarly = document.getElementById("pve-download-pdf-btn");
    if (pvePdfBtnEarly) {
      pvePdfBtnEarly.addEventListener("click", () => {
        const preview = document.getElementById("pvePreviewArea");
        const hasPreview =
          preview &&
          !preview.classList.contains("hidden") &&
          preview.innerHTML &&
          preview.innerHTML.trim().length > 0;
        const targetId = hasPreview
          ? "pvePreviewArea"
          : document.getElementById("pve-generator-container")
          ? "pve-generator-container"
          : "modal-exportable-content";
        generateGenericPdf(targetId, data.title);
      });
    }
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

    // (Optionnel) On pourrait ré-attacher ici si besoin, mais le handler early suffit pour tous les cas

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

        const logoUrl = getSelectedLogo(); // <-- Utilise la fonction importée
        const logoContainer = document.createElement("div");

        if (logoUrl) {
          logoContainer.id = "temp-pdf-logo-header";
          logoContainer.style.textAlign = "center";
          logoContainer.style.paddingBottom = "15px";
          logoContainer.style.borderBottom = "1px solid #eee";
          logoContainer.style.marginBottom = "15px";
          logoContainer.innerHTML = `<img src="${logoUrl}" style="max-height: 40px; width: auto; margin: 0 auto;" crossorigin="anonymous" />`;
          contentToExport.prepend(logoContainer);
        }

        // Appliquer les styles temporaires
        contentToExport.style.padding = "20px";
        contentToExport.style.backgroundColor = "#ffffff";

        // --- Mesure des points de coupure candidats (limiter les coupes au milieu du texte) ---
        const getBreakCandidatesPx = () => {
          const base = contentToExport.getBoundingClientRect().top;
          const selectors = [
            "h1,h2,h3,h4,h5,h6,p,ul,ol,li,hr,table,blockquote,pre,section,article,div",
            ".idea-card,.bg-gray-50,.border,.grid",
          ].join(",");
          const nodes = Array.from(contentToExport.querySelectorAll(selectors));
          const bottoms = new Set();
          nodes.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const height = rect.height || 0;
            // On ignore les éléments trop petits (icônes, etc.)
            if (height < 24) return;
            const bottom = Math.round(rect.bottom - base);
            if (bottom > 0) bottoms.add(bottom);
          });
          // Inclure la fin de contenu comme dernier candidat
          const endRect = contentToExport.getBoundingClientRect();
          bottoms.add(Math.round(endRect.height));
          return Array.from(bottoms).sort((a, b) => a - b);
        };
        const breakCandidatesPx = getBreakCandidatesPx();

        html2canvas(contentToExport, {
          scale: 2,
          useCORS: true, // Nécessaire pour l'image cross-origin
          logging: false,
          windowWidth: contentToExport.scrollWidth,
          windowHeight: contentToExport.scrollHeight,
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4",
          });

          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();
          const margin = 15;
          const contentWidth = pdfWidth - margin * 2;
          const contentHeight = (canvas.height * contentWidth) / canvas.width;
          const pageInner = pdfHeight - margin * 2; // hauteur utile par page en mm
          const mmPerPx = contentHeight / canvas.height; // conversion px -> mm selon l'image
          const pxPerMm = 1 / mmPerPx;
          const pageInnerPx = Math.floor(pageInner * pxPerMm);
          const minChunkPx = Math.floor(10 * pxPerMm); // ~10mm mini

          // Itération avec SLICES non chevauchantes alignées sur les blocs
          let currentTopPx = 0;
          while (currentTopPx < canvas.height) {
            const targetPx = currentTopPx + pageInnerPx;
            // Plus grand candidat <= targetPx et > currentTopPx + minChunkPx
            let nextBreakPx = null;
            for (let i = breakCandidatesPx.length - 1; i >= 0; i--) {
              const c = breakCandidatesPx[i];
              if (c <= targetPx && c > currentTopPx + minChunkPx) {
                nextBreakPx = c;
                break;
              }
            }
            if (!nextBreakPx) {
              nextBreakPx = Math.min(targetPx, canvas.height);
            }

            const sliceHeightPx = Math.max(0, nextBreakPx - currentTopPx);
            if (sliceHeightPx === 0) break;

            // Créer un canvas slice pour cette page
            const sliceCanvas = document.createElement("canvas");
            sliceCanvas.width = canvas.width;
            sliceCanvas.height = sliceHeightPx;
            const sctx = sliceCanvas.getContext("2d");
            sctx.drawImage(
              canvas,
              0,
              currentTopPx,
              canvas.width,
              sliceHeightPx,
              0,
              0,
              canvas.width,
              sliceHeightPx
            );
            const sliceImg = sliceCanvas.toDataURL("image/png");
            const sliceHeightMm = sliceHeightPx * mmPerPx;

            pdf.addImage(
              sliceImg,
              "PNG",
              margin,
              margin,
              contentWidth,
              sliceHeightMm
            );

            currentTopPx = nextBreakPx;
            if (currentTopPx < canvas.height) {
              pdf.addPage();
            }
          }

          pdf.save("atelier_storytelling.pdf");

          // --- Nettoyage ---
          if (logoUrl) {
            contentToExport.removeChild(logoContainer);
          }
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

      const logoUrl = getSelectedLogo(); // <-- Utilise la fonction importée
      const logoContainer = document.createElement("div");

      if (logoUrl) {
        logoContainer.id = "temp-pdf-logo-header";
        logoContainer.style.textAlign = "center";
        logoContainer.style.paddingBottom = "15px";
        logoContainer.style.borderBottom = "1px solid #eee";
        logoContainer.style.marginBottom = "15px";
        logoContainer.innerHTML = `<img src="${logoUrl}" style="max-height: 40px; width: auto; margin: 0 auto;" crossorigin="anonymous" />`;
        contentToExport.prepend(logoContainer);
      }

      html2canvas(contentToExport, {
        scale: 2,
        useCORS: true, // Nécessaire pour l'image cross-origin
      }).then((canvas) => {
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

        // --- Nettoyage ---
        if (logoUrl) {
          contentToExport.removeChild(logoContainer);
        }
      });
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
  // --- NOUVELLE LOGIQUE CI-DESSOUS ---
  // Ajoute un bouton de téléchargement PDF générique à tous les outils
  // SAUF ceux qui ont des boutons personnalisés ou qui sont interactifs.
  const specialTools = [
    "outil_annonce", // A des boutons PDF/Word personnalisés
    "outil_pve_builder", // Est un outil interactif (copier le texte est la fonction)
    "outil_storytelling_atelier", // A son propre bouton PDF personnalisé
    "outil_cv_inverse", // A deux boutons PDF personnalisés
  ];

  if (!specialTools.includes(modalId)) {
    const modalActions = document.getElementById("modal-actions");
    modalActions.insertAdjacentHTML(
      "afterbegin",
      `<button id="generic-download-pdf-btn" class="tool-button mr-4">Télécharger en PDF</button>`
    );

    document
      .getElementById("generic-download-pdf-btn")
      .addEventListener("click", () => {
        // Appelle notre nouvelle fonction d'assistance
        generateGenericPdf("modal-exportable-content", data.title);
      });
  }
  // --- FIN DE LA NOUVELLE LOGIQUE ---
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
      // Add "resources-item" class and search content + id anchor
      const anchorId = `lexicon-term-${term
        .replace(/[^a-z0-9]+/gi, "-")
        .toLowerCase()}`;
      lexiconContent += `<button id="${anchorId}" class="lexicon-grid-item resources-item" data-term="${term}" data-search-content="${term} ${lexiconData[term]}">${term}</button>`;
    }
    lexiconContent += "</div>";
    lexiconContent += "</div>";

    // --- Build Partners Content (intro + grid) ---
    let partnersContent = `
      <div class="mb-5 rounded-md border p-4 md:p-5" style="background: var(--c-white); border-color: var(--c-light); color: var(--c-primary);">
        <div class="flex items-center gap-3">
          <span class="text-xl md:text-2xl leading-none" aria-hidden="true">ℹ️</span>
          <p class="m-0 leading-snug text-base md:text-lg">
            Sélection de partenaires référencés, choisis pour leur utilité directe auprès des équipes RH : formation, conformité, pilotage social, planification et communication terrain.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">`;
    const fallbackLogo =
      "https://i.postimg.cc/3xYdhRdZ/Logo-Reunir-Services-2.png";
    (partnersData || []).forEach((p) => {
      const safeName = (p?.name || "").replace(/"/g, "&quot;");
      const logo = p?.logoUrl || fallbackLogo;
      const tags = Array.isArray(p?.keywords) ? p.keywords.filter(Boolean) : [];
      const displayTags = tags.map((raw) =>
        String(raw).replace(
          /(^|[\s-])([a-zà-ÿ])/gi,
          (m, p1, p2) => p1 + p2.toUpperCase()
        )
      );
      const tagsHtml = displayTags.length
        ? `<div class=\"mt-2 flex flex-wrap gap-1.5 justify-center\">${displayTags
            .slice(0, 4)
            .map(
              (t) => `
              <span class=\"inline-flex items-center gap-1 px-2.5 py-0.5 text-[11px] rounded-full border font-semibold\" 
                    style=\"background: var(--c-white); color: var(--c-secondary); border-color: var(--c-light); font-family: 'Outfit', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;\">
                <span class=\"inline-block w-1.5 h-1.5 rounded-full\" style=\"background: var(--c-accent);\"></span>
                ${t}
              </span>`
            )
            .join("")}</div>`
        : "";

      const searchContent = `${safeName} ${tags.join(" ")}`.trim();

      const cardInner = `
        <div class="border rounded-lg p-3 bg-white flex flex-col items-center justify-between text-center resources-item h-40 md:h-44" data-search-content="${searchContent}" title="${safeName}">
          <div class="w-24 h-24 flex items-center justify-center overflow-hidden">
            <img src="${logo}" alt="${safeName}" class="max-w-full max-h-full object-contain partner-logo" onerror="this.src='${fallbackLogo}'" />
          </div>
          ${tagsHtml}
        </div>`;
      partnersContent += p?.website
        ? `<a href="${p.website}" target="_blank" rel="noopener noreferrer" class="block" title="${safeName}">${cardInner}</a>`
        : cardInner;
    });
    partnersContent += "</div>";

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
                <button class="sub-nav-button" data-target="sub-pane-partners">🤝 Partenaires</button>
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
      <div id="sub-pane-partners" class="sub-content-pane hidden">
        ${partnersContent}
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

    // Section additionnelle: Projections d'avenir (harmonisée)
    contentHTML += `
      <div class="mt-8">
        <h3 class="font-semibold text-xl mb-4 navigate-to-practice" data-section="intro_contexte" data-practice-title="Projections d'Avenir" style="color: var(--c-primary); cursor: pointer;">Projections d'avenir (2030)</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-gray-50 p-4 rounded-lg text-center stat-card navigate-to-practice" data-section="intro_contexte" data-practice-title="Projections d'Avenir" style="cursor: pointer;">
            <h4 class="font-semibold" style="color: var(--c-primary);">Conducteurs de Véhicules</h4>
            <div class="chart-container mt-4"><canvas id="projectionsConducteursChart"></canvas></div>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg text-center stat-card navigate-to-practice" data-section="intro_contexte" data-practice-title="Projections d'Avenir" style="cursor: pointer;">
            <h4 class="font-semibold" style="color: var(--c-primary);">Agents d'Exploitation</h4>
            <div class="chart-container mt-4"><canvas id="projectionsAgentsChart"></canvas></div>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg text-center stat-card navigate-to-practice" data-section="intro_contexte" data-practice-title="Projections d'Avenir" style="cursor: pointer;">
            <h4 class="font-semibold" style="color: var(--c-primary);">Ouvriers Qualifiés (Mécanique)</h4>
            <div class="chart-container mt-4"><canvas id="projectionsMecaniciensChart"></canvas></div>
          </div>
        </div>
      </div>
    `;
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
        const config = data.charts[chartId];
        if (!config) continue; // ignore null/undefined placeholders
        const ctx = document.getElementById(chartId)?.getContext("2d");
        if (ctx) {
          // Si on le trouve, on crée le graphique
          currentCharts.push(new Chart(ctx, { ...config }));
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
