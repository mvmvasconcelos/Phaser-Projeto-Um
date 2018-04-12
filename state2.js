demo.state2 = function () {};
demo.state2.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#ff5500';
		console.log('state2');
	},
	update: function(){}
};