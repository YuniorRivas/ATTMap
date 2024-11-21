// Ensure the script runs only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Cities data (replace this with dynamically loaded JSON or expanded data)
    const cities = [
        { city: "Adamsville", state: "Alabama", latitude: 33.5907, longitude: -86.9561 },
        { city: "Chandler", state: "Arizona", latitude: 33.3062, longitude: -111.8413 },
        { city: "Alexander", state: "Arkansas", latitude: 34.6339, longitude: -92.4429 }
        // Add more cities
    ];

    // Initialize the map
    console.log("Initializing map...");
    const map = L.map('map').setView([37.8, -96], 4); // Center of the US

    // Add a tile layer (OpenStreetMap)
    console.log("Adding tile layer...");
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add city markers
    console.log("Adding markers...");
    cities.forEach(city => {
        console.log(`Adding marker for ${city.city}, ${city.state}`);
        L.marker([city.latitude, city.longitude])
            .addTo(map)
            .bindPopup(`<b>${city.city}, ${city.state}</b>`);
    });

    console.log("Map setup complete.");
});
