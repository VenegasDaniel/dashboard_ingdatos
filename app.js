const express = require('express');
const path  = require('path');
const expresslayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.use(expresslayouts)

app.use(express.static(path.join(__dirname, 'public')));

// Routes
const router = require('./routes/router');
app.use(router.routes);


app.listen(3000, () => {
    console.log('Server started on port 3000');
});