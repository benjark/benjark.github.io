<?php
if(isset($POST['submit'])){
    $to = "brkloepfer@gmail.com";
    $from = $_POST['email']; 
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $message = $firstname . "" . $lastname .  " wrote the following:" . "\n\n" . $_POST['message'];
    // $message2 = "Here is a copy of your message " . $firstname . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$message,$headers);
    // mail($from,$subject2,$message2,$headers2);
    echo "Mail Sent. Thank you " . $firstname . ", we will contact you shortly.";

}

?>

<!-- <! DOCTYPE html>
<head>
    <title> Form Submission</title>
</head>
<body>
    <form action="" method="post">
        First Name: <input type= -->