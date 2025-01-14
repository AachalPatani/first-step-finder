<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['fname'];
    $traval = $_POST['traval'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // You can perform validation and sanitization here

    // Save the form data to a file (or database)
    $data = "Name: $name\n";
    $data .= "Travallar or Student: $traval\n";
    $data .= "Phone: $phone\n";
    $data .= "Email: $email\n";
    $data .= "Password: $password\n";
    
    //$file = 'form_data.txt'; // Change this to the file path where you want to store the data

    // Save the data to a file
    //file_put_contents($file, $data, FILE_APPEND | LOCK_EX);

    // Redirect back to the form with a success message
    header("Location: index.html?success=true");
    exit();
}
?>
