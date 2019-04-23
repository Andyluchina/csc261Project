<?php
//empty values will get default


function traverseArray($string,$attributes){
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
		return "";
	}
	return $string.$string1;

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



if($check['TITLE']=='Administrator'){
	$sql="SELECT * FROM $tablename ".traverseArray("WHERE ",$attributes).";";
	$result3 = $conn->query($sql);


	if ($result3 == TRUE && (mysql_num_rows($result3)!=0)) {
		while($row=$result3->fetch_assoc()){
 			$stuff[]=$row;
		}

        echo json_encode($stuff);
	} else {
		$stuff[]="Data not available.";
		echo json_encode($stuff);
	}

	


}



$conn->close();

?>