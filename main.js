"use strict";
class door {
    info;
    constructor(info) {
        this.info = info;
    }
    open() {
        this.info.isOpen = true;
    }
    setPrize() {
        this.info.hasPrize = true;
    }
}
class stage {
    door0;
    door1;
    door2;
    constructor() {
        this.door0 = new door({
            number: 0,
            isOpen: false,
            hasPrize: false
        });
        this.door1 = new door({
            number: 1,
            isOpen: false,
            hasPrize: false
        });
        this.door2 = new door({
            number: 2,
            isOpen: false,
            hasPrize: false
        });
    }
}
