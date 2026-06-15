<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon porte folio</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        html { scroll-behavior: smooth; }
    </style>    
</head>
 <?php
    $themeActuel="sombre";
    if(isset($_GET["theme"])){
        $themeActuel=$_GET["theme"];
    }
    $classeCSS= "";
    if($themeActuel=="clair"){
        $classeCSS= "clair";
    }
    ?>
<body class="<?php echo $classeCSS; ?>">
   <nav>
    <div class="nav-container">
        <h1 class="logo-nom">MCF</h1>
        <div class="les-liens">
            <a href="#accueil">Accueil</a>
            <a href="#a-propos">À propos</a>
            <a href="#competences">Compétences</a>
            <a href="#formations">Formations</a>
            <a href="#experience">Expérience</a>
            <a href="#projets">Projets</a>
            <a href="#temoignages">Témoignages</a>
            <a href="#contact">Contact</a>
            
            <!-- Bouton Soleil/Lune Ordinateur -->
            <button class="bouton-theme" onclick="changerMode()"><i class="fas fa-sun icone-theme"></i></button>
        </div>
        
        <div class="boutons-droite-mobile">
            <!-- Bouton Soleil/Lune Mobile -->
            <button class="bouton-theme" onclick="changerMode()"><i class="fas fa-sun icone-theme"></i></button>
            
            <!-- Bouton pour le menu telephone -->
            <button id="mobile-menu-btn" class="bouton-telephone" onclick="toggleMenu()">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </div>
   </nav>
    
</body>
</html>