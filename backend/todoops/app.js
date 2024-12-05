require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./app/utils/db.js');
const todoRoutes = require('./app/routes/todoRoutes.js');
const cors = require('cors')

const app = express();
app.use(cors())

app.use(bodyParser.json());

app.use('/', todoRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
