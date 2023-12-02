const youtube = require("../model/youtube")
const aqp = require("api-query-params");


module.exports = {
    postYoutube: async (data, files) => {
        const { title, nameChannel, description } = data;
        const { thumnail, logo } = files;
        try {
            let newImage = new youtube({
                title,
                nameChannel,
                description,
                thumnail: {
                    data: thumnail[0].buffer,
                    contentType: thumnail[0].mimetype,
                },
                logo: {
                    data: logo[0].buffer,
                    contentType: logo[0].mimetype,
                },
            });
            const savedImage = await newImage.save();
            return savedImage;
        } catch (error) {
            return error.message
        }
    },
    getYoutube: async () => {
        console.log()
        try {
            const video = await youtube.find();
            return video
        } catch (err) {
            return err.message
        }
    }
}