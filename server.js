const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Exam.html');
});

// Handle form submission with validation
app.post('/submit', (req, res) => {
    const studentId = req.body.studentId;
    const studentName = req.body.studentName;
    const mobileNo = req.body.mobileNo;
    const email = req.body.email;

    // Perform your validation here
    const errors = [];

    if (!studentId || studentId.length < 6 || studentId.length > 8) {
        errors.push('Student ID must be 6 to 8 characters long.');
    }

    if (!mobileNo || !/^[0-9]{9,}$/.test(mobileNo)) {
        errors.push('Mobile Number must contain only positive numbers and be at least 9 digits long.');
    }

    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/.test(email)) {
        errors.push('Invalid Email ID. It must have two domain parts and end with .com or .in.');
    }

    if (errors.length > 0) {
        res.status(400).send(errors.join('<br>'));
    } else {
        // Handle the valid form submission here
        res.send('Form submitted successfully.');
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
