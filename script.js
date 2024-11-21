/* Base styles */
body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', Arial, sans-serif;
    background: #121212; /* Dark background for sleek look */
    color: #fff;
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Ensures the body spans the full viewport height */
}

/* Header styles */
h1 {
    text-align: center;
    margin: 20px 0;
    font-size: 2.8rem;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
    letter-spacing: 1px;
    text-transform: uppercase;
}

/* Map container styles */
#map {
    flex: 1; /* Allows the map to expand while leaving room for the footer */
    width: 90%; /* Center the map with a slight margin */
    margin: 0 auto;
    border-radius: 15px; /* Rounded corners for modern design */
    overflow: hidden;
    background: #1c1c1c; /* Placeholder background while map loads */
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.8); /* Deep shadow for sleekness */
    border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border */
}

/* Footer styles */
footer {
    display: flex; /* Use flexbox for alignment */
    justify-content: space-between; /* Space items across the footer */
    align-items: center; /* Vertically center items */
    padding: 15px 20px; /* Add padding for more space */
    background: #121212; /* Slightly lighter than background */
    color: #ffffff;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    flex-wrap: wrap; /* Allow items to wrap on smaller screens */
}

/* Adjustments for smaller screens */
@media (max-width: 768px) {
    footer {
        flex-direction: column; /* Stack items vertically */
        align-items: center;
        text-align: center;
    }
}
