const express = require('express');
const app = express();
const expressLayeouts = require('express-ejs-layouts');

app.use(expressLayeouts);
app.set('view engine', 'ejs');
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

let port = process.env.PORT | 3000;

app.listen(port, () => {
    console.log('Server listening on port:', port);
});
