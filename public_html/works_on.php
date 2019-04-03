
<?php
    require_once('db_setup.php');
    $sql = "USE mswanso2_1;";
    if ($conn->query($sql) === TRUE) {
            echo "Using Database mswanso2_1";
    } else {
	echo "\nError using  database: " . $conn->error;
    }
     	$sql = "SELECT * FROM WORKS_ON";

        $result = $conn->query($sql);
echo "\n(Will add in more works_on later)";
echo "<table border='1'>
<tr>
<th>EMPLOYEE_ID</th>
<th>PROJ_ID</th>
</tr>";

while($row = $result->fetch_assoc())
{
echo "<tr>";
echo "<td>" . $row['EMPLOYEE_ID'] . "</td>";
echo "<td>" . $row['PROJ_ID'] . "</td>";

echo "</tr>";
}
echo "</table>";
$conn->close();


?>



