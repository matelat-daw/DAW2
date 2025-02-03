<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados</title>
</head>
<body>
<?php
if (isset($_POST['NombreUsuario'])) {
    foreach($_POST as $key => $value) {
        echo "<h3>El Campo: <strong>$key</strong> Contiene: <strong style='color:blue;'>$value</strong></h3><br>";
    };
}
?>
</body>
</html>