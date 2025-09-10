// This is the main entry point of the application.
import {
  renderContent,
  openModal,
  closeModal,
  renderSearchResults,
  openLexiconModal,
} from "./ui.js";
import { guideData } from "./data.js";

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

  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) closeModal();
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

  navigateToSection("dashboard");
});
