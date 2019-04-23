<?php
//adds employee to works on

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

$wrkid=$data->emp_id;
$pid=$data->pid;
if($wrkid==''||$pid==''){
    $stuff[]="Work_ID and/or project id cannot be empty. Please re-enter.";
    echo json_encode($stuff);    
}
else{
    if($check['TITLE']=='Administrator'||$check['TITLE']=='Mission Leader'){
        $sql="SELECT EMPLOYEE_ID FROM WORKS_ON WHERE EMPLOYEE_ID=$wrkid;";
        $result3 = $conn->query($sql);
        if($result3!=TRUE && mysql_num_rows($result3)==0){
            $sql= "INSERT INTO WORKS_ON VALUES($wrkid,$pid);";
            $result = $conn->query($sql);
            if ($result == TRUE&& ($conn->affected_rows > 0) ) {
                $stuff[]="Succesfully added!";
                echo json_encode($stuff);
            } else {
                $stuff[]="Add not successful.";
                echo json_encode($stuff);
            }
        }
        else{
            $stuff[]="Employee_id present. Either delete employee from works_on table and re-add or update entry.";
            echo json_encode($stuff);

        }
    }
    else{
        $string=["NA"];

        echo json_encode($string);
    }

}

//checks if employee already works on something.

$conn->close();
?>
