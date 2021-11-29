// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNumber(a, b, c) {
//
//     if (a > b && a > c) {
//         if (b > c) {
//             console.log(a, b, c);
//         } else {
//             console.log(a, c, b);
//         }
//     }
//         else if (b > a && b > c) {
//             if (a > c) {
//                 console.log(b, a, c);
//             } else {
//                 console.log(b, c, a);
//             }
//         }
//
//         else if (c>a && c > b) {
//             if (a > b) {
//                 console.log(c, a, b);
//             }else {
//                 console.log(c, b, a);
//             }
//         }
//     }

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNumber (a,b,c) {
//
//     if (a<b && a<c) {
//         if (b < c) {
//             console.log(a, b, c);
//         } else {
//             console.log(a, c, b)
//         }
//     }
//     else if (b<a && b<c){
//         if (a<c){
//         console.log(b,a,c);
//     } else {
//         console.log(b,c,a);
//     }
// }
//
//     else if (c<a && c<b) {
//         if (a<b){
//             console.log(c,a,b);
//         }
//         else {
//             console.log(c,b,a);
//         }
//     }
// }

// - створити функцію яка повертає найбільше число з масиву
// function maxNumOfArr (numbers) {
//     let max = numbers[0];
//     for (const maxNumber of numbers) {
//         if (maxNumber>max) {
//             max=maxNumber;
//         }
//     }
//     return max;
//     }

// - створити функцію яка повертає найменьше число з масиву
// function minNumOfArr (numberss) {
//     let min = numberss[0];
//     for (const minNumber of numberss) {
//         if (minNumber<min) {
//             min=minNumber
//         }
//             }
// return min;
// }

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function summArr(numbers) {
    let result = 0;
    for (const number of numbers) {
        result = result + number;
    }
    return result;
}

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function summArray(numbers) {
    let result = summArr(numbers);
    return result / numbers.length;
}

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minMax(num) {
    let max = num[0];
    let min = num[0];
    for (const numb of num) {
        if (numb > max) {
            max = numb;
        }
        if (numb < min) {
            min = numb;
        }
    }
    console.log(max);
    return min;
}

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randNum(arr) {
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;

}


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function limNum(arr, limit) {
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random() * limit);
    }
    return arr;
}

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function conversely(arr) {
    let newArr = [];
    // for (let i = arr.length - 1; i >= 0; i--) {
    //     const arrElement = arr[i];
    //     newArr.push(arrElement)
    // }
    for (let i = newArr.length - 1, ri; i >= 0; i--, ri++) {
        const newArrElement = newArr[i];
        newArr[ri] = newArr[i];
    }
return newArr;
}