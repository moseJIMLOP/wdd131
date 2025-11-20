
document.addEventListener("DOMContentLoaded", () => {

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 25;
const windSpeed = 15; 
const condition = "Sunny";

function calculateWindChill(t, v) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

let windChillText = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
    windChillText = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
} 

document.getElementById("temp").textContent = temperature;
document.getElementById("wind").textContent = windSpeed;
document.getElementById("conditions").textContent = condition;
document.getElementById("chill").textContent = windChillText;
});