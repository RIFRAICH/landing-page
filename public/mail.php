<?php
if(!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['subject']) || !isset($_POST['message'])){
    echo 'false';
    return;
}

$name = strip_tags($_POST['name']);
$firstname = strip_tags($_POST['firstname']);
$email = strip_tags($_POST['email']);
$phone = isset($_POST['phone']) ? strip_tags($_POST['phone']) : '-';
$type = strip_tags($_POST['type']);
$subject = strip_tags($_POST['subject']);
$message = strip_tags($_POST['message']);

$headers = 'From: RIFRAICH <noreply@rifraich.fr>' . "\r\n" .
           'Reply-To: '. $email . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

mail("contact@rifraich.fr", "Message via landing page : ". $subject, "Nom : ". $name ."\r\nPrenom : ". $firstname . "\r\nEmail : ". $email ."\r\nTelephone : ". $phone ."\r\nType de demande : ". $type ."\r\nObjet : ". $subject ."\r\n \r\n". $message, $headers);
echo 'true';