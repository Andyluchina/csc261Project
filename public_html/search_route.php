<?php
//empty values will get default



function traverseArray($string,$attributes,$boolean,$tablename){
	$string1="";
	$check=1;
	$num=1;
	$num2=0;

	foreach($attributes as $key=>$value){
		
		if($value!=''||$value!=NULL){
			$check=0;
		}
		if($num==1){
			if($value!=''||$value!=NULL){
				$string1=$string1."$key = '$value'";
			}
			else{
				$num2=1;
			}
			$num=0;
		}
		else{
			if($value!=''||$value!=NULL){
				if($num2==1){
					$string1=$string1."$key = '$value'";
					$num2=0;
				}
				else{
					$string1=$string1." AND ";
					$string1=$string1."$key = '$value'";
				}
			}
			
		}
		
	}
	if($check==1){
		return "".checkAssignable($string,$check,$boolean,$tablename);
	}
	return $string.$string1.checkAssignable($string,$check,$boolean,$tablename);

}

function checkAssignable($string,$check,$boolean,$tablename){
	$sqlStr=';';
	if($boolean && $tablename=='EMPLOYEE'){
		if($check==1){
			$sqlStr=$string." WORK_ID NOT IN (SELECT EMPLOYEE_ID FROM WORKS_ON);";
			return $sqlStr;
		}
		else{
			$sqlStr=" AND WORK_ID NOT IN (SELECT EMPLOYEE_ID FROM WORKS_ON);";
			return $sqlStr;
		}
	}
	else{
		return $sqlStr;
	}
}





function givePrivaleges($title, $tablename){
  if($title=='Administrator'){
    return 1;
  }
  else if($title=='Engineer' && $tablename=='EMPLOYEE'){
    return 2;
  }
  else if($title=='Mission Leader' && $tablename=='EMPLOYEE'){
    return 3;
  }
  else if($title=='Project Leader' && $tablename=='EMPLOYEE'){
    return 4;
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

$tablename=$data->tablename;
$attributes=$data->payload;
$boolean=$data->assignable;
$privalege=givePrivaleges($check['TITLE'],$tablename);

if($privalege==1){
	$sql="SELECT * FROM $tablename ".traverseArray("WHERE ",$attributes,$boolean,$tablename);
	$result3 = $conn->query($sql);
	if ($result3 == TRUE) {
		while($row=$result3->fetch_assoc()){
			$stuff[]=$row;
		}
		if(empty($stuff)){
			$stuff[]="Data not available.";
		}

		echo json_encode($stuff);
	} else {
		$stuff[]="Data not available.";
		echo json_encode($stuff);
	}
}
else if($privalege==2){
	$sql="SELECT * FROM EMPLOYEE WHERE WORK_ID=".$data->workid;
	$result3 = $conn->query($sql);

	if ($result3 == TRUE) {
		while($row=$result3->fetch_assoc()){
			$stuff[]=$row;
		}
		if(empty($stuff)){
			$stuff[]="Data not available.";
		}

		echo json_encode($stuff);
	} else {
		$stuff[]="Data not available.";
		echo json_encode($stuff);
	}

}
else{
	$stuff[]="NA";
	echo json_encode($stuff);

}



$conn->close();

?>