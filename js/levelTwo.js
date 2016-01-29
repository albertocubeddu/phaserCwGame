var levelTwo = function(){
	this.player = null;
	this.globalGravity = {};
	this.globalGravity.y = 300;
};

levelTwo.prototype.preload = function() {
	this.game.load.image('sky', 'assets/sky.png');
    this.game.load.image('money', 'assets/Money-48.png');
    this.game.load.image('moneyBig', 'assets/Money-128.png');
    this.game.load.image('logo', 'assets/cw_logo.png');
    this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    this.game.load.spritesheet('enemy', 'assets/dude.png', 32, 48);
};


levelTwo.prototype.create = function(){
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	this.game.world.setBounds(0, 0, 1920, 600);
	
	this.game.add.tileSprite(0, 0, 192, 600, 'sky');
	// this.game.add.sprite(500, -40, 'logo');

	this.player = this.game.add.sprite(32, this.game.world.height - 150, 'dude');
	this.game.physics.arcade.enable(this.player);
	this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = this.globalGravity.y;
    this.player.body.collideWorldBounds = true;
    this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    this.player.animations.add('right', [5, 6, 7, 8], 10, true);
};