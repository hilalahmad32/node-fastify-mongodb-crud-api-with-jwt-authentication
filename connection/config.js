const { default: mongoose } = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("connection successfuly");
    })
    .catch(err => {
        console.log("error" + err);
    })