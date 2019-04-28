<?php
//adds employee to works on
function givePrivaleges($title){
  if($title=="Administrator"){
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
$result2 = $conn->query($sql);
$check = $result2->fetch_assoc();

$employees=$data->payload->employees;
$pid=$data->payload->pid;
$privaleges=givePrivaleges($check['TITLE']);
$helperArray=array();
$employee=
$check==0;
if($privaleges==1){
    foreach($employees as $key=>$value){

        $employee=$value->WORK_ID;
        $sql= "INSERT INTO WORKS_ON VALUES(".$employee.",".$pid.");";
        $result = $conn->query($sql);

        if ($result == TRUE ) {
            continue;
        } else {
            $check=1;
            $helperArray[]="Employee:".$value->EMPLOYEE."ID:".$value->WORK_ID;

        }
    }   
    if($check==1){
        $string=["Employees not able to be assigned:"];
        echo json_encode($string);
        echo json_encode($helperArray);
    }
    else{
        $string=["All employees successfully assigned."];
        echo json_encode($string);
    }
}
else{
    $string=["NA"];
    echo json_encode($string);
}



$conn->close();
?>
