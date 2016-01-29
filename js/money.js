Money = function (game, width) {
    this.game = game;
    this.widthScreen = width;

 	this.moneyContainer = this.game.add.group();
 	this.moneyContainer.enableBody = true;

 	return this.populateContainer();
};

Money.prototype = Object.create(Phaser.Sprite.prototype);
Money.prototype.constructor = Money;

Money.prototype.populateContainer = function(){
	var i = 2;
 	var previousVal;
 	var offset=40;
 	for (var widthReach = 0; widthReach < this.widthScreen; i++)
    {
    	widthReach = i * this.game.rnd.integerInRange(70, 300); 
        
    	while (previousVal>widthReach)
    	{
    		widthReach = i * this.game.rnd.integerInRange(70, 300); 	
    	}

        var moneyFactory =  new MoneyFactory();

        var money=null;
    	if (this.game.rnd.integerInRange(0, 5) == 5){
    		money = moneyFactory.createMoney({
                moneyType: "MoneyBig",
                posX: widthReach
            },this.moneyContainer); 
    	}
    	else{
	        money = moneyFactory.createMoney({
                moneyType: "MoneySmall",
                posX: widthReach
            },this.moneyContainer);    	
    	}

        money.body.gravity.y = 100;
        money.body.bounce.y = 0.1 + Math.random() * 0.2;

        previousVal = offset+widthReach;
    }
    return this.moneyContainer;
};
