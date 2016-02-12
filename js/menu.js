var menu = function(){

};

menu.prototype.preload = function() {	
	this.game.load.image('sky', 'assets/sky.png');
	this.game.load.image('logo', 'assets/cw_logo.png');
};


menu.prototype.create = function(){
	////////////////////////
	/// CREATE BASIC MAP
	/// //////////////////
	this.game.add.tileSprite(0, 0, 800, 600, 'sky');
	// this.game.add.sprite(500, 10, 'logo');

	this.textWelcome = this.game.add.text(16,16, 'Welcome, Press ENTER To Start', { fontSize: '32px', fill: '#000' });
    this.cursors = this.game.input.keyboard.createCursorKeys();  


   //text informations
	// this.scoreTextBase = this.game.add.text(16, 16, 'Score:', { fontSize: '32px', fill: '#000' });
	// this.scoreTextBase.fixedToCamera = true;
	
};

menu.prototype.update = function(){
	
	if (this.game.input.keyboard.isDown(Phaser.KeyCode.ENTER))
	{
    	this.game.state.start("levelOne");
	}
};


menu.prototype.render = function(){
};