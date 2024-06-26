const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios')
// const fetch = require('node-fetch');
// import fetch from 'node-fetch';

const app = express();
const port = 5000;

// Enable CORS
app.use(cors({
  origin: "http://localhost:3000"
}));

// Use body-parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submitQuotation', (req, res) => {
  // Handle the forwarded data
  // const clientRequest = await axios.get('http://localhost:5001', req.body)
  console.log('Received quotation from Client Portal:', req.body);

  // Process the data as needed

  axios.get('http://localhost:5000/serviceQuotation')
  .then((response) => console.log(response.data)) // Use text() instead of json()
  // .then((data) => console.log(data))
  .catch((error) => console.error('Error fetching service requests:', error));


  // Respond to the client
  res.json({ success: true, message: 'Quotation received successfully in Admin Portal' });
});

// app.get('/', (req, res) => {
//   console.log('hello world', req.body)
//   res.send('Hello World')
// })

app.listen(port, () => {
  console.log(`Admin Portal Backend listening at http://localhost:${port}`);
});
