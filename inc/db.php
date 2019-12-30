<?php

//Defining the variables, containing the information, to acces the relevant database:
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db = "finals";

    //$servername = "melsted.dk.mysql";
    //$username = "melsted_dk_melsted";
    //$password = "ninkaninus";
    //$db = "melsted_dk_melsted";

//Connecting to my database called "finals":
    $conn = mysqli_connect($servername, $username, $password, $db);

//Checking if the connection works otherwise returns a fail:
    if(mysqli_connect_errno()){
        echo "An error has occurred, while connecting to the database!" . mysqli_connect_errno();
    }

?>