// INITIALIZATION
const express = require('express')
const exphbs  = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE
app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

app.use(express.static('public'))


// ROUTES
// ROOT ROUTE
app.get('/', (req, res) => {
  res.render('home', { articles: [] });
})

app.post('/articles', (req, res) => {

})

// STARTING THE SERVER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
