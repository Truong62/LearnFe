const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8888;
// const hosstname = process.env.HOST_NAME;
const webRoutes = require("./routes/web");
const configViewEngine = require("./config/viewEngine");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);

app.use("/", webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
