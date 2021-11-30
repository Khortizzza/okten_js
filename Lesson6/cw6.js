// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
let n4 = 'Sirius---__..Black'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

function editName(name) {
    return name
        .replaceAll('..', ' ')
        .replaceAll('---', ' ')
        .replaceAll('__', ' ')
        .replaceAll('   ', ' ');

}
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);

// let replaceName = editName(n1);
// let replaceName = editName(n2);
// let replaceName = editName(n3);
let replaceName = editName(n4);
console.log(replaceName);


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function randArr(size) {
    let arr=[];
    for (let i=0; i<size; i++) {
        arr.push(Math.round(Math.random()*100));
    }
    return arr
}

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
 let arrayRand = randArr(20);
// arrayRand.sort((a,b) => a-b);
// arrayRand.sort((a,b) => b-a);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
arrayRand.filter(value => !(value%2));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
arrayRand.map(value => value + '');

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// function sortNums(numbers, direction) {
// let sortArr = [];
// if (direction === 'asc'){
//     sortArr= numbers.sort((a,b) => a-b);
// }else if (direction === 'desc') {
//     sortArr= numbers.sort((a,b) => b-a);
// }
// return sortArr;
// }
// sortNums('1,2,3,5,8,9', 'asc')
// console.log(sortNums())


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців