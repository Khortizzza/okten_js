// Все робити за допомоги js.
// - створити блок,
// let block = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta
// block.classList.add('wrap, collapse, alpha, beta')

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// block.style.background=('red');
// block.style.color=('blue');
// block.style.fontSize=('14');

// - додати цей блок в body.
// document.body.appendChild('block');

// - клонувати його повністю, та додати клон в body.
// let clone = block.cloneNode(true);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// let arr = ['Main','Products','About us','Contacts'];
//
// let ul = document.getElementsByClassName('menu')
// for (const array of arr) {
//    let li = document.createElement('li');
//    li.innerText=`${array}`
//     ul[0].appendChild(li)
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (courses of coursesAndDurationArray) {
//     let blck = document.createElement('div');
//     blck.innerText = courses.title + ' - ' + courses.monthDuration;
//     document.body.appendChild(blck);
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// for (courses of coursesAndDurationArray) {
//     let addBlck = document.createElement('div');
//     addBlck.classList.add('item');
//
//     let h1 = document.createElement('h1');
//     addBlck.appendChild(h1);
//     h1.classList.add('heading');
//     h1.innerText = courses.title;
//     let p = document.createElement('p');
//     addBlck.appendChild(p);
//     p.classList.add('description');
//     p.innerText = courses.monthDuration;
//
//     document.body.appendChild(addBlck)
// }
