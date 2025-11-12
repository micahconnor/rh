// This is the main entry point of the application.
import {
  renderContent,
  openModal,
  closeModal,
  renderSearchResults,
  openLexiconModal,
} from "./ui.js";
import { guideData, companyLogos, setSelectedLogo } from "./data.js";

function initLogoSelector() {
  const hiddenInput = document.getElementById("logo-selector");
  const desktopContainer = document.getElementById("logo-selector-container");
  const desktopCombo = desktopContainer?.querySelector(".logo-combobox");
  const desktopInput = document.getElementById("logo-selector-input");
  const desktopList = document.getElementById("logo-selector-list");
  const desktopToggle = document.getElementById("logo-selector-toggle");

  if (
    !hiddenInput ||
    !desktopContainer ||
    !desktopCombo ||
    !desktopInput ||
    !desktopList ||
    !desktopToggle
  ) {
    return;
  }

  const normalize = (value) =>
    (value || "")
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const levenshtein = (a, b) => {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    const curr = new Array(b.length + 1);
    for (let i = 1; i <= a.length; i++) {
      curr[0] = i;
      const charA = a[i - 1];
      for (let j = 1; j <= b.length; j++) {
        const charB = b[j - 1];
        const cost = charA === charB ? 0 : 1;
        curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
      }
      for (let j = 0; j <= b.length; j++) {
        prev[j] = curr[j];
      }
    }
    return prev[b.length];
  };

  const logosData = [...companyLogos]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((logo, index) => ({
      ...logo,
      searchKey: normalize(logo.name),
      id: `logo-option-${index}`,
    }));

  const combos = [];

  const applySelection = (item) => {
    const value = item ? item.name : "";
    const url = item ? item.url : "";
    combos.forEach((combo) => combo.setValue(value));
    hiddenInput.value = url;
    setSelectedLogo(url || null);
    combos.forEach((combo) => combo.closeList());
  };

  const createInstance = ({
    inputEl,
    listEl,
    toggleBtn,
    comboBox,
    containerEl,
  }) => {
    if (!inputEl || !listEl || !toggleBtn || !comboBox || !containerEl) {
      return null;
    }

    let filteredItems = logosData;
    let isOpen = false;
    let activeIndex = -1;

    const renderList = () => {
      if (!filteredItems.length) {
        listEl.innerHTML =
          '<div class="logo-combobox-empty">Aucune entreprise trouvée</div>';
        return;
      }
      listEl.innerHTML = filteredItems
        .map((item, index) => {
          const isActive = index === activeIndex;
          return `<button type="button" class="logo-combobox-option ${
            isActive ? "active" : ""
          }" data-index="${index}" data-url="${item.url}" id="${
            item.id
          }" role="option">
              ${item.name}
          </button>`;
        })
        .join("");
      if (activeIndex >= 0) {
        const activeEl = listEl.querySelector(`[data-index="${activeIndex}"]`);
        activeEl?.scrollIntoView({ block: "nearest" });
      }
    };

    const setOpenState = (open) => {
      isOpen = open;
      comboBox.dataset.open = open ? "true" : "false";
      listEl.classList.toggle("hidden", !open);
      inputEl.setAttribute("aria-expanded", String(open));
      if (open) {
        renderList();
        const rect = comboBox.getBoundingClientRect();
        const listRect = listEl.getBoundingClientRect();
        const toBottom = window.innerHeight - listRect.bottom;
        const toTop = rect.top;
        const preferUp = toBottom < 40 && toTop > listRect.height;
        listEl.style.transformOrigin = preferUp ? "bottom" : "top";
        if (preferUp) {
          listEl.classList.add("dropdown-up");
        } else {
          listEl.classList.remove("dropdown-up");
        }
      }
    };

    const closeList = () => {
      activeIndex = -1;
      setOpenState(false);
    };

    const openList = () => {
      if (!filteredItems.length) {
        filteredItems = logosData;
      }
      setOpenState(true);
    };

    const filterItems = (query) => {
      const normalizedQuery = normalize(query);
      if (!normalizedQuery) {
        filteredItems = logosData;
        activeIndex = -1;
        renderList();
        return;
      }
      const scored = logosData.map((item) => ({
        ...item,
        score: item.searchKey.includes(normalizedQuery)
          ? 0
          : levenshtein(normalizedQuery, item.searchKey),
      }));
      scored.sort((a, b) => a.score - b.score || a.name.localeCompare(b.name));
      const threshold = Math.max(
        2,
        Math.round(normalizedQuery.length * 0.4) + 1
      );
      const closeMatches = scored.filter((entry) => entry.score <= threshold);
      filteredItems = (closeMatches.length ? closeMatches : scored).slice(
        0,
        20
      );
      activeIndex = filteredItems.length ? 0 : -1;
      renderList();
    };

    const selectByIndex = (index) => {
      const item = filteredItems[index];
      if (item) {
        applySelection(item);
      }
    };

    inputEl.addEventListener("focus", () => {
      filterItems(inputEl.value);
      openList();
    });

    inputEl.addEventListener("input", (event) => {
      const value = event.target.value;
      filterItems(value);
      if (!isOpen) openList();
      if (!value.trim()) {
        applySelection(null);
      }
    });

    inputEl.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        if (!isOpen) openList();
        if (!filteredItems.length) return;
        activeIndex = (activeIndex + 1) % filteredItems.length;
        renderList();
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        if (!isOpen) openList();
        if (!filteredItems.length) return;
        activeIndex =
          activeIndex <= 0
            ? filteredItems.length - 1
            : Math.max(0, activeIndex - 1);
        renderList();
        return;
      }
      if (event.key === "Enter") {
        if (isOpen && activeIndex >= 0) {
          event.preventDefault();
          selectByIndex(activeIndex);
        }
        return;
      }
      if (event.key === "Escape") {
        closeList();
      }
    });

    toggleBtn.addEventListener("click", () => {
      if (isOpen) {
        closeList();
      } else {
        filterItems(inputEl.value);
        openList();
        inputEl.focus();
      }
    });

    listEl.addEventListener("mousedown", (event) => event.preventDefault());
    listEl.addEventListener("click", (event) => {
      const option = event.target.closest(".logo-combobox-option");
      if (!option) return;
      const index = parseInt(option.dataset.index, 10);
      selectByIndex(index);
    });

    document.addEventListener("click", (event) => {
      if (
        !containerEl.contains(event.target) &&
        !listEl.contains(event.target)
      ) {
        closeList();
      }
    });

    filterItems("");

    const instanceApi = {
      setValue: (value) => {
        inputEl.value = value || "";
      },
      closeList,
    };
    combos.push(instanceApi);
    return instanceApi;
  };

  createInstance({
    inputEl: desktopInput,
    listEl: desktopList,
    toggleBtn: desktopToggle,
    comboBox: desktopCombo,
    containerEl: desktopContainer,
  });

  const mobileSlot = document.getElementById("logo-selector-mobile-slot");
  if (mobileSlot) {
    const wrapper = document.createElement("div");
    wrapper.className = "mobile-logo-selector";

    const comboBox = document.createElement("div");
    comboBox.className = "logo-combobox";
    comboBox.dataset.open = "false";

    const mobileInput = document.createElement("input");
    mobileInput.type = "text";
    mobileInput.id = "logo-selector-input-mobile";
    mobileInput.className = "logo-combobox-input";
    mobileInput.placeholder = "Personnalisez avec votre logo...";
    mobileInput.autocomplete = "off";
    mobileInput.setAttribute("role", "combobox");
    mobileInput.setAttribute("aria-autocomplete", "list");
    mobileInput.setAttribute("aria-expanded", "false");
    mobileInput.setAttribute("aria-controls", "logo-selector-list-mobile");

    const mobileToggle = document.createElement("button");
    mobileToggle.id = "logo-selector-toggle-mobile";
    mobileToggle.className = "logo-combobox-toggle";
    mobileToggle.type = "button";
    mobileToggle.setAttribute(
      "aria-label",
      "Afficher la liste des entreprises"
    );
    mobileToggle.innerHTML = `
      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    `;

    comboBox.appendChild(mobileInput);
    comboBox.appendChild(mobileToggle);

    const mobileList = document.createElement("div");
    mobileList.id = "logo-selector-list-mobile";
    mobileList.className = "logo-combobox-list hidden";
    mobileList.setAttribute("role", "listbox");

    wrapper.appendChild(comboBox);
    wrapper.appendChild(mobileList);
    mobileSlot.appendChild(wrapper);

    const api = createInstance({
      inputEl: mobileInput,
      listEl: mobileList,
      toggleBtn: mobileToggle,
      comboBox,
      containerEl: wrapper,
    });
  }
}

