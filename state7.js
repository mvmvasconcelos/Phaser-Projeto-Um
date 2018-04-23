var seta, pontoInicialX, pontoFinalX, pontoInicialY, pontoFinalY, direcaoSwipe, variacao = 10;

demo.state7 = function () {};
demo.state7.prototype = {
	preload: function(){
		game.load.image('seta', 'assets/sprites/seta.png');
	},
	create: function(){
		game.stage.backgroundColor = '#e8b433';
		addChangeStateEventListeners();

		seta = game.add.sprite(centerX, centerY, 'seta');
		seta.anchor.setTo(0.5);

		game.input.onDown.add(this.startSwipe);
		game.input.onUp.add(this.getSwipeDirection);
	},
	update: function(){},
	startSwipe: function() {
		//console.log(game.input.x + ' ' + game.input.y);
		pontoInicialX = game.input.x;
		pontoInicialY = game.input.y;
	},
	getSwipeDirection: function() {
		//console.log(game.input.x + ' ' + game.input.y);
		pontoFinalX = game.input.x;
		pontoFinalY = game.input.y;

		//Se a diferença de X e de Y for menor que o valor, então não foi feito swipe e sai da função
		if (Math.abs(pontoFinalX - pontoInicialX) < variacao && Math.abs(pontoFinalY - pontoInicialY) < variacao ) {
			return false;
		}


		/* Math.abs pega o valor absoluto do número, não importando se é negativo ou positivo
		   Se a diferença entre a posição inicial e final X for maior que de a de Y, então o swipe
		   foi horizontal
		*/
		if (Math.abs(pontoFinalX - pontoInicialX) > Math.abs(pontoFinalY - pontoInicialY)) {
			console.log('horizontal');
			//Se a posição final de X for maior do que a posição inicial, então aponta para a direita
			if (pontoFinalX > pontoInicialX) {
				direcaoSwipe = 0;
				console.log('direita');
			} else {
				direcaoSwipe = 180;
				console.log('esquerda');
			}
		} else {
			console.log('vertical');
			//Se a posição final de Y for maior do que a posição inicial, então aponta para baixo
			if (pontoFinalY > pontoInicialY) {
				direcaoSwipe = 90;
				console.log('baixo');
			} else {
				direcaoSwipe = 270;
				console.log('cima');
			}
		}

		seta.angle = direcaoSwipe;
	}
};