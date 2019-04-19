<?php
//empty values will get default
function checkDefault($enteredVal,$defaultVal){
	if($enteredVal==''){
		return $defaultVal;
	}
	return $enteredVal;
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
$result1 = $conn->query($sql);
$check = $result1->fetch_assoc();

$wrkid=$data->workid1;
if($wrkid==''){
	$stuff[]="WORK_ID cannot be empty. Please re-enter.";
	echo json_encode($stuff);

}
else{
	$sql="SELECT * FROM EMPLOYEE WHERE WORK_ID=$wrkid;";
	if($check['TITLE']=='Administrator'){
		$result2 = $conn->query($sql);
		if($result2==TRUE && mysql_num_rows($result2)!=0){
			$row=$result2->fetch_assoc();
			$fname=checkDefault($data->fname,$row['FNAME']);
			$mi=checkDefault($data->mi,$row['MI']);
			$lname=checkDefault($data->lname,$row['LNAME']);
			$pnum=checkDefault($data->pnum,$row['PHONE_NUM']);
			$title=checkDefault($data->title,$row['TITLE']);

			$sql="UPDATE EMPLOYEE SET FNAME=$fname,MI=$mi,LNAME=$lname,PHONE_NUM=$pnum,TITLE=$title WHERE WORK_ID=$wrkid;";
			$result3 = $conn->query($sql);
			if ($result3 == TRUE && ($conn->affected_rows > 0) ) {
				$stuff[]="Succesfully updated!";
				echo json_encode($stuff);
			} else {
				$stuff[]="Update not successful.";
				echo json_encode($stuff);
			}

		}
		else{
			$stuff[]="WORK_ID invalid.";
			echo json_encode($stuff);
		}

	}

}

$conn->close();

?>