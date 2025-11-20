document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = 
  document.lastModified;

const temperature = 10;
const windSpeed = 10; 
const condition = "Cloudy";

function calculateWindChill(t, v) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(v, 0.16) +
    0.3965 * t * Math.pow(v, 0.16)
  );
}
let windChillText;

if (temperature <= 10 && windSpeed > 4.8) {

  const wc = calculateWindChill(temperature, windSpeed);
  windChillText = wc.toFixed(1) + " °C";
} else {
  windChillText = "N/A";
}

document.getElementById("temp").textContent = temperature + " °C";
document.getElementById("wind").textContent = windSpeed + " km/h";
document.getElementById("condition").textContent = condition;
document.getElementById("Chill").textContent = windChillText;