const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8888;
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const configViewEngine = require("./config/viewEngine");
const configDB = require("./config/database");
const fileUpload = require("express-fileupload");

app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", webRoutes);
app.use("/v1/api", apiRoutes);

configViewEngine(app);

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
