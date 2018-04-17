demo.state1 = function () {};

var cursors;
var velocity = 300;
var rocks;

demo.state1.prototype = {
	preload: function(){
		game.load.tilemap('field', 'assets/tilemaps/mapa.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('grass', 'assets/tilemaps/grass.png');
		game.load.image('rocks', 'assets/tilemaps/rocks.png');
		game.load.image('clovis', 'assets/sprites/clovis.png');

	},
	create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.stage.backgroundColor = '#DDDDDD';
		addChangeStateEventListeners();

		var map = game.add.tilemap('field');
		map.addTilesetImage('grass');
		map.addTilesetImage('rocks');
		var grass = map.createLayer('grass');
		var highgrass = map.createLayer('highgrass');
		rocks = map.createLayer('rocks');

		map.setCollisionBetween(20, 36, true, 'rocks');

		clovis = game.add.sprite(200,200, 'clovis');
		clovis.scale.setTo(0.2, 0.2);
		game.physics.enable(clovis);

		cursors = game.input.keyboard.createCursorKeys();
	},
	update: function(){

		game.physics.arcade.collide(clovis, rocks, function() {console.log('Preda!!');});

		if (cursors.up.isDown){
			clovis.body.velocity.y = -velocity;
		} else if (cursors.down.isDown) {
			clovis.body.velocity.y = +velocity;			
		} else {
			clovis.body.velocity.y = 0;
		}

		if (cursors.left.isDown) {
			clovis.body.velocity.x = -velocity;
		} else if (cursors.right.isDown) {
			clovis.body.velocity.x = +velocity;			
		} else {
			clovis.body.velocity.x = 0;
		}
	}
};