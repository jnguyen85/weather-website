const request = require("request");

const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=e24641645de3aed91656dea18c196303&query=${lat},${lon}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log("Unable to connect to weather service!");
    } else if (response.body.error) {
      console.log("Unable to find location");
    } else {
      const currentTemp = response.body.current.temperature;
      const feelTemp = response.body.current.feelslike;
      const weatherDescription = response.body.current.weather_descriptions[0];
      console.log(
        `${weatherDescription}. It it currently ${currentTemp} out. It feels like ${feelTemp} degrees out.`
      );
      callback(
        undefined,
        `${weatherDescription}. It it currently ${currentTemp} out. It feels like ${feelTemp} degrees out.`
      );
    }
  });
};

module.exports = forecast;
