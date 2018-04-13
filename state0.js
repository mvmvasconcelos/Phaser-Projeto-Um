var demo = {};
var  centerX = 1500 / 2;
var  centerY = 1000 / 2;
var  clovis;
var  speed = 4;

demo.state0 = function () {};
demo.state0.prototype = {
	preload: function(){
		game.load.image('clovis', 'assets/sprites/clovis.png');
	},
	create: function(){
		game.stage.backgroundColor = '#4286f4';
		console.log('state0');

		addChangeStateEventListeners();

		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		clovis = game.add.sprite(centerX, centerY, 'clovis');
		clovis.anchor.x = 0.5;
		clovis.anchor.y = 0.5;
	},
	update: function(){
		if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			clovis.x += speed;
		}else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			clovis.x -= speed;
		}
		if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
			clovis.y += speed;
		}else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			clovis.y -= speed;
		}
	}
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