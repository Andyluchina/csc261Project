<?php
//empty values will get default

//god I hate this function
function traverseArray($isWhere,$sqlString,$curData1,$prevData2){

	$string1="";
	$isFirst=1;

	foreach($curData1 as $key=>$value){
		if($isWhere==1 &&($value==''||$value==NULL)){
			continue;
		}

		//if($value==$prevData2->{'$key'}){
		//	$value=$prevData2->{'$key'};
		//}
		if($isFirst==1){
			$string1=$string1."$key = ".returnBool($value);
			$isFirst=0;
		}
		else{
			if($isWhere==1){
				$string1=$string1." AND ";
			}
			else{
				$string1=$string1." , "; 
			}
			$string1=$string1."$key = ".returnBool($value);
		}
		
	}

	return $sqlString.$string1;

}
//if string is 0 or 1 it returns the int value of those for database. If its neither it just returns the given string.
function returnBool($numStr){
	if($numStr=='0'){
		return 0;
	}
	else if($numStr=='1'){
		return 1;
	}
	else{
		return $numStr;
	}
}

function givePrivaleges($title, $tablename){
  if($title=='Administrator'){
    return 1;
  }
  else if(($title=='Engineer' || $title=='Mission Leader'|| $title=='Project Leader') && $tablename=='EMPLOYEE'){
    return 2;
  }
  else if($title=='Mission Leader'&& $tablename!='WORKS_ON'){
    return 1;
  }
  else if($title =='Project Leader'&& $tablename!='WORKS_ON' && $tablename!='MISSION'){
    return 1;
  }
  else{
    return 0;
  }
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
$privilages=givePrivaleges($check['TITLE'],$tablename);

if($privilages==1){
	$sql="UPDATE $tablename ".traverseArray(0,"SET ",$cur,$prev)." ".traverseArray(1,"WHERE ",$prev,$prev).";";
	echo json_encode($sql);

	$result3 = $conn->query($sql);
	if ($result3 == TRUE && ($conn->affected_rows > 0) ) {
		$stuff[]="Succesfully updated!";
		echo json_encode($stuff);
	} else {
		$stuff[]="Update not successful.";
		echo json_encode($stuff);
	}

}
else if($privilages==2){
	$sql="UPDATE EMPLOYEE ".traverseArray(0,"SET ",$cur,$prev)." ".traverseArray(1,"WHERE ",$prev,$prev).";";


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
	$stuff[]="NA";
	echo json_encode($stuff);

}



$conn->close();

?>