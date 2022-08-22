const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/indexRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/product', productRouter);

app.listen(3000, ()=> {
  console.log('Servidor funcionando')
})
