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

$workid=$data->workid1;

if($workid==''){
  $stuff[]="Value entered empty. Please re-enter.";
  echo json_encode($stuff);

}
else{
    if($check['TITLE']=='Administrator'){
        $sql= "DELETE FROM EMPLOYEE WHERE WORK_ID=$workid;";

        $result = $conn->query($sql);
        if ($result === TRUE && ($conn->affected_rows > 0)) {
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

}

$conn->close();
?>