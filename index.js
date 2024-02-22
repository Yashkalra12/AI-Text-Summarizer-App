const express = require('express');
const summarizeText = require('./summarize.js');
const app = express();
const port = 3002;

// Parses JSON bodies (as sent by API clients)
app.use(express.json());

// Serves static files from the 'public' directory
app.use(express.static('public'));

// Handle POST requests to the '/summarize' endpoint
app.post('/summarize', async (req, res) => {
  try {
    const text = req.body.text_to_summarize;
    const summary = await summarizeText(text);
    res.send(summary);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
