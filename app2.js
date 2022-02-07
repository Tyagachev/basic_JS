'use strict';
// Задача 1
/*
//Пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c);
// Ответ: ++ предварительное увеличение a = 1 + 1.

//Пример 2
d = b++;
alert(d);
// Ответ: постинкрементное увеличение  b = 1 , но  d = 1.


//Пример 3
c = 2 + ++a;
alert(c);
// Ответ: 2 + 1 и + 2 в с из первого примера = 5

// //Пример 4
d = 2 + b++;
alert(d);

alert(a);
alert(b);
// Ответ: alert(d) d содержи 1 из примера 2. 2 + 1 (b++) + 1( который в d ) = 4
// alert(a) ответ 3 так как записаны данные из 1 и 3 го примера.
// alert(b) ответ 3 так как записаны данные из 1, 2 и 4 примера 
*/


// Задача 2
/*
let a = 2;
let x = 1 + (a *=2);
//Ответ 5. 1 + (a = a * 2);
//(a *=2) это сокращенная запись a = a * 2
*/

//Задача 3
/*
let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));
if (a && b >=0) {
alert (a - b);
} else if (a && b < 0) {
    alert (a * b);
}else{
    alert('Ошибка вычисления');
}
*/

/*
let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));

function sum (a,b) {
    return (a * b);

}

alert(sum(a,b));
*/

//Задача 4

let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));

function sumNum (a, b) {
    return a * b;
}
alert (sumNum (a, b));


function sumNum2 (a, b) {
    return a / b;
}
alert (sumNum2 (a, b));

function sumNum3 (a, b) {
    return a + b;
}
alert (sumNum3 (a, b));

function sumNum4 (a, b) {
    return a - b;
}
alert (sumNum4 (a, b));


