<?php
//empty values will get default

//god I hate this function
function traverseArray($num2,$sqlString,$curData1,$prevData2){

	$string1="";
	$num=1;

	foreach($curData1 as $key=>$value){
		$value=checkIfID('$key',$value,$prevData2->{'$key'});

		if($num2==1&&($value==''||$value==NULL)){
			continue;
		}

		if($value==$prevData2->{'$key'}){
			$value=$prevData2->{'$key'};
		}
		if($num==1){
			if($value=='0'){
				$string1=$string1."$key = 0";
			}
			else if($value=='1'){
				$string1=$string1."$key = 1";
			}
			else{
				$string1=$string1."$key = '$value'";
			}
			$num=0;
		}
		else{
			if($num2==1){
				$string1=$string1." AND ";
			}
			else{
				$string1=$string1." , ";
			}
			if($value=='0'){
				$string1=$string1."$key = 0";
			}
			else if($value=='1'){
				$string1=$string1."$key = 1";
			}
			else{
				$string1=$string1."$key = '$value'";
			}
		}
		
	}

	return $sqlString.$string1;

}
function checkIfID($string1,$value,$newVal){
	if($string1=='PROJ_ID'||$string1=='WORK_ID'||$string1=='CONTRACTOR_ID'||$string1=='MISSION_ID'||$string1=='PROJ_ID'){
		return $value;
	}
	return $newVal;

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
$prev=$data->payload->pre;
$cur=$data->payload->cur;



if($check['TITLE']=='Administrator'){
	$sql="UPDATE $tablename ".traverseArray(0,"SET ",$cur,$prev)." ".traverseArray(1,"WHERE ",$prev,$prev).";";


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