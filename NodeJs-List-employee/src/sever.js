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

const configDB = require("./config/database");

// const silence = new Kitten({ name: "NNT" });
// silence.save();

(async () => {
  try {
    await configDB();
    app.listen(port, () => {
      console.log(`Be app listening on port ${port}`);
    });
  } catch (e) {
    console.loh("error", e);
  }
})();
