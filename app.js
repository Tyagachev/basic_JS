'use strict';

// Задача 1
let tc = prompt ('Введите число градусов по Цельсию');
let tf = (9 / 5) * tc + 32;
alert('Температура по Фаренгейту ' + tf);

// Задача 2
let name = 'Василий';
let admin = name;
console.log(admin);


// Задача 3

let result = 10 + 10 + '10';
console.log(result);

/*
1. 10 плюс 10 получаем 20
2. 20 плюс строчный элемент 10 получаем 2010
3. Записываем 2010 в result
4. С помощью console.log выводим result в консоль
Ответ:строка 2010
*/

let result = 10 + '10' + 10;
console.log(result);

/*
1. 10 плюс строчный элемент 10 получаем 1010
2. 1010 плюс 10 получаем 101010
3. Записываем 101010 в result
4. С помощью console.log выводим result в консоль
Ответ:строка 101010
*/

let result = 10 + 10 + +"10";
console.log(result);

/*
1. Складываем 10 плюс 10, превращаем строку "10" в число с помощью унарного плюса.
2.Получаем результат 30
3.Записываем 30 в result
4.С помощью console.log выводим result в консоль
Ответ: число 30
*/

let result = 10 / -"";
console.log(result);

/*
1. 10 делим на -"" получаем отрицательную бесконечность -Infinity
2. Записываем -Infinity в result
3. С помощью console.log выводим result в консоль
Ответ:-Infinity
*/


let result = 10 / +"2,5";
console.log(result);

/*
1. 10 делим на число 2,5 получаем NaN (Not-A-Number) - не число. т.к. дробные числа записываются через точку. Тут запятая.
2. Записываем NaN в result
3. С помощью console.log выводим result в консоль
Ответ:NaN
*/

