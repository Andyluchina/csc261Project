<?php
//empty values will get default


function traverseArray($sqlString,$data1){
	$string1="";
	$num=1;
	foreach($data1 as $key=>$value){
		if($num==1){
			$string1=$string1."'$key' = $value";
			$num=0;
		}
		else{
			$string1=$string1." AND ";
			$string1=$string1."'$key' = $value";
		}
		
	}

	return $sqlString.$string1;

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
$payload=$data->payload;



if($check['TITLE']=='Administrator'){
	$sql="DELETE FROM $tablename ".traverseArray("WHERE ",$payload).";";
	$stuff[]=$sql;
	echo json_encode($stuff);
	
	$result3 = $conn->query($sql);
	if ($result3 == TRUE && ($conn->affected_rows > 0) ) {
		$stuff[]="Succesfully deleted!";
		echo json_encode($stuff);
	} else {
		$stuff[]="Delete not successful.";
		echo json_encode($stuff);
	}

	


}



$conn->close();

?>