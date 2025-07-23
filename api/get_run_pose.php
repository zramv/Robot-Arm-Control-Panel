<?php

require __DIR__ . "/db.php";

$json = file_get_contents('php://input');
$data = json_decode($json);

if (isset($data) && !empty($data)) {
    $stmt = $pdo->prepare("DELETE FROM `run`;");
    $stmt->execute();
    $stmt = $pdo->prepare("INSERT INTO `run` (`motor1`, `motor2`, `motor3`, `motor4`, `motor5`, `motor6`)
    VALUES (:motor1, :motor2, :motor3, :motor4, :motor5, :motor6);");
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
} else {

    $stmt = $pdo->prepare("SELECT * FROM `run`;");
    $stmt->execute();
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $data = $data[0];
    echo $data['status'] . ",s" . $data['motor1'] . ",s" . $data['motor2'] . ",s" . $data['motor3'] . ",s" . $data['motor4'] . ",s" . $data['motor5'] . ",s" . $data['motor6'];
}
