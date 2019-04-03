
<?php
    require_once('db_setup.php');
    $sql = "USE mswanso2_1;";
    if ($conn->query($sql) === TRUE) {
            echo "\nUsing Database mswanso2_1";
    } else {
	echo "Error using  database: " . $conn->error;
    }
     	$sql = "SELECT * FROM SUPPLIES";

        $result = $conn->query($sql);

echo "<table border='1'>
<tr>
<th>PROJ_ID</th>
<th>CONTRACTOR_ID</th>
<th>COST</th>
</tr>";

while($row = $result->fetch_assoc())
{
echo "<tr>";
echo "<td>" . $row['PROJ_ID'] . "</td>";
echo "<td>" . $row['CONTRACTOR_ID'] . "</td>";
echo "<td>" . $row['COST'] . "</td>";

echo "</tr>";
}
echo "</table>";
$conn->close();


?>


