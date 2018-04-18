var canhao, bolas, velocidade = 800;
demo.state2 = function () {};
demo.state2.prototype = {
	preload: function(){
		game.load.image('base', 'assets/sprites/base.png');
		game.load.image('canhao', 'assets/sprites/canhao.png');
		game.load.image('bola', 'assets/sprites/bola.png');
	},
	create: function(){
		game.stage.backgroundColor = '#aadddd';
		console.log('state2');
		addChangeStateEventListeners();

		var base = game.add.sprite(centerX+30, centerY, 'base');
		base.anchor.setTo(0.5);

		canhao = game.add.sprite(centerX, centerY, 'canhao');
		canhao.anchor.setTo(0.4, 0.5);

		bolas = game.add.group();
		bolas.enableBody = true;
		bolas.physicsBodyType = Phaser.Physics.ARCADE;
		bolas.createMultiple(50, 'bola');
	},
	update: function(){
		canhao.rotation = game.physics.arcade.angleToPointer(canhao);
		if (game.input.activePointer.isDown) {
			this.fire();
		}
	},

	fire: function() {
		console.log('PEW');
		var bola = bolas.getFirstDead();
		bola.reset(canhao.x, canhao.y);

		game.physics.arcade.moveToPointer(bola, velocidade);
	}
};