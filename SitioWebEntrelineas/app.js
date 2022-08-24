const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index-router');
const productRouter = require('./routes/product-router');
const userRouter = require('./routes/user-router');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(3000, ()=> {
  console.log('Servidor funcionando en puerto 3000')
})
