//(S223312715), Osanda Navoda Dharmasiri, SIT323, Task2.1P


const express = require('express');  //I used this code to import the Express.js framework into Node.js application 

const app = express();  //This code creating new Express Application

app.use(express.static('public')); //This code provides static files from public

app.listen(3000, () => { 
    console.log("App listeing on port 3000");  //This code is used to start the server
})



