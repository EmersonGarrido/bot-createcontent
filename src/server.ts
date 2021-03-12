require('dotenv/config');
import express = require('express');
import bodyParser = require('body-parser');
import routes from './routes'
import cors = require('cors');

const app = express();
app.use(cors({}));
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(routes)

app.listen(3333, () =>{
  console.log('Starter Server estamos funcionando porra!!!!')
})