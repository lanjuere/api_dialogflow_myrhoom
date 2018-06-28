var express = require('express');
const {WebhookClient} = require('dialogflow-fulfillment');
const {INTENTS} = require('../intents/intents_consts');
var router = express.Router();

/* GET myrhoom listing. */
router.get('/', function (req, res, next) {

  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  const agent = new WebhookClient({ request, response });

  // Run the proper function handler based on the matched Dialogflow intent name
  let intentMap = new Map();
  intentMap.set(INTENTS.WELCOME, welcome);
  intentMap.set(INTENTS.FALLBACK, fallback);
  agent.handleRequest(intentMap);
});

module.exports = router;
