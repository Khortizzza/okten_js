// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world');
// console.log('lorem ipsum');
// console.log('javascript is cool');

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// function stringToarray(str) {
//     return str.split(' ');
// }
// console.log(stringToarray(str));
// /*or*/
// document.write(stringToarray(str));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let str = 'Каждый охотник желает знать';
// function delete_characters (str, length) {
//     return str.substring(0, length);
// }
// document.write(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// function  insert_dash(str) {
//    return  str.replaceAll(' ', '-').toUpperCase();
// }
// console.log(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// function rowUp(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

function capitalize(str) {
    let arr=[];
    let capStr = str.split(' ')
    for (let item of capStr){
                let Strin = item[0].toUpperCase() + item.slice(1);
                arr.push(Strin);
            }
  let newStr=arr.join(' ');
    return newStr;
}
console.log(capitalize(str));