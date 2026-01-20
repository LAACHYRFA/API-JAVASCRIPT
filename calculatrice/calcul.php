<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>calculator</title>
</head>
<body>

<form method="get">
    <input type="number" name="number1" placeholder="number one" required>

    <select name="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>

    <input type="number" name="number2" placeholder="number two" required>

    <button name="calculer">calculate</button>
</form>

<?php
if (isset($_GET['calculer'])) {

    $nombre1 = $_GET['number1'];
    $nombre2 = $_GET['number2'];
    $operateur = $_GET['operation'];

    if (!is_numeric($nombre1) || !is_numeric($nombre2)){
        echo "entrer un numero" ;
        exit;
    }

    function calcule ($number1, $number2, $operation) {
        switch ($operation) {
            case "+":
                return $number1 + $number2;

            case "-":
                return $number1 - $number2;

            case "*":
                return $number1 * $number2;

            case "/":
                if ($number2 == 0) {
                    return "Erreur !";
                }
                return $number1 / $number2;

            default:
                return "operateur inconnu !";
        }
    }

    $resultat = calcule($nombre1, $nombre2, $operateur);
    echo "<h3>Le resultat est : $resultat</h3>";
}
?>

</body>
</html>
