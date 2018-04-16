var demo = {};
var  centerX = 1500 / 2;
var  centerY = 1000 / 2;
var  clovis;
var  speed = 6;

demo.state0 = function () {};
demo.state0.prototype = {
	preload: function(){ //Pré carrega as imagens que serão usadas
		game.load.spritesheet('clovisIdle', 'assets/spritesheet/clovis_idle.png', 240, 300);
		game.load.spritesheet('clovisWalk', 'assets/spritesheet/clovis_moviment.png', 240, 300);
		game.load.image('bg', 'assets/backgrounds/bg1.png');
	},
	create: function(){
		//Deve ser o primeiro a carregar na função create, carrega o responsável pela física do jogo.
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.stage.backgroundColor = '#4286f4';
		console.log('state0');

		addChangeStateEventListeners();

		game.world.setBounds(0, 0, 2813, 1000); //Define o limite do mundo
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //Define o tipo de escala do jogo

		var bg = game.add.sprite(0, 0, 'bg'); //Adiciona os sprites em X, Y
		clovis = game.add.sprite(centerX, centerY, 'clovisIdle'); 
		clovis.anchor.setTo(0.5, 0.5); //Define posição X, Y da imagem
		clovis.scale.setTo(0.7, 0.7); //Define proporção como 70% do original
		game.physics.enable(clovis); //Adiciona física ao objeto.
		clovis.body.collideWorldBounds = true; //Habilita a colisão do personagem com os limites do mundo.
		clovis.animations.add('idle', [0, 1, 2, 3, 4, 5]);
		clovis.animations.add('walk', [0, 1, 2, 3, 4]);

		game.camera.follow(clovis); //Faz com que a câmera siga Clovis
		/*eadzone é a área que delimita até onde o personagem consegue andar
		sem a camera seguí-lo.*/
		game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);

	},
	update: function(){
		//Define movimentação básica
		if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			clovis.x += speed;
			clovis.scale.setTo(0.7, 0.7);
			clovis.animations.play('walk', 14, true);
		}else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			clovis.x -= speed;
			clovis.scale.setTo(-0.7, 0.7); //Inverte o sentido horizontal do sprite
			clovis.animations.play('walk', 14, true);
		} else {
			//clovis.animations.stop('walk');
			clovis.animations.play('idle', 10, true);
		}
		if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
			clovis.y += speed;
		}else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			clovis.y -= speed;
			if (clovis.y < 395) {
				clovis.y = 395;
			}
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