import time
import datetime
import board
import busio
import mariadb
import sys
from adafruit_htu21d import HTU21D

# Create library object using our Bus I2C port
i2c = busio.I2C(board.SCL, board.SDA)
sensor = HTU21D(i2c)

# Connect to the database

try:
   conn = mariadb.connect(
      user="root",
      password="password",
      host="localhost",
      database="weather",
      port=3306)
except mariadb.Error as e:
   print(f"Error connecting to MariaDB Platform: {e}")
   sys.exit(1)

cur = conn.cursor()

#Send data from the sensor to the database
new_heure = datetime.datetime.now()
new_temperature = "%0.1f" % sensor.temperature
new_humidite = "%0.1f" % sensor.relative_humidity

try:
    cur.execute(
        "INSERT INTO test (heure, temperature, humidite) VALUES (?, ?, ?)", 
        (new_heure, new_temperature, new_humidite))
except mariadb.Error as e:
    print(f"Error: {e}")

conn.commit() 

conn.close()
