
<?php
    require_once('db_setup.php');
    $sql = "USE mswanso2_1;";
    if ($conn->query($sql) === TRUE) {
            echo "using Database mswanso2_1";
    } else {
	echo "Error using  database: " . $conn->error;
    }
    $json=file_get_contents('php://input');

    $data=json_decode($data);

    $sql= "SELECT * FROM ".$data->tablename;
    $result = $conn->query($sql);
    $row = $result->fetchAll();
    echo $row;
  	





$conn->close();


?>


