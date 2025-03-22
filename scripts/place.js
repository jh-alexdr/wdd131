function calculateWindChill(temp, windSpeed) {
    return (temp <= 10 && windSpeed > 4.8)
        ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1)
        : "N/A";
}

document.addEventListener("DOMContentLoaded", () => {
    const temp = 10; // Static temperature
    const windSpeed = 5; // Static wind speed
    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("windChill").textContent = windChill;

    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
