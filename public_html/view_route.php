
<?php
function givePrivaleges($title, $tablename){
  if($title=='Administrator'){
    return 1;
  }
  else if($title=='Engineer' && $tablename=='EMPLOYEE'){
    return 2;
  }
  else if($title=='Mission Leader' && $tablename=='EMPLOYEE'){
    return 3;
  }
  else if($title=='Project Leader' && $tablename=='EMPLOYEE'){
    return 4;
  }
  else if($title=='Mission Leader'&& $tablename!='WORKS_ON'){
    return 1;
  }
  else if($title =='Project Leader'&& $tablename!='WORKS_ON' && $tablename!='MISSION'){
    return 1;
  }
  else{
    return 0;
  }
}

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
$wrkid=$data->workid;

$privalege=givePrivaleges($check['TITLE'],$tablename);


if($privalege==2){
  $sql="SELECT * FROM EMPLOYEE WHERE WORK_ID=".$data->workid;
  $result3 = $conn->query($sql);

  if ($result3 == TRUE) {
    while($row=$result3->fetch_assoc()){
      $stuff[]=$row;
    }
    if(empty($stuff)){
      $stuff[]="Data not available.";
    }

    echo json_encode($stuff);
  } else {
    $stuff[]="Data not available.";
    echo json_encode($stuff);
  }
}
else if($privalege==3){

}
else if($privalege==4){
  $sql="SELECT FNAME,MI,LNAME,PHONE_NUM,TITLE FROM EMPLOYEE WHERE WORK_ID IN (SELECT EMPLOYEE_ID FROM WORKS_ON WHERE PROJ_ID IN (SELECT PROJ_ID FROM PROJECT WHERE PLEADER_ID=".$data->workid."));";
  $result3 = $conn->query($sql);
  if ($result3 == TRUE) {
    while($row=$result3->fetch_assoc()){
      $stuff[]=$row;
    }
    if(empty($stuff)){
      $stuff[]="Data not available.";
    }

    echo json_encode($stuff);
  } else {
    $stuff[]="Data not available.";
    echo json_encode($stuff);
  }

}
else if($privalege==1){
	$sql= "SELECT * FROM ".$data->tablename;
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()){
       $stuff[]=$row;
   }

   echo json_encode($stuff);

}
else if($privalege==0){
        $string=["NA"];

        echo json_encode($string);
}


$conn->close();


?>


