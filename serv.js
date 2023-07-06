const express = require('express');
const app = express();

// Define the info function
function info(req, res) {
  res.sendFile(__dirname + '/interface.html');
}

// Assign the route handler
app.get('/', info);

// Start the server
app.listen(3030, function() {
  console.log('Server running on port 3030');
});
