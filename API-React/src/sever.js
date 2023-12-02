const express = require("express");
require("dotenv").config();
const routerAPI = require("./routers/api")
const configDB = require("./config/mongodb");

const app = express()
const port = 8000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routerAPI);

(async () => {
    try {
        await configDB()
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (e) {
        console.log(e);
    }
})();