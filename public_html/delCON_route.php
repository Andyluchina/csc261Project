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

$cid=$data->cid;


if($check['TITLE']=='Administrator'||$check['TITLE']=='Mission Leader'){
    $sql= "DELETE FROM CONTRACTOR WHERE CONTRACTOR_ID=$cid;";

    $result = $conn->query($sql);
    if ($result === TRUE) {
        $stuff[]="Succesfuly deleted!";
        echo json_encode($stuff);
    } else {
        $stuff[]="Error with deletion.";
        echo json_encode($stuff);
    }



}
else{
  $string=["NA"];

  echo json_encode($string);
}
$conn->close();
?>




