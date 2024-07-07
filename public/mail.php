<?php
if(!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['subject']) || !isset($_POST['message'])){
    echo 'false';
    return;
}

$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$subject = strip_tags($_POST['subject']);
$phone = isset($_POST['phone']) ? strip_tags($_POST['phone']) : '';
$message = strip_tags($_POST['message']);

mail("contact@rifraich.fr", "Message via landing page : ". $subject, "Nom : ". $name ."\r\nEmail : ". $email ."\r\nTéléphone : ". $phone ."\r\nObjet : ". $subject ."\r\n \r\n". $message);
echo 'true';