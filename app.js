const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

const port = 3000; // Puerto en el que se ejecutará el servidor

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});