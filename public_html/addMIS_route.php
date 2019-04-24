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



$mname=$data->mname;
$mlid=$data->mlid;

if($mlid==''||$mname==''){
    $stuff[]="Mission name and/or mission leader ID must not be empty. Please re-enter values.";
    echo json_encode($stuff);
}
else{
    if($check['TITLE']=='Administrator'){
        $sql="SELECT TITLE FROM EMPLOYEE WHERE WORK_ID=$mlid;";
        $result3 = $conn->query($sql);
        $title=$result3->fetch_assoc();
        if($title['TITLE']=="Mission Leader"){
            $sql="SELECT MAX(MISSION_ID) FROM MISSION;";
            $result3 = $conn->query($sql);
            $row=$result3->fetch_assoc();
            $num=$row['MAX(MISSION_ID)']+1;
            $sql= "INSERT INTO MISSION VALUES('$mname',$num,$mlid,TRUE);";

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
            $stuff[]="Employee not mission leader. Either update employee title or use a different employee.";
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
