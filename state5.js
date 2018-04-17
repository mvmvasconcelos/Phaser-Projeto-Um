demo.state5 = function () {};
demo.state5.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#87203b';

		addChangeStateEventListeners();
	},
	update: function(){}
};