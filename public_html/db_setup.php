<?php

	$servername  = "localhost";
	$username    = "mswanso2";
	$password    = "LiW7WAYw";
	$conn = new mysqli($servername, $username, $password);

	if ($conn->connect_error) {
    	die("Connection failed: " . $conn->connect_error);
	}
//	echo "Connection Success!"
?>
