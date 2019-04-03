<?php
	require_once('db_setup.php');
    $sql = "USE mswanso2_1;";
    if ($conn->query($sql) === TRUE) {
            echo "\nUsing Database mswanso2_1";
    } else {
        echo "Error using  database: " . $conn->error;
    }
	$sql = "SELECT * FROM EMPLOYEE";

	$result = $conn->query($sql);

echo "<table border='1'>
<tr>
<th>FName</th>
<th>MI</th>
<th>LName</th>
<th>Phone_num</th>
<th>Work_id</th>
<th>Title</th>
</tr>";

while($row = $result->fetch_assoc())
{
echo "<tr>";
echo "<td>" . $row['FNAME'] . "</td>";
echo "<td>" . $row['MI'] . "</td>";
echo "<td>" . $row['LNAME'] . "</td>";
echo "<td>" . $row['PHONE_NUM'] . "</td>";
echo "<td>" . $row['WORK_ID'] . "</td>";
echo "<td>" . $row['TITLE'] . "</td>";
echo "</tr>";
}
echo "</table>";
$conn->close();


?>
