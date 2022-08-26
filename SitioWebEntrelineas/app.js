const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index-router');
const productRouter = require('./routes/product-router');
const userRouter = require('./routes/user-router');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(3000, ()=> {
  console.log('Servidor funcionando en puerto 3000')
})
