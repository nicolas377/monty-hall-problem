"use strict";
function randomDoorNumber() {
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
    setPrize() {
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
        // pick a random door to have a prize
        this.getDoorFromNumber(randomDoorNumber()).setPrize();
    }
    getDoorFromNumber(numberToGet) {
        var Door = this[`door${numberToGet}`];
        return Door;
    }
    getAllDoors() {
        var numbers = [0, 1, 2];
        var doors = [];
        numbers.forEach((value) => {
            doors.push(this.getDoorFromNumber(value));
        });
        return doors;
    }
    getClosedDoors() {
        var doors = this.getAllDoors();
        var closed = [];
        doors.forEach((value, number) => {
            if (value.info.isOpen == false) {
                closed.push(value);
            }
        });
        return closed;
    }
    getDoorWithPrize() {
        var toReturn;
        this.getAllDoors().forEach((value) => {
            if (value.info.hasPrize) {
                toReturn = value;
            }
        });
        return toReturn;
    }
    getDoorsWithoutPrizes() {
        var doors = [];
        this.getAllDoors().forEach((value) => {
            if (!value.info.hasPrize) {
                doors.push(value);
            }
        });
        return doors;
    }
}
/**
 * Plays a game
 * @param toSwitch {boolean} whether to stand on the initial choice or not
 */
function game(toSwitch) {
    // start game
    var results = {
        doorWithPrize: undefined,
        initialChoice: undefined,
        firstDoorOpened: undefined,
        switched: undefined,
        secondChoice: undefined,
        won: undefined
    };
    var Stage = new stage();
    results.doorWithPrize = Stage.getDoorWithPrize().info.number;
    console.log(`Stage set up! Door with prize is #${results.doorWithPrize}!`);
    // pick a random door to start
    var pickedDoorNumber = randomDoorNumber();
    var pickedDoor = Stage.getDoorFromNumber(pickedDoorNumber);
    results.initialChoice = pickedDoorNumber;
    console.log(`Player picked door #${pickedDoorNumber}!`);
    // open a closed door
    var doorsWithoutPrizes = Stage.getDoorsWithoutPrizes();
    var doorToOpen = doorsWithoutPrizes[Math.floor(Math.random() * doorsWithoutPrizes.length)];
    while (doorToOpen == pickedDoor) {
        doorToOpen = doorsWithoutPrizes[Math.floor(Math.random() * doorsWithoutPrizes.length)];
    }
    doorToOpen.open();
    results.firstDoorOpened = doorToOpen.info.number;
    console.log(`Host opened door #${doorToOpen.info.number}!`);
    // switch or stand
    if (toSwitch) {
        Stage.getClosedDoors().forEach((value) => {
            if (value.info.number !== pickedDoor.info.number) {
                pickedDoor = value;
            }
        });
        results.secondChoice = pickedDoor.info.number;
        results.switched = true;
        console.log(`Switched pick to door #${pickedDoor.info.number}!`);
    }
    else {
        results.secondChoice = pickedDoor.info.number;
        results.switched = false;
        console.log(`Stood on door #${pickedDoor.info.number}!`);
    }
    if (pickedDoor == Stage.getDoorWithPrize()) {
        results.won = true;
        console.log("Player won!");
    }
    else {
        results.won = false;
        console.log("Player lost!");
    }
    return results;
}
console.log(game(true));
