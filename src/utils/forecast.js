const request = require("request");

const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=e24641645de3aed91656dea18c196303&query=${lat},${lon}&units=f`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!");
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      const currentTemp = body.current.temperature;
      const feelTemp = body.current.feelslike;
      const weatherDescription = body.current.weather_descriptions[0];
      const humidity = body.current.humidity;

      callback(
        undefined,
        `${weatherDescription}. It it currently ${currentTemp} out. It feels like ${feelTemp} degrees out. The humidity is ${humidity}`
      );
    }
  });
};

module.exports = forecast;
