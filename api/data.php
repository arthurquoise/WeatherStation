<?php
/**
 * filename: data.php
 * description: this will return the temperature of the sensor
 */

//setting header to json
header('Content-Type: application/json');

//database
define('DB_HOST', '127.0.0.1');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'password');
define('DB_NAME', 'weather');

//get connection
$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
  die("Connection failed: " . $mysqli->error);
}

//query to get data from the table
$query = sprintf("SELECT * FROM data ORDER BY heure DESC limit 10");

//execute query
$result = $mysqli->query($query);

//loop through the returned data
$dataDesc = array();
foreach ($result as $row) {
  $dataDesc[] = $row;
}

$data = array_reverse($dataDesc);

//free memory associated with result
$result->close();

//close connection
$mysqli->close();

//now print the data
print json_encode($data);

?>