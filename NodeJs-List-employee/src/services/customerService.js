const {
  Uploadsingfile,
  uploadmultipleFiles,
} = require("../services/fileService");

const Customer = require("../models/customer");

module.exports = {
  createCustomer: async (customerData) => {
    try {
      let result = await Customer.create({
        name: customerData.name,
        address: customerData.address,
        phone: customerData.phone,
        email: customerData.email,
        description: customerData.description,
        image: customerData.image,
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
