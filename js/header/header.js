
    /* Single-page navigation */

    const navButtons = document.querySelectorAll(
      "#mainNav [data-page]"
    );

    const pages = document.querySelectorAll(
      "#pageContainer .page-section"
    );

    let currentPage = "section1";

    function showPage(pageId) {
      const targetPage = document.getElementById(pageId);

      // Only allow navigation to registered pages.
      if (!targetPage || !targetPage.classList.contains("page-section")) {
        return;
      }

      if (currentPage === pageId) {
        return;
      }

      currentPage = pageId;

      // Hide all sections.
      pages.forEach(page => {
        page.classList.remove("active");
      });

      // Reveal only the selected section.
      targetPage.classList.add("active");

      // Update the selected header button.
      navButtons.forEach(button => {
        const selected = button.dataset.page === pageId;

        button.classList.toggle("active", selected);

        if (selected) {
          button.setAttribute("aria-current", "page");
        } else {
          button.removeAttribute("aria-current");
        }
      });

      // Return to the top without scrolling to the selected section.
      window.scrollTo(0, 0);
    }

    // Header button clicks.
    navButtons.forEach(button => {
      button.addEventListener("click", () => {
        showPage(button.dataset.page);
      });
    });

    // Optional brand click returns to the first section.
    document.getElementById("brandHome").addEventListener("click", event => {
      event.preventDefault();
      showPage("section1");
    });
