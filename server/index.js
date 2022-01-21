const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ test: "this is a test response"});
})

app.listen(PORT, () => {
    console.log("Server listening on %d", PORT)
})