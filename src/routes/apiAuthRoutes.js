const router = require('express').Router();
const { UserController } = require('../controllers/api');

//user routes--
router.post('/registerUser', UserController.registerUser);
router.post('/login',UserController.login);


module.exports = router;