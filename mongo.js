const mongoose = require('mongoose')

module.exports = async () => {
    await mongoose.connect("mongodb+srv://Infinity_Oofs:subtomeon_YT36021@cluster0.3y7dl.mongodb.net/loungeUtils?retryWrites=true&w=majority", { useUnifiedTopology: true } )
    return mongoose
}