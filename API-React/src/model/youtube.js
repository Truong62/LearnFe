const mongoose = require("mongoose")
const mongoose_delete = require("mongoose-delete")
//thiếu xóa trả về true

const Youtube = new mongoose.Schema(
    {
        title: { type: String, required: true },
        nameChannel: String,
        description: String,
        thumnail: {
            data: Buffer,
            contentType: String
        },
        logo: {
            data: Buffer,
            contentType: String
        },
    },
    {
        timestamps: true,
    }
);

Youtube.plugin(mongoose_delete, { overrideMethods: "all" });
const youtube = mongoose.model("Youtube", Youtube);

module.exports = youtube;