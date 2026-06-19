<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portfolio de Mamadou Cheikh Fall - Administration Systèmes et Réseaux">
    <title>Mamadou Cheikh Fall - Portfolio</title>
    <link rel="stylesheet" href="../style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        html { scroll-behavior: smooth; }
    </style>
</head>
<?php
    $themeStocke = $_COOKIE["theme"] ?? "sombre";
    $classeCSS = ($themeStocke === "clair") ? "mode-clair" : "";
?>
<body class="<?php echo htmlspecialchars($classeCSS); ?>">

   <nav class="navbar" aria-label="Navigation principale">
    <div class="nav-container">
        <h1 class="logo-nom">MCF</h1>
        <div class="les-liens" role="menubar">
            <a href="#accueil" role="menuitem">Accueil</a>
            <a href="#a-propos" role="menuitem">À propos</a>
            <a href="#competences" role="menuitem">Compétences</a>
            <a href="#formations" role="menuitem">Formations</a>
            <a href="#experience" role="menuitem">Expérience</a>
            <a href="#projets" role="menuitem">Projets</a>
            <a href="#temoignages" role="menuitem">Témoignages</a>
            <a href="#contact" role="menuitem">Contact</a>

            <button class="bouton-theme" id="theme-toggle-desktop" aria-label="Changer le thème sombre/clair">
                <i class="fas <?php echo ($themeStocke === 'clair') ? 'fa-moon' : 'fa-sun'; ?> icone-theme"></i>
            </button>
        </div>

        <div class="boutons-droite-mobile">
            <button class="bouton-theme" id="theme-toggle-mobile" aria-label="Changer le thème sombre/clair">
                <i class="fas <?php echo ($themeStocke === 'clair') ? 'fa-moon' : 'fa-sun'; ?> icone-theme"></i>
            </button>

            <button id="mobile-menu-btn" class="bouton-telephone" aria-label="Ouvrir le menu" aria-expanded="false">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </div>
   </nav>

   <!-- Le reste des sections à intégrer ici -->

   <script src="../script.js"></script>
</body>
</html>