const getHomepage = (req, res) => {
  res.send("hello home controllesrs");
};

const getMain = (req, res) => {
  res.render("index.ejs");
};

module.exports = {
  getHomepage,
  getMain,
};
