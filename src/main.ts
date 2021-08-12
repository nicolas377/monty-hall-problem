type DoorNumber = 0 | 1 | 2

interface DoorInfo {
  number: DoorNumber;
  isOpen: boolean;
  hasPrize: boolean;
}

class door {
  info: DoorInfo

  constructor(info: DoorInfo) {
    this.info = info
  }

  open() {
    this.info.isOpen = true
  }

  setPrize() {
    this.info.hasPrize = true
  }
}

class stage {
  door0: door
  door1: door
  door2: door
  constructor() {
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
  }
}