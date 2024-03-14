const express = require('express');
const route = express.Router();
const auth = require('../middleware/auth.middle.js');
const multer = require('../middleware/multer-config.js');
const stuffCtrl = require('../controllers/stuff.controllers.js');





route.get('/', auth, stuffCtrl.getAllStuff);
route.post('/', auth, multer, stuffCtrl.createThing);
route.get('/:id', auth, stuffCtrl.getOneThing);
route.put('/:id', auth, multer, stuffCtrl.modifyThing);
route.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = route;

