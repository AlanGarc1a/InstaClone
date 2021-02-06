const express = require('express');
const path    = require('path');
const ejsMate = require('ejs-mate');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('signup');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/feed', (req, res) => {
    res.render('feed');
});

app.get('/profile', (req, res) => {
    res.render('profile');
});

app.get('/explore', (req, res) => {
    res.render('explore');
});

app.listen(3000, (req, res) => {
    console.log("Listening on PORT 3000");
});