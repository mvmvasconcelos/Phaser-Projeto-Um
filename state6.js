demo.state6 = function () {};
demo.state6.prototype = {
	preload: function(){
		game.load.spritesheet('lava', 'assets/sprites/lava.png', 31, 31);
		game.load.image('vulcao', 'assets/sprites/vulcao.png');
	},
	create: function(){
		game.stage.backgroundColor = '#726e20';

		addChangeStateEventListeners();

		var vulcao = game.add.sprite(centerX, 1000, 'vulcao');
		vulcao.scale.setTo(1.5, 1.5);
		vulcao.anchor.setTo(0.5, 1);

		//Emissor de partículas
		var emitter = game.add.emitter(centerX, centerY + 175, 2000);
		/* makeParticles: 'key', quais frames, qtde, colisão arcade body, colisão world
		   Para spritesheet usa 'imagem', [frame1, frame2, frame3]
		   para várias imagens usa ['img1', 'img2', 'img3'], 0 --> seleciona aleatoriamente entre as imgs*/
		emitter.makeParticles('lava', [0,1,2], 5000, false, true);
		emitter.maxParticleSpeed.set(300, -300);
		emitter.minParticleSpeed.set(-300, -80);
		emitter.gravity = 450;

		/* Cria um timer que leva 2 segundos para iniciar
		   depois disso ele inicia o emitter e faz um loop
		   a cada 500 milisegundos ele verifica se emitter on*/
		game.time.events.add(2000, function(){
			//start: se explode, tempo de duraçaõ, tempo para nova partícula
			emitter.start(false, 5000, 100);
			game.time.events.loop(300, function(){
				if (emitter.on) {
					emitter.on = false;
				} else {
					emitter.on = true;
				}
			});
			
		});
	}
};