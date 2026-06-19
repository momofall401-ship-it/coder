document.addEventListener("DOMContentLoaded", function () {

    /* ===== Mobile Menu ===== */
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-menu-link");

    function toggleMenu() {
        const isOpen = !mobileMenu.classList.contains("hidden");
        mobileMenu.classList.toggle("hidden");
        menuBtn.setAttribute("aria-expanded", !isOpen);
        menuBtn.querySelector("i").className = isOpen ? "fas fa-bars" : "fas fa-times";
    }

    function fermerMenu() {
        mobileMenu.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.querySelector("i").className = "fas fa-bars";
    }

    menuBtn.addEventListener("click", toggleMenu);
    mobileLinks.forEach(function (link) {
        link.addEventListener("click", fermerMenu);
    });

    /* ===== Dark / Light Mode ===== */
    const themeToggles = document.querySelectorAll(".bouton-theme");
    const iconesTheme = document.querySelectorAll(".icone-theme");

    function appliquerTheme(modeClair) {
        document.body.classList.toggle("mode-clair", modeClair);
        iconesTheme.forEach(function (icone) {
            icone.className = "fas " + (modeClair ? "fa-moon" : "fa-sun") + " icone-theme";
        });
        const valeur = modeClair ? "clair" : "sombre";
        localStorage.setItem("theme", valeur);
        document.cookie = "theme=" + valeur + ";path=/;max-age=31536000";
    }

    const themeStocke = localStorage.getItem("theme");
    if (themeStocke === "clair") {
        appliquerTheme(true);
    }

    themeToggles.forEach(function (btn) {
        btn.addEventListener("click", function () {
            appliquerTheme(!document.body.classList.contains("mode-clair"));
        });
    });

    /* ===== Contact Form ===== */
    const form = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");
    const submitBtn = document.getElementById("submit-btn");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        formStatus.className = "form-status hidden";
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Envoi en cours...';

        const data = new FormData(form);

        fetch("sendmail.php", {
            method: "POST",
            body: data
        })
        .then(function (res) {
            if (!res.ok) throw new Error("Erreur serveur");
            return res.json();
        })
        .then(function (result) {
            if (result.success) {
                formStatus.className = "form-status success";
                formStatus.textContent = "Merci " + data.get("name") + " ! Votre message a bien été envoyé. Je vous répondrai rapidement.";
                form.reset();
            } else {
                throw new Error(result.message || "Erreur lors de l'envoi");
            }
        })
        .catch(function (err) {
            formStatus.className = "form-status error";
            formStatus.textContent = "Une erreur est survenue : " + err.message + ". Veuillez réessayer ou m'écrire directement à momofall401@gmail.com.";
        })
        .finally(function () {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="far fa-envelope" aria-hidden="true"></i> Envoyer le message';
        });
    });

    /* ===== Scroll To Top ===== */
    const retourHaut = document.getElementById("retour-haut");

    window.addEventListener("scroll", function () {
        retourHaut.classList.toggle("show", window.scrollY > 300);
    });

    retourHaut.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* ===== Smooth scroll pour tous les ancres ===== */
    document.querySelectorAll('a[href^="#"]').forEach(function (ancre) {
        ancre.addEventListener("click", function (e) {
            const cible = document.querySelector(this.getAttribute("href"));
            if (cible) {
                e.preventDefault();
                cible.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

});