function setupTutorial(navigateToSection) {
  const helpButton = document.getElementById("tutorial-help-button");
  const overlay = document.getElementById("tutorial-overlay");
  const cardLayer = document.getElementById("tutorial-card-layer");
  const progressEl = document.getElementById("tutorial-progress");
  const titleEl = document.getElementById("tutorial-title");
  const descriptionEl = document.getElementById("tutorial-description");
  const prevBtn = document.getElementById("tutorial-prev");
  const nextBtn = document.getElementById("tutorial-next");
  const closeBtn = document.getElementById("tutorial-close");
  const ctaBtn = document.getElementById("tutorial-cta");
  const emailButton = document.getElementById("tutorial-email-button");
  const lexiconDemo = document.getElementById("tutorial-lexicon-demo");
  const navElements = {
    container: document.getElementById("nav-container"),
    menuOpenIcon: document.getElementById("menu-open-icon"),
    menuCloseIcon: document.getElementById("menu-close-icon"),
  };

  if (
    !helpButton ||
    !overlay ||
    !cardLayer ||
    !progressEl ||
    !titleEl ||
    !descriptionEl ||
    !prevBtn ||
    !nextBtn ||
    !closeBtn
  ) {
    return null;
  }

  helpButton.setAttribute("aria-pressed", "false");

  let navOpenedByTutorial = false;
  let forcedVisibleElement = null;
  let currentSectionId = "dashboard";
  let pendingAutoSectionHighlight = false;

  const openMobileNavForTutorial = () => {
    const { container, menuOpenIcon, menuCloseIcon } = navElements;
    if (!container || window.innerWidth >= 1024) return;
    if (container.classList.contains("open")) {
      return;
    }
    container.classList.add("open");
    menuOpenIcon?.classList.add("hidden");
    menuCloseIcon?.classList.remove("hidden");
    navOpenedByTutorial = true;
  };

  const closeMobileNavForTutorial = () => {
    const { container, menuOpenIcon, menuCloseIcon } = navElements;
    if (!container || !navOpenedByTutorial) return;
    container.classList.remove("open");
    menuOpenIcon?.classList.remove("hidden");
    menuCloseIcon?.classList.add("hidden");
    navOpenedByTutorial = false;
  };

  const getSectionDescription = (sectionId) => {
    const section = guideData[sectionId] || {};
    const sectionName =
      section.shortTitle || section.title || "cette partie du guide";
    const chunks = [];

    chunks.push(
      `<p>Vous consultez actuellement <strong>${sectionName}</strong>. Chaque bloc associe contexte, idées applicables et liens directs vers les outils cités.</p>`
    );

    const hasStats = Array.isArray(section.stats) && section.stats.length > 0;
    const hasPractices =
      Array.isArray(section.practices) && section.practices.length > 0;
    const hasTools =
      hasPractices &&
      section.practices.some(
        (practice) => Array.isArray(practice.tools) && practice.tools.length
      );

    const list = [];
    if (hasStats) {
      list.push("Des chiffres clés et graphiques pour cadrer vos décisions.");
    }
    if (hasPractices) {
      list.push(
        "Des fiches pratiques avec diagnostics, plans d'action et points de vigilance."
      );
    }
    if (hasTools) {
      list.push(
        "Des boutons « Outil » menant aux générateurs et modèles prêts à télécharger."
      );
    }
    if (!list.length) {
      list.push(
        "Un résumé clair et des pistes concrètes pour passer à l'action rapidement."
      );
    }

    chunks.push(
      `<ul>${list.map((entry) => `<li>${entry}</li>`).join("")}</ul>`
    );
    chunks.push(
      `<p>Adaptez ces contenus à votre entreprise : tout est pensé pour les équipes RH et dirigeants du TRV.</p>`
    );
    return chunks.join("");
  };

  const stepsDefinition = [
    {
      id: "welcome",
      selector: "header",
      fallbackSelector: ".container",
      title: "Bienvenue dans le guide Réunir",
      description: `
        <p>Que vous soyez dirigeant, responsable ou collaborateur, chaque bloc a été pensé pour vous aider à passer de la stratégie à l'action.</p>
        <p>Suivez les étapes de ce tutoriel afin de comprendre comment utiliser le guide pour trouver les informations et les outils que vous cherchez</p>
      `,
      scroll: "start",
      disableHighlight: true,
    },
    {
      id: "lexicon",
      selector: "#tutorial-lexicon-demo .lexicon-term",
      title: "Lexique interactif",
      description: `
        <p>Tout mot souligné fonctionne comme un mini lexique embarqué : survolez ou touchez le mot pour afficher sa définition instantanément.</p>
        <ul>
          <li><strong>Compréhension partagée :</strong> idéal pour expliquer un sigle (PVE, PCRH…) aux managers en direct.</li>
          <li><strong>Bouton « Voir dans le lexique » :</strong> ouvre la fiche complète et liste les sections où le terme est cité.</li>
        </ul>
        <p>Essayez avec <strong>PVE</strong> ci-dessous pour voir l'infobulle.</p>
      `,
      showLexiconDemo: true,
      extraHighlightSelectors: ["#tutorial-lexicon-demo"],
    },
    {
      id: "navigation",
      selector: "nav",
      title: "Suivez le parcours RH complet",
      description: `
        <p>Le menu reste collé à l'écran et respecte l'ordre chronologique : Attirer ➜ Recruter ➜ Intégrer ➜ Former ➜ Engager ➜ Finaliser, puis <strong>Tech + IA</strong> et <strong>Ressources</strong>.</p>
        <ul>
          <li><strong>Sur ordinateur :</strong> cliquez directement sur le chapitre qui vous intéresse.</li>
          <li><strong>Sur mobile :</strong> ouvrez « Menu du guide » pour retrouver les mêmes sections.</li>
        </ul>
      `,
      scroll: "start",
      scrollOffset: -80,
      openMobileNav: true,
    },
    {
      id: "search",
      selector: "#guideSearchInput",
      title: "Recherchez dans tout le guide",
      description: `
        <p>Le moteur de recherche passe en revue l'intégralité des contenus (titres, bonnes pratiques, outils, lexique…). Tapez simplement 3 lettres et laissez-vous guider par les extraits surlignés.</p>
        <p>Un clic sur un résultat ouvre directement l'accordéon correspondant : idéal pour répondre à une question précise en quelques secondes.</p>
      `,
    },
    {
      id: "logo",
      selector: "#logo-selector-container",
      fallbackSelector: "nav",
      title: "Ajoutez votre logo aux exports",
      description: `
        <p>Cherchez et sélectionnez votre entreprise pour afficher automatiquement votre logo sur toutes les fiches téléchargeables (PDF/Word).</p>
        <p>Le sélecteur apparaît en haut à droite sur ordinateur. Sur mobile, ouvrez « Menu du guide » et retrouvez-le tout en bas de la liste.</p>
      `,
      forceVisibleSelector: "#logo-selector-wrapper",
      extraHighlightSelectors: [
        "nav",
        "#logo-selector-mobile-slot",
        "#logo-selector-container",
      ],
    },
    {
      id: "content",
      selector: "#content-area",
      title: "Pratiques, chiffres et outils actionnables",
      description: `
        <ul>
          <li><strong>Accordéons thématiques :</strong> ouvrez-les pour découvrir diagnostics, idées terrain et plans d'action prêts à l'emploi.</li>
          <li><strong>Cartes & graphiques :</strong> appuyez vos décisions grâce aux KPIs issus de l'enquête Réunir.</li>
          <li><strong>Termes soulignés :</strong> survolez-les pour consulter la définition du lexique sans quitter la page.</li>
          <li><strong>Boutons « Outil » :</strong> accédez aux générateurs (annonces, SWOT, Prompt Book, feedback DESC…) et exportez-les en PDF ou Word, déjà estampillés avec votre logo.</li>
        </ul>
        <p>Cela permet à la fois aux profils peu technophiles et aux plus avancés d'agir immédiatement.</p>
      `,
      getDescription: (sectionId) => `
        ${getSectionDescription(sectionId)}
        
      `,
    },
    {
      id: "tech",
      selector: "#content-area",
      title: "Chapitre Tech + IA",
      ensureSection: "piloter",
      description: `
        <p>Ce chapitre condense nos recommandations d'outils numériques pour automatiser sans déshumaniser.</p>
        <ul>
          <li><strong>Veille & benchmark :</strong> Perplexity, Gemini et LinkedIn Talent Insights avec des prompts clés prêts à copier.</li>
          <li><strong>Contenus attractifs :</strong> modèles pour rédiger vos offres, générer visuels et vidéos, ainsi qu'un Prompt Book guidé.</li>
          <li><strong>Conseils d'usage :</strong> pour chaque outil, nous indiquons quand l'utiliser, comment briefer l'IA et ce qu'il faut vérifier avant diffusion.</li>
        </ul>
      `,
      getDescription: () => `
        <p>Bienvenue dans <strong>Tech + IA</strong> : on y détaille quand utiliser chaque IA, comment briefer vos équipes et comment garder la touche humaine.</p>
        <ul>
          <li>Prompts pré-écrits pour vos benchmarks, annonces et visuels.</li>
          <li>Raccourcis vers les outils phares (Perplexity, Gemini, Canva, etc.).</li>
          <li>Conseils d'usage pour sécuriser vos données et gagner du temps.</li>
        </ul>
        <p>Gardez ces exemples sous la main pour former vos managers sans les noyer de jargon.</p>
      `,
    },
    {
      id: "resources-panel",
      selector: "#content-area",
      title: "Le hub Ressources & Lexique",
      ensureSection: "ressources",
      description: `
        <p>La section « Ressources » rassemble l'ensemble des outils cités dans le guide, un moteur de filtrage et le lexique interactif.</p>
        <ul>
          <li><strong>Recherche intelligente :</strong> tapez un mot pour filtrer simultanément outils, partenaires et définitions.</li>
          <li><strong>Lexique :</strong> cliquez sur un terme pour ouvrir sa fiche détaillée et accéder aux pratiques où il apparaît.</li>
          <li><strong>Partenaires clés :</strong> contacts utiles (PCRH, OPCO Mobilités, etc.) avec liens directs.</li>
        </ul>
      `,
      getDescription: () => `
        <p>Tout ce que vous voyez ailleurs (boutons d'outils, partenaires, lexique) se retrouve ici pour gagner du temps.</p>
        <ul>
          <li>Filtrez les outils par besoin, sans retourner dans chaque chapitre.</li>
          <li>Ouvrez le lexique en grille et accédez directement aux pratiques où chaque terme est cité.</li>
          <li>Gardez sous la main les contacts essentiels : PCRH, OPCO Mobilités, partenaires spécialisés.</li>
        </ul>
        <p>C'est la boîte à outils centrale pour préparer un atelier, une formation ou un plan d'action complet.</p>
      `,
    },
    {
      id: "help",
      selector: "#tutorial-help-button",
      title: "Besoin d'un rappel ?",
      description: `
        <p>Ce bouton d'aide reste toujours visible. Cliquez dessus pour relancer le tutoriel, partager ces consignes avec vos équipes ou accéder rapidement à l'étape qui vous intéresse.</p>
        <p>Il vous suffit de refermer l'assistant pour reprendre la navigation où vous en étiez.</p>
      `,
      scroll: "end",
    },
  ];

  const isElementVisible = (element) => {
    if (!element) return false;
    const style = window.getComputedStyle(element);
    if (style.display === "none" || style.visibility === "hidden") return false;
    const rect = element.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  };

  const findTarget = (step) => {
    if (!step) return null;
    const selectors = [step.selector, step.fallbackSelector].filter(Boolean);
    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (isElementVisible(element)) {
        return element;
      }
    }
    return null;
  };

  const steps = stepsDefinition;
  if (!steps.length) {
    return null;
  }

  let currentStepIndex = 0;
  let isOpen = false;
  let currentHighlights = [];
  let hasSeenBefore = false;

  try {
    hasSeenBefore = window.localStorage.getItem("guideTutorialSeen") === "1";
  } catch (error) {
    hasSeenBefore = false;
  }

  let hasMarkedSeen = hasSeenBefore;

  const clearHighlight = () => {
    if (currentHighlights.length) {
      currentHighlights.forEach((element) =>
        element.classList.remove("tutorial-highlight")
      );
      currentHighlights = [];
    }
  };

  const clearForcedVisibility = () => {
    if (forcedVisibleElement) {
      forcedVisibleElement.classList.remove("tutorial-force-visible");
      forcedVisibleElement = null;
    }
  };

  const applyForcedVisibility = (step) => {
    clearForcedVisibility();
    if (!step || !step.forceVisibleSelector) return;
    const element = document.querySelector(step.forceVisibleSelector);
    if (element) {
      element.classList.add("tutorial-force-visible");
      forcedVisibleElement = element;
    }
  };

  const highlightStep = (step) => {
    clearHighlight();
    if (!step) return;

    if (step.openMobileNav) {
      openMobileNavForTutorial();
    } else {
      closeMobileNavForTutorial();
    }

    const finalizeHighlight = () => {
      applyForcedVisibility(step);

      if (step.disableHighlight) return;

      const target = findTarget(step);
      if (!target) return;
      target.classList.add("tutorial-highlight");
      if (!currentHighlights.includes(target)) {
        currentHighlights.push(target);
      }
      if (!step.preventScroll) {
        target.scrollIntoView({
          behavior: "smooth",
          block: step.scroll || "center",
          inline: "nearest",
        });
        if (typeof step.scrollOffset === "number") {
          window.scrollBy({
            top: step.scrollOffset,
            behavior: "smooth",
          });
        }
      }

      const extraSelectors = Array.isArray(step.extraHighlightSelectors)
        ? step.extraHighlightSelectors
        : [];
      extraSelectors.forEach((extraSelector) => {
        const extraElement = document.querySelector(extraSelector);
        if (extraElement) {
          extraElement.classList.add("tutorial-highlight");
          if (!currentHighlights.includes(extraElement)) {
            currentHighlights.push(extraElement);
          }
        }
      });
    };

    if (
      step.ensureSection &&
      step.ensureSection !== currentSectionId &&
      typeof navigateToSection === "function"
    ) {
      pendingAutoSectionHighlight = true;
      navigateToSection(step.ensureSection);
      currentSectionId = step.ensureSection;
      setTimeout(() => {
        pendingAutoSectionHighlight = false;
        finalizeHighlight();
      }, 400);
      return;
    }

    finalizeHighlight();
  };

  const renderStep = () => {
    const step = steps[currentStepIndex];
    if (!step) return;
    progressEl.textContent = `Étape ${currentStepIndex + 1}/${steps.length}`;
    titleEl.textContent = step.title;
    const descriptionHTML =
      typeof step.getDescription === "function"
        ? step.getDescription(currentSectionId)
        : step.description;
    descriptionEl.innerHTML = descriptionHTML;
    if (lexiconDemo) {
      lexiconDemo.classList.toggle("hidden", !step.showLexiconDemo);
    }
    if (emailButton) {
      emailButton.classList.toggle("hidden", step.id !== "help");
    }
    prevBtn.disabled = currentStepIndex === 0;
    nextBtn.textContent =
      currentStepIndex === steps.length - 1 ? "Terminer" : "Suivant";

    if (step.cta) {
      ctaBtn.hidden = false;
      ctaBtn.textContent = step.cta.label;
      ctaBtn.dataset.action = step.cta.type || "";
      ctaBtn.dataset.target = step.cta.target || "";
    } else {
      ctaBtn.hidden = true;
      ctaBtn.dataset.action = "";
      ctaBtn.dataset.target = "";
    }

    highlightStep(step);
    setTimeout(() => {
      if (isOpen) {
        nextBtn.focus();
      }
    }, 50);
  };

  const markTutorialSeen = () => {
    if (hasMarkedSeen) return;
    hasMarkedSeen = true;
    try {
      window.localStorage.setItem("guideTutorialSeen", "1");
    } catch (error) {
      // Ignore Storage errors
    }
  };

  const openTutorial = (index = 0) => {
    isOpen = true;
    currentStepIndex = index;
    overlay.classList.add("visible");
    overlay.setAttribute("aria-hidden", "false");
    cardLayer.classList.add("visible");
    cardLayer.setAttribute("aria-hidden", "false");
    document.body.classList.add("tutorial-open");
    helpButton.setAttribute("aria-pressed", "true");
    renderStep();
  };

  const closeTutorial = () => {
    isOpen = false;
    overlay.classList.remove("visible");
    overlay.setAttribute("aria-hidden", "true");
    cardLayer.classList.remove("visible");
    cardLayer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("tutorial-open");
    helpButton.setAttribute("aria-pressed", "false");
    clearHighlight();
    clearForcedVisibility();
    closeMobileNavForTutorial();
    if (lexiconDemo) {
      lexiconDemo.classList.add("hidden");
    }
    pendingAutoSectionHighlight = false;
    markTutorialSeen();
  };

  const goToStep = (newIndex) => {
    if (newIndex < 0 || newIndex > steps.length - 1) return;
    currentStepIndex = newIndex;
    renderStep();
  };

  const goToNext = () => {
    if (currentStepIndex === steps.length - 1) {
      closeTutorial();
    } else {
      goToStep(currentStepIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentStepIndex === 0) return;
    goToStep(currentStepIndex - 1);
  };

  const onKeyDown = (event) => {
    if (!isOpen) return;
    if (event.key === "Escape") {
      closeTutorial();
    } else if (event.key === "ArrowRight") {
      goToNext();
    } else if (event.key === "ArrowLeft") {
      goToPrevious();
    }
  };

  const handleCtaClick = () => {
    const step = steps[currentStepIndex];
    if (!step || !step.cta) return;
    if (
      step.cta.type === "navigate" &&
      typeof navigateToSection === "function"
    ) {
      navigateToSection(step.cta.target);
    }
  };

  helpButton.addEventListener("click", () => {
    if (isOpen) {
      closeTutorial();
    } else {
      openTutorial();
    }
  });
  closeBtn.addEventListener("click", closeTutorial);
  prevBtn.addEventListener("click", goToPrevious);
  nextBtn.addEventListener("click", goToNext);
  overlay.addEventListener("click", closeTutorial);
  cardLayer.addEventListener("click", (event) => {
    if (event.target === cardLayer) {
      closeTutorial();
    }
  });
  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("click", (event) => {
    if (!isOpen) return;
    if (
      !overlay.contains(event.target) &&
      !cardLayer.contains(event.target) &&
      event.target !== helpButton &&
      !helpButton.contains(event.target)
    ) {
      closeTutorial();
    }
  });
  if (ctaBtn) {
    ctaBtn.addEventListener("click", handleCtaClick);
  }

  return {
    open: () => openTutorial(0),
    maybeAutoLaunch: () => {
      if (!hasSeenBefore) {
        setTimeout(() => openTutorial(0), 1200);
      }
    },
    setCurrentSection: (sectionId) => {
      currentSectionId = sectionId || currentSectionId;
      if (pendingAutoSectionHighlight) return;
      if (isOpen) {
        renderStep();
      }
    },
  };
}
document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.getElementById("nav-container");
  const contentArea = document.getElementById("content-area");
  const modalContainer = document.getElementById("modal-container");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const menuOpenIcon = document.getElementById("menu-open-icon");
  const menuCloseIcon = document.getElementById("menu-close-icon");
  const searchInput = document.getElementById("guideSearchInput");
  const searchResultsContainer = document.getElementById(
    "searchResultsContainer"
  );
  const tutorialButton = document.getElementById("tutorial-help-button");
  initLogoSelector();
  let tutorialController = null;

  if (tutorialButton) {
    tutorialButton.classList.add("tutorial-help-button--intro");
    setTimeout(() => {
      tutorialButton.classList.remove("tutorial-help-button--intro");
      tutorialButton.classList.add("tutorial-help-button--idle");
    }, 5000);
  }

  const navigateToSection = (targetId, practiceIndex = null) => {
    document.querySelectorAll(".nav-button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.target === targetId);
    });
    searchInput.value = "";
    contentArea.classList.remove("hidden");
    searchResultsContainer.classList.add("hidden");
    renderContent(targetId);
    if (window.innerWidth < 1024) {
      navContainer.classList.remove("open");
      menuOpenIcon.classList.remove("hidden");
      menuCloseIcon.classList.add("hidden");
    }

    if (practiceIndex !== null) {
      setTimeout(() => {
        const accordions = contentArea.querySelectorAll(".accordion-header");
        if (accordions[practiceIndex]) {
          accordions[practiceIndex].classList.add("open");
          accordions[practiceIndex].nextElementSibling.classList.add("open");
          accordions[practiceIndex].scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 100);
    }

    tutorialController?.setCurrentSection(targetId);
  };

  mobileMenuButton.addEventListener("click", () => {
    navContainer.classList.toggle("open");
    menuOpenIcon.classList.toggle("hidden");
    menuCloseIcon.classList.toggle("hidden");
  });

  document.body.addEventListener("click", (e) => {
    const navButton = e.target.closest(".nav-button");
    if (navButton && navButton.dataset.target) {
      navigateToSection(navButton.dataset.target);
      return;
    }

    const accordionHeader = e.target.closest(".accordion-header");
    if (accordionHeader) {
      accordionHeader.classList.toggle("open");
      accordionHeader.nextElementSibling.classList.toggle("open");
      return;
    }

    const modalButton = e.target.closest(".open-modal-btn");
    if (modalButton) {
      openModal(modalButton.dataset.modalid);
      return;
    }

    const subNavButton = e.target.closest(".sub-nav-button");
    if (subNavButton) {
      const targetPaneId = subNavButton.dataset.target;
      document
        .querySelectorAll(".sub-nav-button")
        .forEach((btn) => btn.classList.remove("active"));
      subNavButton.classList.add("active");
      document.querySelectorAll(".sub-content-pane").forEach((pane) => {
        pane.classList.toggle("hidden", pane.id !== targetPaneId);
      });
      return;
    }

    const lexiconItem = e.target.closest(".lexicon-grid-item");
    if (lexiconItem) {
      openLexiconModal(lexiconItem.dataset.term);
      return;
    }

    // Clic sur un terme surligné pour ouvrir directement sa fiche complète
    const inlineLexiconTerm = e.target.closest(".lexicon-term");
    if (inlineLexiconTerm && inlineLexiconTerm.dataset.term) {
      openLexiconModal(inlineLexiconTerm.dataset.term);
      return;
    }

    // Bouton dans l'infobulle
    const seeBtn = e.target.closest(".see-in-lexicon-btn");
    if (seeBtn && seeBtn.dataset.term) {
      openLexiconModal(seeBtn.dataset.term);
      return;
    }

    // Navigation directe vers une pratique via attributs data-
    const navigateEl = e.target.closest(".navigate-to-practice");
    if (navigateEl) {
      const sectionId = navigateEl.dataset.section || "intro_contexte";
      const practiceTitleQuery = navigateEl.dataset.practiceTitle || "";
      // Naviguer d'abord vers la section cible
      navigateToSection(sectionId);
      // Ouvrir ensuite l'accordéon dont le titre contient le texte recherché
      setTimeout(() => {
        const accordions = document.querySelectorAll(
          "#content-area .accordion-header"
        );
        let opened = false;
        accordions.forEach((header, idx) => {
          const hText = header.textContent || "";
          if (
            !opened &&
            hText.toLowerCase().includes(practiceTitleQuery.toLowerCase())
          ) {
            if (!header.classList.contains("open")) {
              header.classList.add("open");
              header.nextElementSibling.classList.add("open");
            }
            header.scrollIntoView({ behavior: "smooth", block: "start" });
            opened = true;
          }
        });
      }, 150);
      return;
    }

    const closeLexiconBtn = e.target.closest("#close-lexicon-modal-btn");
    const lexiconOverlay = e.target.closest("#lexicon-modal-overlay");
    if (closeLexiconBtn || (lexiconOverlay && e.target === lexiconOverlay)) {
      document.getElementById("lexicon-modal-overlay")?.remove();
      return;
    }

    const lexiconRefLink = e.target.closest(".lexicon-ref-link");
    if (lexiconRefLink) {
      e.preventDefault();
      const sectionId = lexiconRefLink.dataset.section;
      const practiceIndex = parseInt(lexiconRefLink.dataset.practice, 10);
      document.getElementById("lexicon-modal-overlay")?.remove();
      navigateToSection(sectionId, practiceIndex);
      return;
    }
  });

  // Close modal when clicking on overlay OR any X button inside the modal
  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      closeModal();
      return;
    }
    const closeBtn = e.target.closest("#close-modal-btn, .close-modal-btn");
    if (closeBtn) {
      e.preventDefault();
      closeModal();
    }
  });

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 3) {
      contentArea.classList.remove("hidden");
      searchResultsContainer.classList.add("hidden");
      return;
    }
    contentArea.classList.add("hidden");
    searchResultsContainer.classList.remove("hidden");

    const results = [];
    const queryRegex = new RegExp(
      query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      "gi"
    );
    for (const sectionId in guideData) {
      const section = guideData[sectionId];
      if (section.practices) {
        section.practices.forEach((practice, index) => {
          const fullText = `${practice.title} ${practice.content}`;
          if (fullText.toLowerCase().includes(query)) {
            const textOnlyContent = practice.content.replace(/<[^>]*>/g, " ");
            const matchIndex = textOnlyContent.toLowerCase().indexOf(query);
            let snippet = "";
            if (matchIndex !== -1) {
              const start = Math.max(0, matchIndex - 50);
              const end = Math.min(
                textOnlyContent.length,
                matchIndex + query.length + 50
              );
              snippet = `...${textOnlyContent
                .substring(start, end)
                .replace(queryRegex, `<mark>${query}</mark>`)}...`;
            }
            results.push({
              sectionId,
              practiceIndex: index,
              title: practice.title,
              snippet,
              path: `${section.title} > ${practice.title.split("⸺")[0]}`,
            });
          }
        });
      }
    }
    renderSearchResults(results);
  });

  searchResultsContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".search-result-card");
    if (card) {
      const sectionId = card.dataset.section;
      const practiceIndex = parseInt(card.dataset.practice, 10);
      navigateToSection(sectionId, practiceIndex);
    }
  });

  // NOUVELLE LOGIQUE : Recherche dans l'onglet Ressources
  document.body.addEventListener("input", (e) => {
    if (e.target.id === "resourcesSearchInput") {
      const query = e.target.value.toLowerCase().trim();
      const allItems = document.querySelectorAll(".resources-item");
      const noResultsMessage = document.getElementById("resources-no-results");

      let totalMatches = 0;

      allItems.forEach((item) => {
        const content = item.dataset.searchContent.toLowerCase();
        const isVisible = content.includes(query);
        item.classList.toggle("hidden", !isVisible);
        if (isVisible) {
          totalMatches++;
        }
      });

      // Gérer l'affichage des accordéons dans la boîte à outils
      document
        .querySelectorAll("#sub-pane-toolbox .resources-item")
        .forEach((accordion) => {
          if (!accordion.classList.contains("hidden")) {
            const hasVisibleChildren =
              accordion.querySelectorAll(".p-4:not(.hidden)").length > 0; // Vérifie s'il y a des outils visibles dedans
            if (query.length > 0) {
              // Si on recherche, on ouvre les accordéons pertinents
              const header = accordion.querySelector(".accordion-header");
              if (header && !header.classList.contains("open")) {
                header.classList.add("open");
                header.nextElementSibling.classList.add("open");
              }
            }
          }
        });

      if (noResultsMessage) {
        noResultsMessage.classList.toggle("hidden", totalMatches > 0);
      }
    }
  });

  tutorialController = setupTutorial(navigateToSection);
  navigateToSection("dashboard");
  tutorialController?.setCurrentSection("dashboard");
  tutorialController?.maybeAutoLaunch();
});
