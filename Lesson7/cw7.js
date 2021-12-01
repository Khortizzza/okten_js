// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function car(model, manufacturer, yearOfManufacture, maxSpeed, engineVolume) {
        this.model = model,
        this.manufacturer = manufacturer,
        this.yearOfManufacture = yearOfManufacture,
        this.maxSpeed = maxSpeed,
        this.engineVolume = engineVolume

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годин`)
    };
    this.info = function () {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.yearOfManufacture}, 
        максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${engineVolume}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годин`)
    };

    info() {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.yearOfManufacture}, 
        максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${engineVolume}`);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    };
}

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderellaArr = [
    new Cinderella('CinderellaA', 25, 38),
    new Cinderella('CinderellaB', 23, 36),
    new Cinderella('CinderellaC', 29, 32),
    new Cinderella('CinderellaD', 23, 35),
    new Cinderella('CinderellaE', 32, 43),
    new Cinderella('CinderellaF', 44, 28),
    new Cinderella('CinderellaG', 88, 35),
    new Cinderella('CinderellaH', 21, 36),
    new Cinderella('CinderellaI', 18, 39),
    new Cinderella('CinderellaJ', 45, 37),
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
  }
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
  let princeArr = new Prince ('Adam', 32, 39)
let cinderella = cinderellaArr.find(value => value.footSize === princeArr.shoe);


