<?php
if(!isset($_POST['lastname']) || !isset($_POST['firstname']) || !isset($_POST['email']) || !isset($_POST['subject']) || !isset($_POST['message'])){
    echo 'false';
    return;
}

$lastname = strip_tags($_POST['lastname']);
$firstname = strip_tags($_POST['firstname']);
$email = strip_tags($_POST['email']);
$subject = strip_tags($_POST['subject']);
$phone = isset($_POST['phone']) ? strip_tags($_POST['phone']) : '-';
$message = strip_tags($_POST['message']);

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";
$headers .= "From: RIFRAICH <internal@rifraich.fr>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$subject_encoded = mb_encode_mimeheader("Message via landing page : " . $subject, "UTF-8", "B");

mail("contact@rifraich.fr", $subject_encoded, "Nom : " . $lastname . "\r\nPrénom : " . $firstname . "\r\nEmail : " . $email . "\r\nTéléphone : " . $phone . "\r\nObjet : " . $subject . "\r\n\r\n" . $message, $headers);

echo 'true';
?>
