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
  createCustomerArr: async (arr) => {
    try {
      let result = await Customer.insertMany(arr);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getAllCustomer: async () => {
    try {
      let results = await Customer.find({});
      return results;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  UpdateCustomer: async (id, name, email, address, description) => {
    try {
      let result = await Customer.updateOne(
        { _id: id },
        { name, email, address, description }
      );
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  DeleteCustomer: async (id) => {
    try {
      let result = await Customer.deleteById({ _id: id });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
