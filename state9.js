var ref, config, hsText = [], hs = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], score, fbObj;
demo.state9 = function () {};
demo.state9.prototype = {
	preload: function(){
		game.load.spritesheet('botoes', 'assets/sprites/botoes.png', 64, 32);
	},
	create: function(){
		game.stage.backgroundColor = '#037c26';
		addChangeStateEventListeners();

		config = {
			apiKey: "AIzaSyBX3NnpK3Ej6mi_ysAhkEATyyfm804VjA4",
			authDomain: "phaserprojetoum.firebaseapp.com",
			databaseURL: "https://phaserprojetoum.firebaseio.com",
			projectId: "phaserprojetoum",
			storageBucket: "phaserprojetoum.appspot.com",
			messagingSenderId: "1515420515"
		};
		firebase.initializeApp(config);


		//Pega o firebase na raiz
		ref = new firebase.database().ref('/');

		//Percorre o loop 10 vezes
		for (var i = 1; i < 11; i++) {
			//Adiciona o texto cada vez mais para baixo
			game.add.text(500, 10 + (i * 90), i + '. ', {fontSize: '40px'}).anchor.setTo(1,0);
		}
		for (var i = 0; i < 10; i++) {
			//Adiciona o texto cada vez mais para baixo
			hsText[i] = game.add.text(500, 10 + ((i + 1) * 90),'', {fontSize: '40px'});
		}
		var updateHSText = this.updateHSText;
		ref.on('value', function(snapshot) {
			console.log(this);
			fbObj = snapshot.val();
			updateHSText(fbObj.hs);

		});

		var b1 = game.add.button(100, 100, 'botoes', score, 0, 0, 0, 0);

		var b2 = game.add.button(200, 200, 'botoes', resetar, 1, 1, 1, 1);

	},
	updateHSText: function(hs){
		for (var i = 0; i < 10; i++) {
			//Adiciona o texto cada vez mais para baixo
			hsText[i].text = hs[i];
		}
	}
};
function resetar() {
	ref.set({hs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]});
}
function score() {
	score = Math.round(Math.random() * 100);
	fbObj.hs.push(score);
	fbObj.hs = fbObj.hs.sort(function(a, b){
		return b - a;
	}).slice(0, 10);
	ref.set(fbObj);
}