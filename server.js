const express = require("express");
const fileHandler = require("./modules/fileHandler");

const app = express();
const PORT = 3000;
async function startServer() {
    const employees = await fileHandler.read();
    console.log(employees);

    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

startServer();
