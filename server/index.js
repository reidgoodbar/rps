const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// set up rate limiter: maximum of five requests per minute
var RateLimit = require('express-rate-limit');
var limiter =  RateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 5
});

// apply rate limiter to all requests
app.use(limiter);

app.use(express.static(path.resolve(__dirname, '../rps_client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../rps_client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log("Server listening on %d", PORT)
})