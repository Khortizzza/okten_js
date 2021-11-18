// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(a, b) {
    return a * b;
}


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function round(r) {
    return Math.PI * Math.pow(r, 2)
}


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r
function cilinder(r, h) {
    return 2 * Math.PI * r * h;
}


// - створити функцію яка приймає масив та виводить кожен його елемент
function array(elem) {
    for (const item of elem) {
        console.log(item)
    }
}


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(txt) {
    document.write(`<p> ${txt}</p>`)
}

paragraph("Uuuhuuuu")


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function uli(text, size) {
    document.write(`<ul>`)
    //  document.write(`<li>${text} </li>`);
    //  document.write(`<li>${text} </li>`);
    //  document.write(`<li>${text} </li>`);
    //  document.write(`</ul>`)
    for (let i = 0; i < size; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

uli('Oooopoooo', 3)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function uli2(text, size) {
    document.write(`<ul>`);
      for (let i = 0; i < size; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}

uli('Oooopoooo', 3)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function mixArray (arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
}

mixArray([true, false, 'boo', 548])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let mixArrayObj [1,"hhhh", 9];

function mixArrayObj (array) {
    for (const item of array); {
        document.write(`<div>${item.id} * ${item.name} * ${item.age}</div>`)
    }
}
