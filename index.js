const express = require('express');

// *******************************************************

const app = express();

// Home page
app.get('/', (request, response) => {
    // html
});

app.post('/login', (request, response) => {
    // json
});

app.post('/add', (request, response) => {
    // json
});

app.get('/data', (request, response) => {
    // json
});

app.listen(6699);