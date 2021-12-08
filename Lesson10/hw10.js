
/*I*/
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let btn = document.getElementById('btn');
// btn.onclick = function () {
// document.getElementById('text').style.display = 'none';
// }


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.getElementById('btn');
// btn.onclick = function () {
// this.style.display = 'none';
// }

/*II*/
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input = document.getElementById('ageCheck');
// let button = document.getElementById('btn1');
// button.onclick = function (){
//     if (input.value >= 18) {
//         alert ('Welcome');
//     }
//     else {
//         alert ('Good bye');
//     }
// }


/*III*/
// - Создайте меню, которое раскрывается/сворачивается при клике
let menu = document.getElementsByClassName('menu')[0];
menu.onclick = function (){
   for (const click of this.children) {
        click.classList.toggle('roll');
    }
}

/*IV*/
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.