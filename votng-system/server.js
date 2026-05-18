const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

app.use(bodyParser.json());
app.use(express.static('frontend'));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'securepassword',
  database: 'tuteh_elections'
});

// Routes
const authRoutes = require('./routes/auth')(db);
const voteRoutes = require('./routes/vote')(db);

app.use('/', authRoutes);
app.use('/', voteRoutes);

app.listen(3000, () => console.log('TUTEH RC Elections system running on port 3000'));
