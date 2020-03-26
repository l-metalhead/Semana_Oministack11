const express = require('express');
const routes = require('./routes');  // importa o arquivo de rotas

const app = express();
app.use(express.json());
app.use(routes);  // Passa a utilizar o código que está no arquivo routes.js

app.listen(3333);
