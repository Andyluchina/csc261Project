<?php

require_once('db_setup.php');

$sql = "USE mswanso2_1;";
if ($conn->query($sql) === TRUE) {
         // echo "using Database mswanso2_1";
} else {
	//echo "Error using  database: " . $conn->error;
}

$json=file_get_contents('php://input');
$stuff=array();
$data=json_decode($json);


$tablename=$data->tablename;

    $sql="select column_name from information_schema.columns where table_name='$tablename';";
    $stuff[]=$sql;
    echo json_encode($sql);
    if($tablename==''){
        echo json_encode($stuff);
    }
    else{
        $result = $conn->query($sql);
        if($result==TRUE){
            $stuff[]=$row;
            echo json_encode($stuff);
        }
        else{
            $stuff[]="Error";
            echo json_encode($stuff);
        }

    }




$conn->close();
?>