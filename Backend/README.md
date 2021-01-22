## Como usar
Para usar el servidor en local debera ir al archivo **app.js** y asegurarse que se encuentre el **Access-Control-Allow-Origin** con el valor de la ruta de la aplicación corriendo en local, ejemplo: **res.header('Access-Control-Allow-Origin', 'http://localhost:3000')**.

## Scripts Disponibles

En el directorio del proyecto, puede ejecutar:

### `npm run dev`

Arranca el servidor en modo desarrollo utilizando nodemon.\
Abre [http://localhost:1900](http://localhost:1900) para verlo en el navegador.

### `npm start`

Arranca el servidor en modo producción