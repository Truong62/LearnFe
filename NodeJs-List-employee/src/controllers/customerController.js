const {
  Uploadsingfile,
  uploadmultipleFiles,
} = require("../services/fileService");

const {
  createCustomer,
  createCustomerArr,
  getAllCustomer,
  UpdateCustomer,
  DeleteCustomer,
  deleteArrCustomerSv,
} = require("../services/customerService");

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
  postCreateArrCustomer: async (req, res) => {
    let customers = await createCustomerArr(req.body.customers);
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        EC: -1,
        data: customers,
      });
    }
  },
  GetCustomer: async (req, res) => {
    let customers = await getAllCustomer();
    return res.status(200).json({
      EC: 0,
      data: customers,
    });
  },
  updateCustomer: async (req, res) => {
    let { id, name, email, address, description } = req.body;
    console.log(id, name, email, address, description);
    let customers = await UpdateCustomer(id, name, email, address, description);
    return res.status(201).json({
      EC: 0,
      data: customers,
    });
  },
  deleteCustomer: async (req, res) => {
    let id = req.body.id;
    let result = await DeleteCustomer(id);
    return res.status(201).json({
      EC: 0,
      data: result,
    });
  },
  deleteArrCustomer: async (req, res) => {
    let ids = req.body.customerid;
    console.log(ids);
    let result = await deleteArrCustomerSv(ids);
    return res.status(200).json({ EC: 0, data: result });
  },
};
