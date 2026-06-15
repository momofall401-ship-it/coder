// Fonction pour ouvrir et fermer le menu sur le telephone
function toggleMenu() {
    let menu = document.getElementById("mobile-menu");
    
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
}

// Fonction pour fermer le menu quand on clique sur un lien précis
function fermerMenu() {
    let menu = document.getElementById("mobile-menu");
    menu.style.display = "none";
}

// Pour le formulaire de contact tout en bas
function envoyerMessage(event) {
    event.preventDefault(); 
    let nom = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let sujet = document.getElementById("subject").value;
    
    alert("Merci " + nom + " !\n\nVotre message concernant \"" + sujet + "\" a bien été envoyé. Je vous répondrai à l'adresse " + email + " dans les plus brefs délais.");
    document.getElementById("contact-form").reset(); 
}

// Fonction pour passer de Sombre à Clair (et inversement)
function changerMode() {
    // On ajoute ou on enlève la classe "mode-clair" sur la balise <body>
    document.body.classList.toggle("mode-clair");
    
    // On change toutes les icônes de thème de soleil en lune (et inversement)
    let icones = document.querySelectorAll(".icone-theme");
    icones.forEach(icone => {
        if (document.body.classList.contains("mode-clair")) {
            // Mode clair activé : on affiche une lune
            icone.classList.remove("fa-sun");
            icone.classList.add("fa-moon");
        } else {
            // Mode sombre activé : on affiche un soleil
            icone.classList.remove("fa-moon");
            icone.classList.add("fa-sun");
        }
    });
}

// Bouton de retour en haut (Scroll To Top)
window.addEventListener("scroll", function() {
    let bouton = document.getElementById("retour-haut");
    if (window.scrollY > 300) {
        bouton.classList.add("show");
    } else {
        bouton.classList.remove("show");
    }
});

function remonterEnHaut() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
