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


$mid=$data->mid;


if($check['TITLE']=='Administrator'){
        $sql= "SELECT FNAME,MI,LNAME FROM EMPLOYEE WHERE WORK_ID in (SELECT EMPLOYEE_ID FROM WORKS_ON WHERE PROJ_ID in (SELECT PROJ_ID FROM PROJECT WHERE MISSION_ID=$mid));";

        $result = $conn->query($sql);
    	while($row = $result->fetch_assoc()){
        $stuff[]=$row;
        }

    	echo json_encode($stuff);

}




}
else{
       	$string=["NA"];

        echo json_encode($string);
}
$conn->close();
?>
