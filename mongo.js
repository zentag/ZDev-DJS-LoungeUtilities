const mongoose = require('mongoose')
const mongoPath = "mongodb+srv://Infinity_Oofs:subtomeon_YT36021@cluster0.3y7dl.mongodb.net/loungeUtils?retryWrites=true&w=majority"

module.exports = async () => {
    await mongoose.connect(mongoPath, { useUnifiedTopology: true } )
    return mongoose
}