const axios = require('axios');

const ACCESS_TOKEN = "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";

async function summarizeText(text) {
  let data = JSON.stringify({
    "inputs": text,
    "parameters": {
      "max_length": 100,
      "min_length": 30
    }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + ACCESS_TOKEN
    },
    data: data
  };

  try {
    const response = await axios.request(config);
    return response.data[0].summary_text;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to be caught by the caller
  }
}

// Export the function if needed
module.exports = summarizeText;
