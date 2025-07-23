<?php

require __DIR__ . "/db.php";

$json = file_get_contents('php://input');
$id = json_decode($json);

if (!isset($id) || empty($id) || !is_numeric($id)) {
    echo "error: it is not id";
    die();
}

$stmt = $pdo->prepare("DELETE FROM poses WHERE `poses`.`id` = :id");
$stmt->execute([
    ":id" => $id
]);
echo "success";
