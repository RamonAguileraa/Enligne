<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ENline";

// Crea la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la conexión
if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

// Recibe los datos del frontend (supongamos que llegan por POST)
$moneda_origen = $_POST['moneda_origen'];
$moneda_destino = $_POST['moneda_destino'];
$cantidad_origen = $_POST['cantidad_origen'];
$cantidad_destino = $_POST['cantidad_destino'];

// Inserta los datos en la base de datos
$sql = "INSERT INTO Conversiones (moneda_origen, moneda_destino, cantidad_origen, cantidad_destino)
        VALUES ('$moneda_origen', '$moneda_destino', '$cantidad_origen', '$cantidad_destino')";

if ($conn->query($sql) === TRUE) {
  echo "Conversión guardada exitosamente";
} else {
  echo "Error al guardar la conversión: " . $conn->error;
}

$conn->close();

?>
