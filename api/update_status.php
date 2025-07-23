<?php

require __DIR__ . "/db.php";

$json = file_get_contents('php://input');
$data = json_decode($json);

$stmt = $pdo->prepare("UPDATE run SET `status`= :`status` ;");
$stmt->execute(
    [
        ":status" => $status
    ]
);

echo "success";
