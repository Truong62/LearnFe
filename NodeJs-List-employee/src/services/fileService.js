const Uploadsingfile = async (fileObj) => {
  let uploadPath = __dirname + fileObj.name;

  try {
    await fileObj.mv(uploadPath);
    return {
      status: "success",
      path: "link-image",
      rerror: null,
    };
  } catch (err) {
    return {
      status: "success",
      path: null,
      rerror: JSON.stringify(err),
    };
  }
};

const uploadmultipleFiles = () => {};

module.exports = {
  Uploadsingfile,
};
