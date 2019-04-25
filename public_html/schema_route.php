<?php




require_once('db_setup.php');

$sql = "USE mswanso2_1;";
if ($conn->query($sql) === TRUE) {
         // echo "using Database mswanso2_1";
} else {
	//echo "Error using  database: " . $conn->error;
}

$json=file_get_contents('php://input');
$data=json_decode($json);




$attributes=array();
$tablenames=array('EMPLOYEE'=>array(),'CONTRACTOR'=>array(),'PROJECT'=>array(),'MISSION'=>array(),'WORKS_ON'=>array(),'SUPPLIES'=>array());
$tablename='EMPLOYEE';
$sql="select column_name from information_schema.columns where table_name='$tablename';";
$result = $conn->query($sql);
if($result==TRUE){
	while($row = $result->fetch_assoc()){
		$attributes[]=$row["column_name"];
	}
	$tablenames['$tablename']=$attributes;
}
else{
	$stuff[]="Error";
	echo json_encode($stuff);
}

$tablename='CONTRACTOR';
$sql="select column_name from information_schema.columns where table_name='$tablename';";
$result = $conn->query($sql);
if($result==TRUE){
	while($row = $result->fetch_assoc()){
		$attributes[]=$row["column_name"];
	}
	$tablenames['$tablename']=$attributes;
	
}
else{
	$stuff[]="Error";
	echo json_encode($stuff);
}
$tablename='PROJECT';
$sql="select column_name from information_schema.columns where table_name='$tablename';";
$result = $conn->query($sql);
if($result==TRUE){
	while($row = $result->fetch_assoc()){
		$attributes[]=$row["column_name"];
	}
	$tablenames['$tablename']=$attributes;
	
}
else{
	$stuff[]="Error";
	echo json_encode($stuff);
}
$tablename='MISSION';
$sql="select column_name from information_schema.columns where table_name='$tablename';";
$result = $conn->query($sql);
if($result==TRUE){
	while($row = $result->fetch_assoc()){
		$attributes[]=$row["column_name"];
	}
	$tablenames['$tablename']=$attributes;
	
}
else{
	$stuff[]="Error";
	echo json_encode($stuff);
}
$tablename='WORKS_ON';
$sql="select column_name from information_schema.columns where table_name='$tablename';";
$result = $conn->query($sql);
if($result==TRUE){
	while($row = $result->fetch_assoc()){
		$attributes[]=$row["column_name"];
	}
	$tablenames['$tablename']=$attributes;
	
}
else{
	$stuff[]="Error";
	echo json_encode($stuff);
}
$tablename='SUPPLIES';

$sql="select column_name from information_schema.columns where table_name='$tablename';";
$result = $conn->query($sql);
if($result==TRUE){
	while($row = $result->fetch_assoc()){
		$attributes[]=$row["column_name"];
	}
	$tablenames['$tablename']=$attributes;
	
}
else{
	$stuff[]="Error";
	echo json_encode($stuff);
}
echo json_encode($tablenames);


$conn->close();
?>