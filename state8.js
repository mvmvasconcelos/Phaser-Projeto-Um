demo.state8 = function () {};
demo.state8.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#7b4dbc';

		addChangeStateEventListeners();
	},
	update: function(){}
};