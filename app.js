const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Node.js Docker CI/CD Lab</h1>
        <p>Application is running successfully.</p>
        <p>Version: 1.0</p>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP",
        message: "Application is healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
