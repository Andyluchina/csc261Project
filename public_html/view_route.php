
<?php
   require_once('db_setup.php');

    $sql = "USE mswanso2_1;";
    if ($conn->query($sql) === TRUE) {
          //  echo "using Database mswanso2_1";
    } else {
	//echo "Error using  database: " . $conn->error;
    }

    $json=file_get_contents('php://input');
	$stuff=array();
    $data=json_decode($json);

    $sql= "SELECT * FROM MISSION";
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()){
	$stuff[]=$row;
}

    echo json_encode($stuff);

//echo "hello";	
  	


//print "hello";


$conn->close();


?>


