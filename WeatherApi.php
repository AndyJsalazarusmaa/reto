<?php
// Parámetros
$apiKeyWeather = "4090239d69cdb3874de692fd18539299";
$lat = $_POST["latitude"];
$long = $_POST["longitude"];
$city = $_POST["city"];

if ($city == null | $city == "")
{
    $data = json_decode(file_get_contents('http://api.openweathermap.org/data/2.5/weather?lat='.$lat.'&lon='.$long.'&units=metric&appid='.$apiKeyWeather));
}
else
{
    $data = json_decode(file_get_contents('https://api.openweathermap.org/data/2.5/weather?q='.$city.'&appid='.$apiKeyWeather));
}


echo json_encode($data);
?>  