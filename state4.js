demo.state4 = function () {};
demo.state4.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#266b39';

		addChangeStateEventListeners();
	},
	update: function(){}
};