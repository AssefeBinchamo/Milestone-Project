const express = require('express'); // Import the Express module
const app = express(); // Create an Express application
const port = 3000; // Define the port number for the server

app.use(express.urlencoded({ extended: true })); // Middleware to parse application/x-www-form-urlencoded data

app.use(express.static(__dirname)); // Middleware to serve static files from the current directory

// Define a route to serve the index.html file when users visit the root URL ('/')
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Define a route to serve the style.css file when requested
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

// Define a route to handle form submissions via POST request
app.post('/submit-form', (req, res) => {
    const name = req.body.name; // Extract name from the request body
    const email = req.body.email; // Extract email from the request body
    const message = req.body.message; // Extract message from the request body

    console.log({ name, email, message }); // Log form data to the console

    // Send a response with the submitted form data
    res.send(`
        <h1>Form submitted:</h1>
        <p>First & Last Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
    `);
});

// Start the Express server and listen for incoming requests on the specified port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
