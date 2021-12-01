// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let p = document.getElementById('content');
console.log(p);


// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules');
console.log(rules);


// -- замініть текст параграфа з id 'content' на будь-який інший
let changeCont = document.getElementById('content').innerHTML = 'This is some dummy text. This is some dummy text. This is some dummy text. This is some dummy text. ';


// -- замініть текст параграфа з id 'rules' на будь-який інший
let chngRules = document.getElementById('rules').innerHTML = 'Съешь ещё этих мягких французских булок, да выпей чаю';


// -- змініть кожному елементу колір фону на червоний
// let chngColor = document.querySelectorAll('body > *')
// for (const body of chngColor) {
//     body.style.background='red';
// }
// -- змініть кожному елементу колір тексту на синій
let chngColor = document.querySelectorAll('body > *')
for (const body of chngColor) {
    body.style.color='darkblue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
const idRul = document.querySelectorAll('[id="rules"]');
console.log(idRul);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRul = document.getElementsByClassName('fc_rules')
for (const fc_rules of fcRul) {
    fc_rules.style.color='red';
}
