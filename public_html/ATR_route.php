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
$sql="SELECT TITLE FROM EMPLOYEE WHERE WORK_ID=".$data->workid;
$result2 = $conn->query($sql);
$check = $result2->fetch_assoc();

$tablename=$data->tablename;

if($check['TITLE']=='Administrator'){
    $sql="select column_name from information_schema.columns where table_name='$tablename';";
    $result = $conn->query($sql);
    if($result==TRUE){
        $row=$result3->fetch_assoc();
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