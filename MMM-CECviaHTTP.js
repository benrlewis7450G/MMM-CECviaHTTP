/* Magic Mirror
 * Module: MMM-CECviaHTTP
 *
 * By Ben Lewis
 * November 2019
 * MIT Licensed.
 *
 */

Module.register('MMM-CECviaHTTP',{
	defaults: {

	},


	start:function() {
		this.sendSocketNotification('SET_CONFG', this.config);

	}
});
