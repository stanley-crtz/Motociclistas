const App = require('./app');
const port = process.env.PORT || 1900;

App.listen(port, () => console.log("Servidor corriendo en http://localhost:1900"))