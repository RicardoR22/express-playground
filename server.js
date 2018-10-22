const express = require('express')
const exphbs  = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static('public'))

// ROOT ROUTE
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
