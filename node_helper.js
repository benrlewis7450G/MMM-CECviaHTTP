/* Magic Mirror
 * Module: MMM-CECviaHTTP
 *
 * By Ben Lewis
 * November 2019
 * MIT Licensed.
 * 
 */

const NodeHelper = require("node_helper");
const cecController = require('cec-controller');

module.exports = NodeHelper.create({

	start: function() {
		this.expressApp.get('/CECon', (req, res) => {
			cec = new cecController()
			cec.on('ready', readyHandler);
			cec.on('error', console.error);

			function readyHandler(controller){
				console.log('Attempting to turn on TV');
				controller.dev0.turnOn().then(() => {
					res.send({"status": "on"});
				});
			}
		});

		this.expressApp.get('/CECoff', (req,res) => {
			cec = new cecController()
			cec.on('ready', readyHandler);
			cec.on('error', console.error);

			function readyHandler(controller){
				console.log('Attempting to turn off TV');
				controller.dev0.turnOff().then(() => {
					res.send({"status": "off"});
				});
			}
		});

		this.expressApp.get('/CECstatus', (req,res) => {
			cec = new cecController()
			cec.on('ready', readyHandler);
			cec.on('error', console.error);

			function readyHandler(controller){
				console.log('Attempting to retrieve TV status');
				console.log(controller)
			}
		});
	},

	socketNotificationReceived: function(notification, payload) {

	}

	
});
