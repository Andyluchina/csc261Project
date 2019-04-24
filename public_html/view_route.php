
<?php
function givePrivaleges($title, $tablename){
  if($title=='Administrator'){
    return 1;
  }
  else if(($title=='Engineer' || $title=='Mission Leader'|| $title=='Project Leader') && $tablename=='EMPLOYEE' &&){
    return 2;
  }
  else if($title=='Mission Leader' && $tablename!='EMPLOYEE' && $tablename!='WORKS_ON'){
    return 1;
  }
  else if($title =='Project Leader' && $tablename!='EMPLOYEE' && $tablename!='WORKS_ON' && $tablename!='MISSION'){
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

$privalege=givePrivaleges($check['TITLE'],$tablename);


if($privalege==2){
  $sql="SELECT * FROM EMPLOYEE WHERE WORK_ID=$workid;";
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

  $string=["NA"];

  echo json_encode($string);
}
elseif($check['TITLE']=='Project Leader'){
	$sql= "SELECT * FROM ".$data->tablename;
	if($data->tablename=="MISSION" || $data->tablename=="EMPLOYEE"||$data->tablename=="WORKS_ON"){
       $string=["NA"];

       echo json_encode($string);
   }
   else{

    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()){
        $stuff[]=$row;
    }

    echo json_encode($stuff);
}

}
elseif($check['TITLE']=='Mission Leader'){
    $sql= "SELECT * FROM ".$data->tablename;
    if($data->tablename=="EMPLOYEE"||$data->tablename=="WORKS_ON"){
        $string=["NA"];

        echo json_encode($string);
    }
    else{

        $result = $conn->query($sql);
        while($row = $result->fetch_assoc()){
            $stuff[]=$row;
        }

        echo json_encode($stuff);
    }
}
else{
    $sql= "SELECT * FROM ".$data->tablename;
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()){
       $stuff[]=$row;
   }

   echo json_encode($stuff);

}


$conn->close();


?>


