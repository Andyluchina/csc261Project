<?php
function getAttributes($tablename){
	$tablenames=array();
	$sql="select column_name from information_schema.columns where table_name=".$tablename;
	$result = $conn->query($sql);
	if($result==TRUE){
		while($row = $result->fetch_assoc()){
			$tablenames[]=$row["column_name"];
		}
	}
	else{
		$stuff[]="Error";
		echo json_encode($stuff);
	}
	$conn->close();
	return $tablenames;

}

require_once('db_setup.php');

$sql = "USE mswanso2_1;";
if ($conn->query($sql) === TRUE) {
         // echo "using Database mswanso2_1";
} else {
	//echo "Error using  database: " . $conn->error;
}

$json=file_get_contents('php://input');

$tablenames=array();
$sql="select column_name from information_schema.columns where table_name=".$tablename;
$result = $conn->query($sql);
if($result==TRUE){
	while($row = $result->fetch_assoc()){
		$tablenames[]=$row["column_name"];
	}
}
else{
	$stuff[]="Error";
	echo json_encode($stuff);
}

$shemaObj->EMPLOYEE=$tablenames;




/*$shemaObj->MISSION=getAttributes('MISSION');
$shemaObj->PROJECT=getAttributes('PROJECT');
$shemaObj->WORKS_ON=getAttributes('WORKS_ON');
$shemaObj->CONTRACTOR=getAttributes('CONTRACTOR');
$shemaObj->SUPPLIES=getAttributes('SUPPLIES');*/


echo json_encode($schemaObj);

$conn->close();
?>