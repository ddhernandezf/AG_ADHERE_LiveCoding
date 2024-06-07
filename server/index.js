const express = require ('express');
const app = express();
const port = 8080;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Import the routes
const routes = require('./routes');

// Use the routes
app.use('/api', routes);

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:${port}`);
});
