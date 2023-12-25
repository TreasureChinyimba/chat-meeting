<?php
// login.php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];

    // Implement your logic to validate the username (e.g., check against the database)
    // For simplicity, we'll just set the username in the session
    $_SESSION["username"] = $username;

    // Respond with a success message or redirect to the chat page
    echo json_encode(["success" => true, "message" => "Login successful"]);
}
?>
