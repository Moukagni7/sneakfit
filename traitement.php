<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    $privacy = isset($_POST['privacy']) ? "Acceptée" : "Non acceptée";
    
    // Adresse email où envoyer le message
    $to = "votre@email.com";
    
    // En-têtes du mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Corps du message
    $email_content = "<html><body>";
    $email_content .= "<h2>Nouveau message de contact</h2>";
    $email_content .= "<p><strong>Nom:</strong> $name</p>";
    $email_content .= "<p><strong>Email:</strong> $email</p>";
    $email_content .= "<p><strong>Sujet:</strong> $subject</p>";
    $email_content .= "<p><strong>Message:</strong><br>$message</p>";
    $email_content .= "<p><strong>Politique de confidentialité:</strong> $privacy</p>";
    $email_content .= "</body></html>";
    
    // Envoyer l'email
    if (mail($to, "Nouveau message: $subject", $email_content, $headers)) {
        // Rediriger vers une page de confirmation
        header("Location: index.html");
        exit;
    } else {
        echo "Une erreur est survenue. Veuillez réessayer.";
    }
}
?>