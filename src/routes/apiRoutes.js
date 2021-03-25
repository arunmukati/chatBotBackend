const router = require('express').Router();
const { apiMiddleware } = require('../middleware');
const { UserController, IntentController ,ResponseController,TrainController} = require('../controllers/api');
const ChatController = require('../controllers/api/chatController');


//bot routes--
// router.post('/createBot',apiMiddleware.authUser, BotController.createBot)
//Intent routes--
router.post('/addIntent', apiMiddleware.authUser, IntentController.addIntent );
router.post('/updateIntent', apiMiddleware.authUser, IntentController.updateIntent );
router.get('/intents',apiMiddleware.authUser, IntentController.getIntent);
router.post('/removeIntentResponse',apiMiddleware.authUser,IntentController.deleteIntentResponse)
router.delete('/intent/:id',apiMiddleware.authUser,IntentController.deleteIntent);
router.post('/intent/example',apiMiddleware.authUser,IntentController.addExample);
router.post('/intent/deleteExample',apiMiddleware.authUser,IntentController.deleteExample)
router.post('/addResponse', apiMiddleware.authUser, ResponseController.addResponse );
router.post('/updateResponse', apiMiddleware.authUser, ResponseController.updateResponse );
router.get('/response',apiMiddleware.authUser, ResponseController.getResponse);
router.delete('/response/:id',apiMiddleware.authUser, ResponseController.deleteResponse);
router.get('/train',apiMiddleware.authUser,TrainController.train);
router.get('/msg',apiMiddleware.authUser,TrainController.getMessage);




//routes for user side chats
router.get('/messages/:id',ChatController.getChats);
router.get('/allUser',apiMiddleware.authUser,ChatController.getAllUsers)



module.exports = router;

