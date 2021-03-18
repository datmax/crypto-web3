const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Pronostico = mongoose.model("pronostico", new Schema({
    text: String
}));


module.exports = Pronostico;