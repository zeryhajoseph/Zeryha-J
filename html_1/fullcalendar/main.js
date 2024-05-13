document.addEventListener('DOMContentLoaded', function() {
    // Calendar initialization code
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
        // Other calendar options
    });
    calendar.render();

    // Form submission logic
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Add form validation logic here (e.g., check if fields are filled)
        // If validation passes, you can proceed with form submission

        // Example: Display a confirmation message
        alert('Appointment booked successfully!');

        // Example: Send form data to the server using fetch API
        fetch('/submit', {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            // Handle server response (e.g., show a success message)
            console.log('Form submitted successfully:', response);
        })
        .catch(error => {
            // Handle errors (e.g., show an error message)
            console.error('Error submitting form:', error);
        });
    });
});
const express = require('express');
const app = express();
const port = 3000;

// Example route for form submission
app.post('/submit', (req, res) => {
    // Process form data (e.g., save to database)
    console.log('Form data received:', req.body);

    // Send a response back to the client
    res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

