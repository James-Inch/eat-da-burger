// Dependencies
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var PORT = 8080 || process.env.PORT

app.listen(PORT, function(){
    console.log(`App listening on port ${PORT}`);
}); 