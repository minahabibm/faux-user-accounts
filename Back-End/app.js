const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors');

const app = express();
dotenv.config();

const PORT = process.env.EXPRESS_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  console.log("GET Request @\\");
  res.send('Hi there 😎!');
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
