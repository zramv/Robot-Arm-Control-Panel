<?php
$username = "root";
$password = "";
$dbname = "arm_poses";
$pdo = new PDO("mysql:host=localhost;dbname=" . $dbname . ";charset=utf8", $username, $password, [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);
