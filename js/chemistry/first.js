
    const mainButtons = document.querySelectorAll(
        "#mainButtons button"
    );

    const subButtons = document.querySelectorAll(
        "#subButtons button"
    );

    const htmlViewer = document.getElementById("htmlViewer");

    let currentSection = 1;
    let currentPage = 1;

    function loadHTML() {
        // Same URL and loading logic as before
        htmlViewer.src =
            `https://my-app-project-whknyzp75yacjeatrj8day.streamlit.app/?embed=True&group=${currentSection-1}&property=${currentPage-1}`;
    }

    // Toggle between the 3 main sections
    mainButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentSection = Number(button.dataset.section);

            mainButtons.forEach(btn => {
                const selected = btn === button;
                btn.classList.toggle("active", selected);
                btn.classList.toggle("btn-primary", selected);
                btn.classList.toggle("btn-outline-primary", !selected);
                btn.setAttribute("aria-pressed", String(selected));
            });

            loadHTML();
        });
    });

    // Toggle between the 4 pages
    subButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentPage = Number(button.dataset.page);

            subButtons.forEach(btn => {
                const selected = btn === button;
                btn.classList.toggle("active", selected);
                btn.classList.toggle("btn-success", selected);
                btn.classList.toggle("btn-outline-success", !selected);
                btn.setAttribute("aria-pressed", String(selected));
            });

            loadHTML();
        });
    });
