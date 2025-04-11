async function getWeather(location) {
  const endpoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=QWZJMDWU8LPJG2MM95WZFM83K&contentType=json`;
  const sender = await fetch(endpoint);
  const response = await sender.text();
  console.log(JSON.parse(response));
  return JSON.parse(response);
}