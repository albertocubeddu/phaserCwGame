function MoneyFactory() {}

MoneyFactory.prototype.createMoney = function ( options, container ) {
    switch(options.moneyType){
        case "MoneySmall":
            return new MoneySmall(options, container);
        case "MoneyBig":
            return new MoneyBig(options, container);
    }
};
