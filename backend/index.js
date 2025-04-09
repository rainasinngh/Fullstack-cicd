const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();
require('dotenv').config();

const app = express();
const PORT = process.env.REACT_APP_PORT || 8000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

//Routes
app.use('/api/auth', require("./routes/auth"));
app.use('/api/users', require("./routes/users"));

app.listen(PORT, () => {
    console.log(`RAAHAT backend Server is Running on PORT ${PORT}`);
})