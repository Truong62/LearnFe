const {
  Uploadsingfile,
  uploadmultipleFiles,
} = require("../services/fileService");

const { createCustomer } = require("../services/customerService");

module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    let imgUrl = "";
    //img
    if (!req.files || Object.keys(req.files).length === 0) {
      //   return res.status(400).send("No files were uploaded.");
    } else {
      let resquire = await Uploadsingfile(req.files.image);
      imgUrl = resquire.path;
    }

    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imgUrl,
    };
    let customer = await createCustomer(customerData);
    return res.status(200).json({
      EC: 0,
      data: customer,
    });
  },
};
