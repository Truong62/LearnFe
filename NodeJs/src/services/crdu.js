const configDB = require("../config/database");
const getAllUser = async () => {
  let [results, fields] = await configDB.query("select * FROM `User`");
  return results;
};
module.exports = { getAllUser };
