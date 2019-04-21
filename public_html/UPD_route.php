<?php
//empty values will get default


function traverseArray($sqlString,$curData1,$prevData2){

	foreach($curData1 as $key=>$value){
		if($value==$prevData2[$key]){
			$sqlString=$sqlString.$key."=".$prevData2[$key].",";
		}
		else{
			$sqlString=$sqlString.$key."=".$value.",";
		}

	}
	return $sqlString;

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

$tablename=$data->tableName;
$prev=$data->payload->prev;
$cur=$data->payload->cur;



if($check['TITLE']=='Administrator'){
	$sql="UPDATE $tablename ".traverseArray("SET ",$cur,$prev)." ".traverseArray("WHERE ",$prev,$prev).";";


	$result3 = $conn->query($sql);
	if ($result3 == TRUE && ($conn->affected_rows > 0) ) {
		$stuff[]="Succesfully updated!";
		echo json_encode($stuff);
	} else {
		$stuff[]="Update not successful.";
		echo json_encode($stuff);
	}

	


}



$conn->close();

?>