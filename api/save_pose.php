<?php

require __DIR__ . "/db.php";

$json = file_get_contents('php://input');
$data = json_decode($json);
if (!isset($data) || empty($data)):
    echo "error";
endif;
try {
    $stmt = $pdo->prepare("INSERT INTO `poses` (`id`, `motor1`, `motor2`, `motor3`, `motor4`, `motor5`, `motor6`)
    VALUES (NULL, :motor1, :motor2, :motor3, :motor4, :motor5, :motor6);");
    $stmt->execute(
        [
            ':motor1' => $data[0],
            ':motor2' => $data[1],
            ':motor3' => $data[2],
            ':motor4' => $data[3],
            ':motor5' => $data[4],
            ':motor6' => $data[5],
        ]
    );
    echo "success";
} catch (Exception $e) {
    echo $e;
}
