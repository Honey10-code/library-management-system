const express = require("express");
const dotenv = require("dotenv");
const DbConnection = require('./databaseConnection');

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ 
        message: "Home Page :-)"
    });
});

// Catch all routes
app.use((req, res) => {
    res.status(404).json({
        message: "Not Built yet"
    });
});

// Start server only after DB connects
DbConnection().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
});