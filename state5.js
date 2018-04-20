var aceleracao = 400, plataforma, grupoPlataforma;
demo.state5 = function () {};
demo.state5.prototype = {
	preload: function(){
		game.load.spritesheet('clovisIdle', 'assets/spritesheet/clovis_idle.png', 240, 300);
		game.load.spritesheet('clovisWalk', 'assets/spritesheet/clovis_moviment.png', 240, 300);
		game.load.image('plataforma', 'assets/sprites/plataforma.png');
	},
	create: function(){
		game.stage.backgroundColor = '#454554';

		addChangeStateEventListeners();

		clovis = game.add.sprite(centerX, centerY, 'clovisIdle'); 
		clovis.anchor.setTo(0.5, 0.5); //Define posição X, Y da imagem
		clovis.scale.setTo(0.7, 0.7); //Define proporção como 70% do original
		clovis.animations.add('idle', [0, 1, 2, 3, 4, 5]);
		clovis.animations.add('walk', [0, 1, 2, 3, 4]);
		clovis.animations.play('idle', 6, true);

		plataforma = game.add.sprite(100, 800, 'plataforma');
		grupoPlataforma = game.add.group();
		grupoPlataforma.create(650, 400, 'plataforma');
		grupoPlataforma.create(950, 400, 'plataforma');

		//Altera textura ao andar
		key1 = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		key1.onDown.add(changeTexture);
		key2 = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		key2.onDown.add(changeTexture);
		key1.onUp.add(changeTexture);
		key2.onUp.add(changeTexture);

		game.physics.enable([clovis,plataforma, grupoPlataforma]); //Adiciona física ao objeto.
		plataforma.body.immovable = true; //Define a plataforma como imóvel
		grupoPlataforma.setAll('body.immovable', true);

		clovis.body.gravity.y = 500; //Define gravidade vertical Y
		clovis.body.bounce.y = 0.2; //Adiciona bounce
		clovis.body.drag.x = aceleracao * 2.5; //Faz com que ele desacelere
		clovis.body.collideWorldBounds = true; //Habilita a colisão do personagem com os limites do mundo.


	},
	update: function(){
		game.physics.arcade.collide(clovis,[plataforma, grupoPlataforma]);
		//Define movimentação básica
		if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			clovis.body.acceleration.x = aceleracao;
			clovis.scale.setTo(0.7, 0.7);
			clovis.animations.play('walk', 12, true);
		}else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			clovis.body.acceleration.x = -aceleracao;
			clovis.scale.setTo(-0.7, 0.7); //Inverte o sentido horizontal do sprite
			clovis.animations.play('walk', 12, true);

		} else {
			clovis.body.acceleration.x = 0;
			clovis.animations.play('idle', 6, true);
		}

		if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			clovis.body.velocity.y = -aceleracao;
		} else {
			//clovis.body.velocity.y = 0;
			
		}
	}
};

function changeTexture (){
	if (clovis.key === 'clovisIdle') {
		clovis.loadTexture('clovisWalk', 0, false);
	} else {
		clovis.loadTexture('clovisIdle', 0, false);
	} 
}