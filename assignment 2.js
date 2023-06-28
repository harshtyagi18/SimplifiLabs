const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.json());

function handleGetRequest(req, res) {
  console.log(req);
  res.send('Hi! I am a server made by Node.js using GET method');
}

function handlePostRequest(req, res) {
  console.log(req);
  res.send('Hi! I am a server made by Node.js using POST method');
}

app.get('/', handleGetRequest);
app.post('/', handlePostRequest);

app.listen(port, () => {    
  console.log(`Server is actice at {$port}`);  
});

