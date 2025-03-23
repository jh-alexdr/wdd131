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

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    document.getElementById("lastModified").textContent = `${formattedDate} ${formattedTime}`;
});
