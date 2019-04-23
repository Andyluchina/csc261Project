<?php
//adds contractor and project to suppliers
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

$pid=$data->pid;
$cid=$data->cid;
$budget=$data->budget;
if($pid==''||$cid==''){
    $stuff[]="Project ID and/or Contractor ID cannot be empty. Please re-enter.";
    echo json_encode($stuff);    
}
else{
    if($check['TITLE']=='Administrator'||$check['TITLE']=='Mission Leader'){
        $sql="SELECT PROJ_ID FROM SUPPLIES WHERE PROJ_ID=$pid;";
        $result3 = $conn->query($sql);
        if($result3!=TRUE){
            $sql= "INSERT INTO SUPPLIES VALUES($pid,$cid,NULL);";
            $result = $conn->query($sql);
            if ($result == TRUE && ($conn->affected_rows > 0)) {
                $stuff[]="Succesfully added!";
                echo json_encode($stuff);
            } else {
                $stuff[]="Add not successful.";
                echo json_encode($stuff);
            }
        }
        else{
            $stuff[]="PROJ_ID present. Either delete project from supplies table and re-assign or update entry.";
            echo json_encode($stuff);

        }

    }
    else{
        $string=["NA"];

        echo json_encode($string);
    }

}

//checks if project already has supplier.


$conn->close();
?>
