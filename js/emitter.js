emitter = function (game, particleSprite, x, y) {
    this.game = game;
    this.emitter = this.game.add.emitter(0, 0, 100);
    this.emitter.makeParticles(particleSprite);
    this.emitter.gravity = 100;
    this.emitter.x = x;
    this.emitter.y = y;
    this.emitter.start(true, 4000, null, 10);
    this.game.time.events.add(5000, this.destroy, this);

};


emitter.prototype = Object.create(Phaser.Sprite.prototype);
emitter.prototype.constructor = emitter;


emitter.prototype.destroy = function() {
    this.emitter.destroy();
};

emitter.prototype.update = function() {

};
