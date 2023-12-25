<?php
// logout.php
session_start();

// Implement your logic to log out the user (e.g., clear session variables)
// For simplicity, we'll just unset the username session variable
unset($_SESSION["username"]);

// Respond with a success message or redirect to the login page
echo json_encode(["success" => true, "message" => "Logout successful"]);
?>
