MoneySmall = function (options, moneyContainer) {
	var posX = options.posX;
	
	var money = moneyContainer.create(posX, 0, 'money');  
	money.body.gravity.y = 100;
    money.body.bounce.y = 0.1 + Math.random() * 0.2;
    return money;
};

MoneySmall.prototype = Object.create(Phaser.Sprite.prototype);
MoneySmall.prototype.constructor = MoneySmall;

  	
        