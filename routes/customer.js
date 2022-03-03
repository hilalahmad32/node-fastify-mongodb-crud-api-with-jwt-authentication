const Customer = require("../model/Customer.js");


const customerRoutes = (fastify, option, done) => {
    fastify.get("/", async (req, replay) => {
        try {

            const customer = await Customer.find();
            replay.send({ customer: customer })

        } catch (error) {
            replay.send("error " + error.message);
        }
    });

    fastify.post("/", async (req, replay) => {
        try {
            const { name, email, balance } = req.body;
            if (!name || !email || !balance) {
                replay.send({
                    success: false,
                    msg: "Please fill the field"
                })
            } else {
                const customers = new Customer({
                    name, email, balance
                });

                const result = await customers.save();
                if (result) {
                    replay.send({
                        success: true,
                        msg: "Customer create successfully"
                    })
                } else {
                    replay.send({
                        success: false,
                        msg: "Some problem"
                    })
                }
            }

        } catch (error) {
            replay.send("error " + error.message);
        }
    });


    fastify.put("/:id", async (req, replay) => {
        try {
            const id = req.params.id;
            const customer = await Customer.findById({ _id: id });
            if (customer) {
                replay.send({
                    success: true,
                    customer: customer
                })
            } else {
                replay.send({
                    success: false,
                    msg: "Some problem"
                })
            }
        } catch (error) {
            replay, send("error " + error.message);
        }
    });

    fastify.patch("/:id", async (req, replay) => {
        try {
            const id = req.params.id;
            const { name, email, balance } = req.body;
            if (!name || !email || !balance) {
                replay.send({
                    success: false,
                    msg: "Please fill the field"
                })
            } else {
                const customer = await Customer.findByIdAndUpdate({ _id: id }, {
                    name, email, balance
                });

                if (customer) {
                    replay.send({
                        success: true,
                        msg: "Customer Update successfully"
                    })
                } else {
                    replay.send({
                        success: false,
                        msg: "Please fill the field"
                    })
                }
            }
        } catch (error) {
            replay.send("error " + error.message)
        }
    })
    done();
}

module.exports = customerRoutes;