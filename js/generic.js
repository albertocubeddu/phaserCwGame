// This is called by the physic game, so the context is this.
Generic = function (game) {
    this.game = game;
   
    this.scoreText = this.game.add.text(116, 16, '0', { fontSize: '32px', fill: '#000' });
	this.scoreText.fixedToCamera = true;
};

Generic.prototype.constructor = Generic;

Generic.prototype.collectMoney = function(player, money, game) {
	switch(money.key){
	 	case "moneyBig":
	 		this.generic.updateScore("100");
	 		this.emitter = new emitter(this.game,"money",money.x,money.y);
	 	break;
	 	
	 	default:
	 		this.generic.updateScore("10");
	 	break;
	}

	money.kill();
};

Generic.prototype.collectTaxes = function (player, taxes){
	taxes.kill();
	this.generic.updateScore("-100");
};

Generic.prototype.fillGroup = function(group,howMany,spriteClassName,game){
	group.add(new badDebtor(game));
	spriteClassName = this.stringToObject(spriteClassName,"function");
    for (var i=0; i<howMany; i++){
        group.add(new spriteClassName(game));
    }
};

Generic.prototype.stringToObject = function(str, type){
	type = type || "object";  // can pass "function"
    var arr = str.split(".");

    var fn = (window || this);
    for (var i = 0, len = arr.length; i < len; i++) {
        fn = fn[arr[i]];
    }

    if (typeof fn !== type) {
        throw new Error(type +" not found: " + str);
    }

    return  fn;
};

Generic.prototype.collision = function(obj1, obj2){
	obj1.kill();
	obj2.kill();
};

Generic.prototype.collisionWall = function(obj1, obj2){
	if (obj1.body.blocked.left){
		this.game.add.tween(obj1).to( { alpha: 0 }, 300, Phaser.Easing.Linear.None, true);
		this.game.time.events.add(Phaser.Timer.SECOND * 1, function(){obj1.kill();}, this);
	}
};


Generic.prototype.collisionFire = function(playerFire, debtor){
	debtor.kill();
	playerFire.reset(-100,-100);
};

Generic.prototype.updateScore = function(value){
	this.scoreText.text = Number(this.scoreText.text) + Number(value);
};