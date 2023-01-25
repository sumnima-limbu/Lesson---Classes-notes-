// Classes: Main topic
// methods 
// properties

// const nums = [1, 2, 3]
// nums.push('sumnima')

// this 
class Car {
  constructor(name, color, topSpeed) {
    // properties
    this.name = name;
    this.color = color;
    this.topSpeed = topSpeed
    this.currentSpeed = 0;
  }

  // getters & setters
  getCurrentSpeed() {
    return currentSpeed;
  }

  zeroToSixty() {
    setTimeout(() => {
      console.log('pHEW! That was fast!');
      this.currentSpeed = 60;
      console.log(this.currentSpeed)
    }, 3000)
  }

  drive(speed) {
    // console.log('just drove 2 miles!')
    this.currentSpeed += speed
    console.log(`driving speed at ${this.currentSpeed} mph `)
  }

  brake() {
    // console.log('braking: coming to a screeching halt!')
    console.log('braking!')
    this.currentSpeed -= 10;
  }

  stop() {
    console.log('coming to a screeching halt!')
    this.currentSpeed = 0
  }
}

// new Date()
// new Promise() => Classes
const ferrari = new Car('Ferrari', 'red', '250')
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// console.log(ferrari.currentSpeed)
// ferrari.brake()
// console.log(ferrari.currentSpeed)
// ferrari.stop()
// console.log(ferrari.currentSpeed)

// console.log(ferrari.name)
// console.log(ferrari.color)
// console.log(ferrari.topSpeed)

// console.log(ferrari.currentSpeed)

// ferrari.drive()
// ferrari.brake()

// console.log(ferrari.currentSpeed)
// ferrari.zeroToSixty()
// console.log(ferrari.currentSpeed)

// console.log(ferrari)


// porsche, 'yellow', 250
const porsche = new Car('porsche', 'yellow', '250');
// console.log(porsche.name)
// console.log(porsche.color)
// console.log(porsche.topSpeed)
// const nums = [1, 2, 3, 4, 5, 'sumnima']
// nums.forEach(_ => porsche.drive(20))
// porsche.drive(50)
// porsche.drive(80)
// porsche.zeroToSixty()
// porsche.stop()
// console.log(porsche.currentSpeed)

// console.log(porsche.currentSpeed)
// porsche.drive()
// porsche.zeroToSixty()
// console.log(porsche.currentSpeed)
// porsche.brake()
// console.log(porsche.currentSpeed)
// porsche.stop()
// console.log(porsche.currentSpeed)

// you can only have methods inside of classes
// const numbers = [1, 2, 3]
// numbers.push(4) // method
// console.log(typeof [1, 2, 3])
// console.log(numbers)

// Array.prototype.myPush = function(item) {
//   this[this.length] = item
//   return this
// }

// const fruits = ['🍌', '🍓', '🍪', '🍐', '🥭']
// fruits.myPush('🥝')
// fruits.myPush('🍪')
// fruits.myPush('🍓')
// fruits.myPush('🍊')
// console.log(fruits)

