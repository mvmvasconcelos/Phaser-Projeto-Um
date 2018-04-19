var canhao, balas, bala, velocidade = 800, proximoTiro = 0, fireRate = 200, inimigo, grupoInimigo;
demo.state2 = function () {};
demo.state2.prototype = {
	preload: function(){
		game.load.image('base', 'assets/sprites/base.png');
		game.load.image('canhao', 'assets/sprites/canhao.png');
		game.load.image('bala', 'assets/sprites/bola.png');
	},
	create: function(){
		game.stage.backgroundColor = '#aadddd';
		addChangeStateEventListeners();

		var base = game.add.sprite(centerX+30, centerY, 'base');
		base.anchor.setTo(0.5);

		balas = game.add.group(); //define balas como um grupo de objetos
		balas.enableBody = true; //habilita colisões aos objetos
		balas.physicsBodyType = Phaser.Physics.ARCADE; //e o tipo de física como ARCADE
		balas.createMultiple(50, 'bala'); //define quantos objetos poderão existir na tela
		balas.setAll('checkWorldBounds', true); //ativa a verificação dos limites do mundo
		balas.setAll('outOfBoundsKill', true); //mata o objeto quando ele ultrapassar o limite
		balas.setAll('anchor.y', 0.5);

		canhao = game.add.sprite(centerX, centerY, 'canhao');
		canhao.anchor.setTo(0.4, 0.5);

		inimigo = game.add.sprite(100, 200, 'clovisIdle');
		game.physics.enable(inimigo); //adiciona física ao inimigo

		//Define grupoInimigo como um grupo e habilita física à ele
		grupoInimigo = game.add.group();
		grupoInimigo.enableBody = true;
		grupoInimigo.physicsBodyType = Phaser.Physics.ARCADE; //Definie a física como ARCADE

		for (var i = 0; i <3; i++) {
			//Cria objetos do grupo na posição, X, Y, com a imagem 'clovisIdle'
			grupoInimigo.create(1300, 350 * i + 100, 'clovisIdle');
		}

		grupoInimigo.setAll('anchor.x', 0.5);
		grupoInimigo.setAll('anchor.y', 0.5);
		grupoInimigo.setAll('scale.x', 0.4);
		grupoInimigo.setAll('scale.y', 0.4);

	},
	update: function(){
		//Faz o canhão girar em relação ao ponteiro do mouse
		canhao.rotation = game.physics.arcade.angleToPointer(canhao);
		//Chama a função fire() ao clicar o mouse
		if (game.input.activePointer.isDown) {
			this.fire();
		}

		/* Verifica se a bala está passando por cima do inimigo (overlap)
		   caso esteja, chama a função hitInimigo */
		game.physics.arcade.overlap(balas, inimigo, this.hitInimigo);
		game.physics.arcade.overlap(balas, grupoInimigo, this.hitGrupoInimigo);

	},

	fire: function() {
		/* Verifica taxa de tiro, game.time.now dá o tempo de jogo em milisegundos
		   assim que um tiro é disparado, ele pega o valo atual do tempo e só irá
		   disparar quando passar o tempo definido em timeRate */
		if (game.time.now > proximoTiro) {
			proximoTiro = game.time.now + fireRate;
			console.log('PEW');
			bala = balas.getFirstDead();
			bala.reset(canhao.x, canhao.y);

			//faz a bala andar na direção do mouse, na velocidade definida
			game.physics.arcade.moveToPointer(bala, velocidade);
			//gira o objeto para que ele fique na mesma orientação do mouse
			bala.rotation = game.physics.arcade.angleToPointer(bala);
			
		}
	},
	hitInimigo: function () {
		console.log('PAU');
		//Mata os objetos, caso haja colisão (overlap)
		inimigo.kill();
		bala.kill();
	},
	hitGrupoInimigo: function(bala, inimigo) {
		bala.kill();
		inimigo.kill();
	}
};