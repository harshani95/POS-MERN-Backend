const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');
const port = process.env.SERVER_PORT | 3000;
const app = express();
app.use(cors())

//-----------------------
const userRoute = require('./routes/UserRoute');
const customerRoute = require('./routes/CustomerRoute');
const orderRoute = require('./routes/OrderRoute');
const productRoute = require('./routes/ProductRoute');
//-----------------------

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// try {
//     mongoose.connect('mongodb://127.0.0.1:27017/posapi');
//     app.listen(port, () => {
//         console.log(`server Started & running on port ${port}`);
//     })
// } catch (e) {
//     console.log(e);
// }

const startServer = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/posapi');
        app.listen(port, () => {
            console.log(`Server started & running on port ${port}`);
        });
    } catch (e) {
        console.log('Error connecting to MongoDB:', e);
    }
};

startServer();


app.get('/test-api', (req, resp) => {
    return resp.json({ 'message': 'Server Started!' })
})

//------------
app.use('/api/v1/users', userRoute);
app.use('/api/v1/customers', customerRoute);
app.use('/api/v1/orders', orderRoute);
app.use('/api/v1/products', productRoute);
