var clicks = 0, texto, sound;
demo.state3 = function () {};
demo.state3.prototype = {
	preload: function(){
		game.load.spritesheet('botoes', 'assets/sprites/botoes.png', 64, 32);
		game.load.audio('pops', 'assets/sounds/buttonPops.mp3')

	},
	create: function(){
		game.stage.backgroundColor = '#aa7733';
		addChangeStateEventListeners();

		//Adiciona o audio criado à variável
		sound = game.add.audio('pops');
		//cria marcador na variável visto que o áudio em questão é semelhante a um spritesheet de som
		sound.addMarker('low', 0.15, 0.4); //nome do marcador, início, fim
		sound.addMarker('high', 1.1, 1.5);

		var b1 = game.add.button(100, 100, 'botoes', function(){changeState(null,1);}, 0, 0, 0, 0);
		var b2 = game.add.button(200, 200, 'botoes', click, 1, 1, 1, 1);
		var b3 = game.add.button(300, //X
								 300, //Y
								 'botoes', //Key da imagem
								 function(){ //função callback
								 	console.log('botão 3'); 
								 	//verifica se já foi criado
								 	if (typeof texto !== "undefined"){
								 		texto.text = "";
								 	}
								 },
								 2, //overFrame - mouseover
								 2, //outFrame - normal
								 2, //downFrame - pressionado
								 2 //upFrame - soltou
								);
		b3.onInputDown.add(this.tint, b3);
		b2.onInputDown.add(this.tint, b2);
		b1.onInputDown.add(this.tint, b1);
		b3.onInputUp.add(this.untint, b3);
		b2.onInputUp.add(this.untint, b2);
		b1.onInputUp.add(this.untint, b1);

	},
	tint: function(){
		this.tint = 0xbbbbbb;
		sound.play('low');
	},
	untint: function(){
		this.tint = 0xffffff;
		sound.play('high');
	}
};
function click() {
	console.log('botão 2');
	if (clicks == 0) {
		texto = game.add.text(centerX - 50, centerY, 'Clicou no botão 2', { font: "30px Arial", fill: "#ffff00", align: "center" } );
		//text.inputEnabled = true;
		clicks++;
	} else {
		clicks++;
		texto.text = "Clicou no botão 2 " + clicks + " vezes";
	}
}