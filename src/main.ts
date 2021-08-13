type DoorNumber = 0 | 1 | 2

interface DoorInfo {
  number: DoorNumber;
  isOpen: boolean;
  hasPrize: boolean;
}

function getRandomDoorNumber(): DoorNumber {
  return Math.floor(Math.random() * 3) as DoorNumber
}

class door {
  info: DoorInfo

  constructor(info: DoorInfo) {
    this.info = info
  }

  open() {
    this.info.isOpen = true
  }

  addPrize() {
    this.info.hasPrize = true
  }
}

class stage {
  door0: door
  door1: door
  door2: door
  constructor() {
    // init everything
    this.door0 = new door({
      number: 0,
      isOpen: false,
      hasPrize: false
    })
    this.door1 = new door({
      number: 1,
      isOpen: false,
      hasPrize: false
    })
    this.door2 = new door({
      number: 2,
      isOpen: false,
      hasPrize: false
    })
    
    // put a prize behind a door
    this[`door${getRandomDoorNumber()}`].addPrize()
  }

  getDoors(): door[] {
    var toReturn: door[] = []
    toReturn.push(this.door0)
    toReturn.push(this.door1)
    toReturn.push(this.door2)
    return toReturn
  }

  openDoorWithoutPrize(): door {
    var doors = this.getDoors()

    // weed out the door with a prize
    doors.forEach((element, index) => {
      if (!element.info.hasPrize) {
        doors = doors.splice(index, 1)
      }
    })

    // open a random door without a prize
    const randomIndex: DoorNumber = Math.floor(Math.random()*doors.length) as DoorNumber
    doors[randomIndex].open()

    return doors[randomIndex]
  }

  openDoor(doorNumber: DoorNumber): door {
    this[`door${doorNumber}`].open()
    return this[`door${doorNumber}`]
  }
}

class player {
  constructor() {}
}

var Stage = new stage()