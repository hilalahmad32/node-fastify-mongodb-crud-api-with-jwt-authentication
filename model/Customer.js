const { default: mongoose } = require("mongoose");

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    balance: {
        type: Number,
        required: true,
        trim: true
    }
});

const Customer = mongoose.model("customer", customerSchema);
module.exports = Customer;