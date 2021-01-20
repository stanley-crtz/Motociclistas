const route = require('express').Router();
const Controller = require('../Controllers/Motociclista')

route.get('/getSources', Controller.getSources);
route.put('/updateAdd', Controller.updateAdd);
route.put('/updateReset', Controller.updateReset);
route.put('/updateSubtract', Controller.updateSubtract);

module.exports = route;