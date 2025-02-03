<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recibir Datos</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Datos Recibidos</h1>
</header>
    
    <section>
        <h2>Datos recibidos por GET:</h2>
        <?php if (!empty($_GET)): ?>
            <ul>
                <?php foreach ($_GET as $key => $value): ?>
                    <li><strong><?php echo htmlspecialchars($key); ?>:</strong> <?php echo htmlspecialchars($value); ?></li>
                <?php endforeach; ?>
            </ul>
        <?php else: ?>
            <p>No se recibieron datos por GET.</p>
        <?php endif; ?>
    </section>
    
    <hr>

    <section>
        <h2>Datos recibidos por POST:</h2>
        <?php if (!empty($_POST)): ?>
            <ul>
                <?php foreach ($_POST as $key => $value): ?>
                    <li><strong><?php echo htmlspecialchars($key); ?>:</strong> <?php echo htmlspecialchars($value); ?></li>
                <?php endforeach; ?>
            </ul>
        <?php else: ?>
            <p>No se recibieron datos por POST.</p>
        <?php endif; ?> 
    </section>

    <hr>
    
    <section>
        <p>Puedes probar también enviando datos por GET añadiendo parámetros en la URL. Ejemplo:</p>
        <code>http://localhost/recibir_datos.php?nombre=Juan&edad=25</code>
    </section>
    
</body>
</html>