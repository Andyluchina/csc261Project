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


if($check['TITLE']=='Administrator'){
$sql="SELECT MAX(PROJ_ID) FROM PROJECT;";
        $result = $conn->query($sql);
        $row=$result->fetch_assoc();
        $num=$row['PROJ_ID'];
        $sql= "INSERT INTO PROJECT values('$pname',$num++,$mid,$plid);";

        $result = $conn->query($sql);
        if ($result === TRUE) {
        $stuff[]="success";
    echo json_encode($stuff);
        } else {
        $stuff[]="error";
    echo json_encode($stuff);
}
else{
     	$string=["NA"];

        echo json_encode($string);
}
$conn->close();
?>
