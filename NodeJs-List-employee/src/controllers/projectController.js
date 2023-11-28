const { CreateProjsect } = require("../services/projectcv")


module.exports = {
    postCreateProject: async (req, res) => {
        let result = await CreateProjsect(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}