<?php
function getAttributes($tablename){
	$tablenames=array();
	sql="select column_name from information_schema.columns where table_name='$tablename';";
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
$schema=array();

$schema[0]=getAttributes("EMPLOYEE")
$schema[1]=getAttributes("MISSION")
$schema[2]=getAttributes("PROJECT")
$schema[3]=getAttributes("WORKS_ON")
$schema[4]=getAttributes("CONTRACTOR")
$schema[5]=getAttributes("SUPPLIES")

echo json_encode($schema);




$conn->close();
?>