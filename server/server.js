var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../' ))); //serves the index.html
app.listen(3000); //listens on port 3000 -> http://localhost:3000/