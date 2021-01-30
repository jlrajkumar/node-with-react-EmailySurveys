const express = require('express');
 
const app = express();
//All the route handlers we are going to create over time will be associated
// or somehow registered with "app" obj here

app.get('/', (req,res) => {
    res.send('Hi there!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
