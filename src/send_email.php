<?php
header("Access-Control-Allow-Origin: *"); // Autoriser les requêtes depuis n'importe quelle origine (à modifier selon vos besoins)

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $data = json_decode(file_get_contents("php://input"));

    $name = $data->name;
    $email = $data->email;
    $message = $data->message;

    // Adresse e-mail de destination
    $to = 'mielmieleux@gmail.com';

    // En-têtes de l'e-mail
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Envoyer l'e-mail
    if (mail($to, "Nouveau message de contact", $message, $headers)) {
        http_response_code(200); // OK
    } else {
        http_response_code(500); // Erreur de serveur
    }
} else {
    http_response_code(405); // Méthode non autorisée
}
?>
