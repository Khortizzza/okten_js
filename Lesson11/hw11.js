// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
let form = document.forms.form;
form.onsubmit = function (e) {
    e.preventDefault();
    let name = this.name.value;
    let age = this.age.value;
    console.log(name, age);
    localStorage.setItem('user', JSON.stringify({name, age}))
};





// -створити форму з інпутами для model,type та volume автівки.
//  при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let auto = document.forms.auto;

auto.onsubmit = function (e){
    e.preventDefault();
let model = this.model.value;
let type = this.type.value;
let volume = this.volume.value;
let car = {model:model, type:type, volume:volume};
    let cars = JSON.parse(localStorage.getItem('cars'));
 if (!cars) {
    cars=[];
    cars.push(car);
    localStorage.setItem('cars', JSON.stringify(cars));
      } else {
    cars.push(car);
    localStorage.setItem('cars', JSON.stringify(cars));
}
};