const PointSchema = require('./schema-ms')

exports.fetch = async (filter = {}) => {
    const points = await PointSchema.find(filter).lean()
    return points
}

