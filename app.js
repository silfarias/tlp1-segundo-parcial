const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const routes  = require('./routes/reserva.routes')

require('dotenv').config();

//BASE DE DATOS
const Reserva = require('./models/Reserva');
require('./models/Reserva');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);

app.use((req, res, next) => {
  res.status(404).send('Error 404: Page not found');
});

const port = 3000;
app.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
});