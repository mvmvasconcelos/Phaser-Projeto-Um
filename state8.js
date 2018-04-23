var text;
demo.state8 = function () {};
demo.state8.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#7b4dbc';
		addChangeStateEventListeners();

		text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit recusandae laboriosam eos ipsam architecto nobis voluptas earum laudantium cumque ipsa rerum fugit, voluptatem nemo, veritatis porro illum tenetur alias explicabo non deleniti numquam adipisci tempora reiciendis tempore necessitatibus? Possimus maxime blanditiis sint labore sit ducimus nostrum ipsum tempora! Aliquid assumenda ut eos rerum laboriosam, doloribus, minima doloremque voluptatibus soluta cum tempore saepe nisi fuga qui facilis, modi numquam magnam culpa ab eligendi necessitatibus. Praesentium delectus sunt sed velit obcaecati, atque a? Recusandae inventore aliquam obcaecati aspernatur ratione, numquam id commodi veniam aperiam est illo molestiae fuga odit et! Labore, veritatis?';

		this.recitandoTexto(100, 100, 1000, text, 30, 10, '#DDD');
	},
	recitandoTexto: function(x, y, width, text, fontSize, speed, fill, font){
		var frase = game.add.text(x, y, '', {fontSize: fontSize + 'px', fill: fill, font});
		var linhaAtual = game.add.text(10, 10, '', {fontSize: fontSize + 'px', font});
		linhaAtual.alpha = 0;
		var loop = game.time.events.loop(speed, addChar);

		var index = 0; //index do texto, pega primeira letra da frase, neste caso o L

		//Adiciona os caracteres um por um no texto. Adiciona 1, aumenta o index em 1 também.
		function addChar() {
			frase.text += text[index];
			linhaAtual.text += text[index];

			if (linhaAtual.width > width && text[index] == ' ') {
				frase.text += '\n';
				linhaAtual.text = '';
			}
			if (index >= text.length - 1) {
				game.time.events.remove(loop);
				console.log('Parou');
			}
			index++;
		}
	}
};