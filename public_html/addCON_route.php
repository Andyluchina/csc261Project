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

$cname=$data->cname;



if($check['TITLE']=='Administrator'||$check['TITLE']=='Mission Leader'){
  $sql="SELECT MAX(CONTRACTOR_ID) FROM CONTRACTOR;";
  $result3 = $conn->query($sql);
  $row=$result3->fetch_assoc();
  $num=$row['MAX(CONTRACTOR_ID)']+1;
  $sql= "INSERT INTO CONTRACTOR values('$cname',$num);";

  $result = $conn->query($sql);
  if ($result === TRUE) {
    $stuff[]="Succesfully added!";
    echo json_encode($stuff);
} else {
    $stuff[]="Add not successful.";
    echo json_encode($stuff);
}
else{
  $string=["NA"];

  echo json_encode($string);
}
$conn->close();
?>

