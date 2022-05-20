<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Clima en tu lugar</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <link href="index.css" rel="stylesheet" type="text/css">
    </head>
    <body onload="onLoad()">
        <div id="loader" class="loader">Loading...</div>
        <div id="container" class="contaier">
            <div class="block">
                <div id="location"></div>
                <div id="date"></div>
                <div id="description"></div>
            </div>
            <div class="block">
                <div class="information-container">
                    Temperature
                    <div class="information" id="temperature"></div>
                </div>
                <div class="information-container">
                    Humidity
                    <div class="information" id="humidity"></div>
                </div>
                <div class="information-container">
                    Pressure
                    <div class="information" id="pressure"></div>
                </div>
            </div>
        </div>
        <script src="index.js"></script>
    </body>
</html>