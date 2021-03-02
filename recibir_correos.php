<?php


$nombre = $_POST['nom'];
$correo = $_POST['correu'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $correo . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";


$destinatario = "evaglezart@gmail.com";
$asunto = "Correo desde nuestra web L'Eurovisiu";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono\n":
$carta .= "Mensaje: $mensaje;";

//Enviando mensaje

mail($destinatario,$asunto, utf8_decode($carta), $header);


header("Location:index2.html");


?>

s