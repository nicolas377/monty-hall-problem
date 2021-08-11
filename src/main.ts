interface DoorInfo {
  hasPrize: boolean
  isOpen: boolean
}

type DoorNumber = 1 | 2 | 3

function randomDoor(): DoorNumber {
  var number = Math.floor(Math.random() * 3) + 1
  return number as DoorNumber
}

function generateStage(): DoorInfo[] {
  var doorThatHasPrize = randomDoor()
  return
}