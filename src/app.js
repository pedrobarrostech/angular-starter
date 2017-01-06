'use strict';

var APP_NAME = 'angularApp';

(function (){

	angular
		.module(APP_NAME, ['ui.router'])
		.run(appIsRunning);

	//////////////////////////////////////////////////////////////////////////////////////////////

	function appIsRunning() {
		console.log('App is running!!');
	}

})();