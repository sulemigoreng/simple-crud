const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()
const port = 3000

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Hello ExpressJS World!');
});

mongoose.connect('mongodb+srv://sulemigoreng:mantapgan123@backenddb.aizjodq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log('Connected to database!');
        app.listen(port, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(() => {
        console.log('Connection failed!');
    })