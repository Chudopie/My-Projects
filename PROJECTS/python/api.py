import requests

latitude = 51.507351
longitude = -0.127758

api_url = "https://api.open-meteo.com/v1/forecast?latitude={{lat}}&longitude={{lon}}&current_weather=true&temperature_unit=fahrenheit".format(*args: latitude, longitude)