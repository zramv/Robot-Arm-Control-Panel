<?php

require __DIR__ . "/db.php";

$stmt = $pdo->prepare("SELECT * FROM `poses`;");
$stmt->execute();
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($data, JSON_UNESCAPED_UNICODE);
