<?php


$nombre = $_POST['nom'];
$correo = $_POST['correu'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

$destinatario = "evaglezart@gmail.com";
$asunto = "Correo desde nuestra web L'Eurovisiu";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono\n":
$carta .= "Mensaje: $mensaje;";

//Enviando mensaje

mail($destinatario,$asunto, $carta);


header("Location:index.html");


?>
