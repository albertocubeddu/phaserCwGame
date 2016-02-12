badDebtor = function (game) {
    this.game = game;
    Phaser.Sprite.call(this, this.game, this.game.world.randomX+1000, this.game.world.randomY / 2, 'enemy');
    this.game.physics.arcade.enable(this);

    this.body.bounce.y = 0.2;
    this.body.gravity.y = 500;

    this.autoCull = true;
  
    this.body.collideWorldBounds = true;
};

badDebtor.prototype = Object.create(Phaser.Sprite.prototype);
badDebtor.prototype.constructor = badDebtor;

badDebtor.prototype.update = function() {
    //Is visible in the camera?
    if (this.inCamera)
    {
        this.body.velocity.x = -120;
    }
	
};
