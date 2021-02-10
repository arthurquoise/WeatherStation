# WeatherStation
## Objectif du projet
* Réaliser une station météo avec un micro-ordinateur qui nous donnera les informations sur une interface Web

## Outils
* Raspberry Pi Zero W
* Adafruit HTU21D-F Temperature & Humidity Sensor 
* Breadboard
* cables

## Fonctionnement du projet
* Le capteur de temperature/humidité est connecté sur les pins GPIO du Raspberry
* Un script python insère les données dans la la base de données toutes les 5min
* Le site web recupère les données via une API en PHP qu'il affiche sous forme graphique à l'aide de la librairie ChartJS
