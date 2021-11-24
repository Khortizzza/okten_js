// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
const square = (a, b) => a*b;
console.log(square(15, 25));

// - створити функцію яка обчислює та повертає площу кола
const squareCicrle = (r) => Math.PI * Math.pow(r, 2);
console.log('square:',squareCicrle( 6));


// - створити функцію яка обчислює та повертає площу циліндру
const cilinder = (r, h) => (squareCicrle(r)*2+2*Math.PI*r*h)
console.log('cilinder:', cilinder(5, 10));


// - створити функцію яка приймає масив та виводить кожен його елемент
/*Якщо я вірно зрозуміла завдання*/
const array = (...randArray) => {
    console.log( randArray);
}
 array('fff', 990, 'yb', 85)


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
const text = (txt) => {
    document.write(`<p>${txt}</p>`);
}
text('some text')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const text = (ulLi, size) => {
     document.write(`<ul>`)
        for (i=0; i<size; i++) {
            // console.log(ulLi)
            document.write(`<li>${ulLi}</li>`)
        }
    document.write(`</ul>`)
}
text('random text', 3);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const text = (ulLi, size) => {
     document.write(`<ul>`)
        for (i=0; i<size; i++) {
            // console.log(ulLi)
            document.write(`<li>${ulLi}</li>`)
        }
    document.write(`</ul>`)
}
text('random text', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
const randArray = (mixArr) => {
    document.write(`<ul>`);
    for (const item of mixArr)
    {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
randArray ([250, 'helo', true, 852, -100, 'blah-blah', false]);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
const arrayObj = (arrObj) => {
    for (const item of arrObj) {
        document.write(`<div>${item.id} -- ${item.name} -- ${item.age}</div>`)
    }
}
arrayObj([
    {id: 1, name: 'Name', age: 20},
    {id: 2, name: 'Names', age: 30},
    {id: 3, name: 'Namee', age: 40}
]);
