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

$pname=$data->pname;
$mid=$data->mid;
$plid=$data->plid;
if($pname==''||$mid==''||$plid==''){
  $stuff[]="Values must not be empty. Please re-enter.";
  echo json_encode($stuff);
}
else{
  if($check['TITLE']=='Administrator'||$check['TITLE']=='Mission Leader'){
    $sql="SELECT TITLE FROM EMPLOYEE WHERE WORK_ID=$plid;";
    $result3 = $conn->query($sql);
    $title=$result3->fetch_assoc();
    if($title['TITLE']=="Project Leader"){
      $sql="SELECT MAX(PROJ_ID) FROM PROJECT;";
      $result3 = $conn->query($sql);
      $row=$result3->fetch_assoc();
      $num=$row['MAX(PROJ_ID)']+1;
      $sql= "INSERT INTO PROJECT VALUES('$pname',$num,$mid,$plid);";

      $result = $conn->query($sql);
      if ($result == TRUE && ($conn->affected_rows > 0)) {
        $stuff[]="Succesfully added!";
        echo json_encode($stuff);
      } else {
        $stuff[]="Add not successful.";
        echo json_encode($stuff);
      }
    }
    else{
      $stuff[]="Add not successful.";
      echo json_encode($stuff);
    }
    
  }
  else{
    $string=["NA"];

    echo json_encode($string);
  }

}



$conn->close();
?>
