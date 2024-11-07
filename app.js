const express = require('express');
const data = require('./data');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/user', (req, res) => {
  res.render('user', { users: data.users });
});

app.get('/products', (req, res) => {
  res.render('products', { products: data.products });
});

app.get('/products/filtered', (req, res) => {
  const filteredProducts = data.products.filter(product => product.PID > 3);
  res.render('filteredProducts', { products: filteredProducts });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
