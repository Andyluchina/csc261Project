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

$fname=$data->fname;
$mi=$data->mi;
$lname=$data->lname;
$pnum=$data->pnum;
$title=$data->title;


if($check['TITLE']=='Administrator'){
	$sql="SELECT MAX(WORK_ID) FROM EMPLOYEE;";
	$result3 = $conn->query($sql);
	$row=$result3->fetch_assoc();
	$num=$row['MAX(WORK_ID)']+1;
	$sql= "INSERT INTO EMPLOYEE VALUES('$fname','$mi','$lname','$pnum',$num,'$title');";

	$result = $conn->query($sql);
	if ($result === TRUE) {
	$stuff[]="success";
    echo json_encode($stuff);
	} else {
	$stuff[]="error";
    echo json_encode($stuff);
	}

    

}
else{
	$string=["NA"];

	echo json_encode($string);
}
$conn->close();
?>
