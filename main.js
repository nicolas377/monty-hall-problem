"use strict";
function getRandomDoorNumber() {
    return Math.floor(Math.random() * 3);
}
class door {
    info;
    constructor(info) {
        this.info = info;
    }
    open() {
        this.info.isOpen = true;
    }
    addPrize() {
        this.info.hasPrize = true;
    }
}
class stage {
    door0;
    door1;
    door2;
    constructor() {
        // init everything
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
        // put a prize behind a door
        this[`door${getRandomDoorNumber()}`].addPrize();
    }
    getDoors() {
        var toReturn = [];
        toReturn.push(this.door0);
        toReturn.push(this.door1);
        toReturn.push(this.door2);
        return toReturn;
    }
    openDoorWithoutPrize() {
        var doors = this.getDoors();
        // weed out the door with a prize
        doors.forEach((element, index) => {
            if (!element.info.hasPrize) {
                doors = doors.splice(index, 1);
            }
        });
        // open a random door without a prize
        const randomIndex = Math.floor(Math.random() * doors.length);
        doors[randomIndex].open();
        return doors[randomIndex];
    }
    openDoor(doorNumber) {
        this[`door${doorNumber}`].open();
        return this[`door${doorNumber}`];
    }
}
var Stage = new stage();
