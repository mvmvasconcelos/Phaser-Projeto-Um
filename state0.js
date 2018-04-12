var demo = {};
demo.state0 = function () {};
demo.state0.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#4286f4';
		console.log('state0');
	},
	update: function(){}
};