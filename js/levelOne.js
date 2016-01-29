var levelOne = function(){
	this.widthScreen = 10240;
	this.map = null;
	this.layer = null;
};

levelOne.prototype.preload = function() {	
	this.game.load.image('sky', 'assets/sky.png');
	this.game.load.image('money', 'assets/Money-48.png');
	this.game.load.image('moneyBig', 'assets/Money-128.png');
	this.game.load.image('logo', 'assets/cw_logo.png');
	this.game.load.image('taxes', 'assets/taxes.png');
	this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	this.game.load.spritesheet('enemy', 'assets/baddie.png', 32, 32);
	this.game.load.spritesheet('fire', 'assets/c.png', 32, 32);

	this.game.load.tilemap('level1Json', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
	this.game.load.image('level1Image', 'assets/tiles_spritesheet.png');
};


levelOne.prototype.create = function(){
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	this.game.world.setBounds(0, 0, this.widthScreen, 600);
	
	////////////////////////
	/// CREATE BASIC MAP
	/// //////////////////
	this.game.add.tileSprite(0, 0, this.widthScreen, 600, 'sky');
	this.map = this.game.add.tilemap('level1Json');
	this.map.addTilesetImage('tiles_spritesheet', 'level1Image');
	this.map.setCollision(125);
	this.map.setCollision(133);
	this.map.setCollision(36);
	this.layer = this.map.createLayer('Tile Layer 1');
    this.layer.resizeWorld();
	this.game.add.sprite(500, 10, 'logo');

	//TAXES
	this.taxes = this.game.add.group();
    this.taxes.enableBody = true;
    this.taxes.physicsBodyType = Phaser.Physics.ARCADE;
    this.map.createFromObjects('Object Layer 1', 132, 'taxes', 0, true, false, this.taxes);
   	this.taxes.addAll('body.gravity.y','100');

   	//!! DO NOT REMOVE I NEED IN FUTURE! :D
   	////////////////////////
	/// DYNAMIC GENERATOR
	/// //////////////////
	///  var result = new Array();
   //  this.map.objects["Object Layer 1"].forEach(function (element){
   //  	result.push(element);
   //  })
   //  result.forEach(function(element){
	 	// this.taxes.create(element.x,element.y,'dude');
   //  }, this);
    // this.taxes.addAll('body.gravity.y',100);

    //Generic thing used during the game
	this.generic = new Generic(this.game);

	//money generator
	this.money = new Money(this.game,this.widthScreen);

	//gamer
	this.player = new creditManager(this.game);
	

	//bad debtor GROUP
	this.badDebtorGroup = this.game.add.group();
	this.generic.fillGroup(this.badDebtorGroup,50,"badDebtor",this.game);

	//emitter
	this.emitter = new emitter(this.game,"money",100,100);
	this.emitter = new emitter(this.game,"money",150,100);
	this.emitter = new emitter(this.game,"money",200,100);
	
	this.cursors = this.game.input.keyboard.createCursorKeys();

	//text informations
	this.scoreTextBase = this.game.add.text(16, 16, 'Score:', { fontSize: '32px', fill: '#000' });
	this.scoreTextBase.fixedToCamera = true;
	
};

levelOne.prototype.update = function(){
	this.game.physics.arcade.collide(this.player, this.layer);
	this.game.physics.arcade.collide(this.badDebtorGroup, this.layer, this.generic.collisionWall, null, this);
	this.game.physics.arcade.collide(this.badDebtorGroup, this.layer);
	this.game.camera.follow(this.player);

	this.game.physics.arcade.collide(this.money, this.layer);
	this.game.physics.arcade.collide(this.taxes, this.layer);
	
	this.game.physics.arcade.overlap(this.player.fire, this.badDebtorGroup, this.generic.collisionFire, null, this);
	// this.game.physics.arcade.overlap(this.player, this.badDebtorGroup, this.generic.collision, null, this);
	
	this.game.physics.arcade.overlap(this.player, this.money, this.generic.collectMoney, null, this);
	this.game.physics.arcade.overlap(this.player, this.taxes, this.generic.collectTaxes, null, this);
  	
  	if (!this.player.isAlive)
  	{
  		console.log("Game Over");
  	}
  	//if score > something 
  	// this.game.state.start("levelTwo");
};


levelOne.prototype.render = function(){
	// var velocity = this.player.body.blocked.left;
	// if(1) {
	// 	var str = 'Ball velocity y: ' + velocity; 
	// }
	// else {
	// 	var str = 'Ball velocity y: ' + velocity;
	// }

	// this.game.debug.text( str , 20, 30 );
};