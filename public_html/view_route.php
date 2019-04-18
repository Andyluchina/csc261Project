
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


if($check['TITLE']=='Engineer'){
	$string=["NA"];

    echo json_encode($string);
}
elseif($check['TITLE']=='Project Leader'){
	$sql= "SELECT * FROM ".$data->tablename;
	if($data->tablename=="MISSION" || $data->tablename=="EMPLOYEE"||$data->tablename=="SUPPLIES"||$data->tablename=="WORKS_ON"){
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


