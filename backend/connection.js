const mongoose = require('mongoose')


const connect = async () => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/sumanth_blogs`)
        console.log("connection established");
    } catch (error) {
        console.log(`connection error:${error}`);
    }
}

module.exports = connect;