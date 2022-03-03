const fastify = require('fastify')({ logger: false });
const PORT = 5000;

require('./connection/config.js')
fastify.register(require('./routes/customer.js'),
    require('./routes/user.js'))

fastify.listen(PORT, () => {
    console.log("Server is runing on port http://localhost:5000");
})