// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let num = [1, 5, 10, 64, -5];
// console.log(num)
// let strin = ['hello', 'slovo', 'vorobey', 'sun', 'random' ];
// console.log(strin)
// let mix = ['boo', 8, true, 99, 'doo'];
// console.log(mix)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = 'poo';
// array[1] = 156;
// array[2] = 'pii';
// array[3] = 'oop';
// array[4] = 96;
// console.log(array[3]);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>`);
//     document.write('JS');
//     document.write(`</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>`);
//     document.write('JS v.' + i);
//     document.write(`</div>`);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20)  {
//     document.write(`<h1>Have a nice day!</h1>`);
// i++;
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20)  {
//     document.write(`<h1>Day number - ${i} </h1>`);
//     i++;
// }


//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let num = [5, 8, 9, 12, 95, 69, 1234, 951, -5, 0];
// for (let i = 0; i < num.length; i++) {
//     const numm = num[i];
//     console.log(numm);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let strin = ['hello', 'slovo', 'vorobey', 'sun', 'random','hello', 'slovo', 'vorobey', 'sun', 'random'];
// for (let i = 0; i < strin.length; i++) {
//     const string = strin[i];
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = [true, 89, 'num', 'boo', 764, -234, 'fff', 98, 890];
// for (let i = 0; i < array.length; i++) {
//     const arrays = array[i];
//     console.log(arrays);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = [true, 13, 'num', 'boo', 764, -234, 'ygv', false, 87];
// for (let i = 0; i <  array.length; i++) {
//     const arrayItem = array[i];
//     if (typeof  arrayItem === 'boolean') {
//         console.log(arrayItem);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (let i = 0; i <  array.length; i++) {
//     const arrayItem = array[i];
//     if (typeof  arrayItem === 'string') {
//         console.log(arrayItem);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (let i = 0; i <  array.length; i++) {
//     const arrayItem = array[i];
//     if (typeof  arrayItem === 'number') {
//         console.log(arrayItem);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.




// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++){
//     console.log(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++){
// document.write(`<p>${i}</p>`)
//     console.log(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 2){
// document.write(`<p>${i}</p>`)
//     console.log(i)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i%2 === 0 && i !== 0 ) {
//         document.write(`<p>${i}</p>`)
//     console.log(i)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i%3 === 0 && i%2 !== 0 ) {
        document.write(`<p>${i}</p>`)
    console.log(i)
    }
}