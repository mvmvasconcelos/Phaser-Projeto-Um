var demo = {};
demo.state0 = function () {};
demo.state0.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#4286f4';
		console.log('state0');

		addChangeStateEventListeners();

		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	},
	update: function(){}
};

function changeState(i, stateNum) {
	game.state.start('state' + stateNum);
}

function addkeyCallback(key, fn, args){
	game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners(){
	addkeyCallback(Phaser.Keyboard.ZERO, changeState,0);
	addkeyCallback(Phaser.Keyboard.ONE, changeState,1);
	addkeyCallback(Phaser.Keyboard.TWO, changeState,2);
	addkeyCallback(Phaser.Keyboard.THREE, changeState,3);
	addkeyCallback(Phaser.Keyboard.FOUR, changeState,4);
	addkeyCallback(Phaser.Keyboard.FIVE, changeState,5);
	addkeyCallback(Phaser.Keyboard.SIX, changeState,6);
	addkeyCallback(Phaser.Keyboard.SEVEN, changeState,7);
	addkeyCallback(Phaser.Keyboard.EIGHT, changeState,8);
	addkeyCallback(Phaser.Keyboard.NINE, changeState,9);
}