const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

hbs.registerPartials(__dirname + '/views/partials');
var app = express();
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    res.render('maintenance.hbs', {
        currentYear: new Date().getFullYear(),
        pageTitle: 'Maintenance'
    });

    /*    const log = `${new Date().toString()}:   ${req.method}   ${req.url} `;
       fs.appendFile('./log.txt', log, (error) => {
           console.log('Unable to write to log file');
       })
       next(); */
});


app.use(express.static(__dirname + '/public'));




app.get('/', (req, res) => {
    res.render('home.hbs', {
        currentYear: new Date().getFullYear(),
        welcome: 'Welcome to my web site',
        pageTitle: 'HOME'
    })
});


app.get('/about', (req, res) => {
    res.render('about.hbs', {
        currentYear: new Date().getFullYear(),
        pageTitle: 'About'
    })
});


app.listen(3000, () => {
    console.log('Sever is up on port 3000.');
});


