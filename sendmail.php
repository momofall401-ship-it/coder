<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
    exit;
}

$nom    = trim($_POST['name'] ?? '');
$email  = trim($_POST['email'] ?? '');
$sujet  = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

if (empty($nom) || empty($email) || empty($sujet) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Tous les champs sont obligatoires.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Adresse email invalide.']);
    exit;
}

$destinataire = 'momofall401@gmail.com';
$sujetMail = '[Portfolio] ' . $sujet;
$corps = "Nom : $nom\nEmail : $email\n\nMessage :\n$message";

$entetes = "From: $nom <$email>\r\nReply-To: $email\r\n";

$envoye = mail($destinataire, $sujetMail, $corps, $entetes);

if ($envoye) {
    echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès.']);
} else {
    $fichier = __DIR__ . '/messages.log';
    $contenu = date('Y-m-d H:i:s') . " | $nom | $email | $sujet | " . str_replace("\n", " ", $message) . "\n";
    file_put_contents($fichier, $contenu, FILE_APPEND | LOCK_EX);

    echo json_encode([
        'success' => true,
        'message' => 'Message reçu (mode démo). Je vous répondrai rapidement.'
    ]);
}
