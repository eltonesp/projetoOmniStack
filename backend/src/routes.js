const express = require('express');

const OngControllers = require ('./controllers/ongcontrollers');
const IncidentController = require ('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/Sessioncontroller');

const routes = express.Router();


routes.get('/ongs', OngControllers.index);
routes.post('/ongs', OngControllers.create)

routes.post('/session', SessionController.create);
routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;