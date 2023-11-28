const project = require("../models/project")

module.exports = {
    CreateProjsect: async (data) => {
        if (data.type === "EMPTY-PROJECT") {
            let result = await project.create(data)
            return result
        }
    }
}