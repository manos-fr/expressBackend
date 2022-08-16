const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = 3000;
const db = require('../queries');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.get('/titles', db.getTitles);
app.get('/titles/:id', db.getTitleById);
app.post('/titles', db.createTitle);
app.put('/titles/:id', db.updateTitle);
app.delete('/titles/:id', db.deleteTitle);
