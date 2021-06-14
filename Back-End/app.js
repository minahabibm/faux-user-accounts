const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors');
const db = require('./db_queries');
const email = require('./email_handler');

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

app.post('/sendfeedback', (req, res) => {
    console.log("POST Request @sendfeedback")
    db.addFeedBack(req.body.name, req.body.email, req.body.feedback)
    .then(resp => {
        email.sendEmail(req.body.name, req.body.email, req.body.feedback)
        .then(respo => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
});

db.dbInitiate();

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
