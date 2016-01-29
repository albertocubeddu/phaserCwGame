creditManager = function (game) {
    this.game = game;
    Phaser.Sprite.call(this, this.game, 32, this.game.world.height - 500, 'dude');
    this.game.physics.arcade.enable(this);

    this.cursors = this.game.input.keyboard.createCursorKeys();    

    // this.body.drag.set(100);

    this.body.bounce.y = 0.2;
    this.body.gravity.y = 500;

    this.body.collideWorldBounds = true;
    this.animations.add('right', [5, 6, 7, 8], 10, true);

    this.game.add.existing(this);

    //ADDING FIRE
    this.fire = this.game.add.sprite(-100, -100, 'fire');
    this.fire.isalive2=false;
    this.game.physics.arcade.enable(this.fire);
};

creditManager.prototype = Object.create(Phaser.Sprite.prototype);
creditManager.prototype.constructor = creditManager;

/**
 * Automatically called by World.update
 */
creditManager.prototype.update = function() {        
    //player always move right
    this.body.velocity.x = 150;
    this.animations.play('right');

    //  Allow the this to jump if they are touching the ground.
    if (this.cursors.up.isDown && this.body.blocked.down)
    {   
        this.body.velocity.y = -450;
    } 

    if (this.cursors.right.isDown)
    {   
        if (!this.fire.alive2)
        {
            this.fire.reset(this.x, this.y);
            this.fire.body.velocity.x = 400;
            this.fire.alive2=true;
            this.fire.timeT = this.game.time.events.add(1000, this.resetFire, this);   
        }
    } 

};


creditManager.prototype.resetFire = function() {   
    this.fire.alive2=false;
    this.fire.reset(-100,-100);
};
