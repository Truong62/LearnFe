const { postYoutube, getYoutube } = require("../services/youtubesv")


module.exports = {
    postYoutube: async (req, res) => {
        try {
            const result = await postYoutube(req.body, req.files)
            return res.status(200).json({
                data: result
            })
        } catch (error) {
            return res.status(500).json({ error: error });
        }

    },
    getYoutube: async (req, res) => {
        let result = await getYoutube()
        return res.status(200).json({
            data: result
        })
    }
}