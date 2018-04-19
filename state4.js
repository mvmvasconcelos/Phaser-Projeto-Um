var i;
demo.state4 = function () {};
demo.state4.prototype = {
	preload: function(){

	a1 = game.add.sprite(10, 100, 'clovisIdle');
	a2 = game.add.sprite(300, 100, 'clovisIdle');
	a3 = game.add.sprite(600, 100, 'clovisIdle');
	a4 = game.add.sprite(900, 100, 'clovisIdle');
	a5 = game.add.sprite(1200, 100, 'clovisIdle');

	/* Adiciona tween para=> recebe 2 objetos: posição{ x:## , y: ##}}, tempo em milisegundos,
	   do tween, e se começa ativo ou não */
	game.add.tween(a1).to({y: 400}, 2000, 'Bounce', true);
	i = game.add.tween(a2).to({x: 100, y: 0}, 1000, 'Elastic.easeOut');
	game.add.tween(a3).from({y: 1000}, 4500, 'Circ.easeOut', true);
	game.add.tween(a4).to({alpha:0}, 3000, 'Bounce', true);
	game.add.tween(a5.anchor).to({x: 1}, 2000, 'Bounce', true, 1000, 2, true);

	},
	create: function(){
		game.stage.backgroundColor = '#266b39';

		addChangeStateEventListeners();
		a2.inputEnabled = true;
		a2.events.onInputDown.add(function(){i.start();});
	}
};