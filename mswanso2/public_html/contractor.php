
<?php
    require_once('db_setup.php');
    $sql = "USE mswanso2_1;";
    if ($conn->query($sql) === TRUE) {
            echo "\nUsing Database mswanso2_1";
    } else {
	echo "Error using  database: " . $conn->error;
    }
     	$sql = "SELECT * FROM CONTRACTOR";

        $result = $conn->query($sql);

echo "<table border='1'>
<tr>
<th>NAME</th>
<th>CONTRACTOR_ID</th>
</tr>";

while($row = $result->fetch_assoc())
{
echo "<tr>";
echo "<td>" . $row['NAME'] . "</td>";
echo "<td>" . $row['CONTRACTOR_ID'] . "</td>";

echo "</tr>";
}
echo "</table>";
$conn->close();


?>

