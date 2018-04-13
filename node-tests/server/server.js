const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Wolrd!');
});

app.get('/users', (req, res) => {
    res.send([
        { name: 'daniel', age: 45 },
        { name: 'andrew', age: 25 },
        { name: 'bob', age: 22 }
    ]);
});

app.listen(3000, () => {
    console.log('server is up at port 3000');
});

module.exports = { app }; 