
console.log('Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).');
let null1 = '';
for (let a = 20; a <= 30; a += 0.5) {
    null1 += (`${a} ,`);
}
console.log(`${null1}`);

console.log('Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.');
let dollar = 27;
for (let i = 10; i <= 100; i += 10) {
    calcuate = dollar * i;
    console.log(`${i} доларів = ${calcuate} гривень`);
}

console.log('Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.');
let number = 100;
for (let d = 1; d <= 100; d++) {
    let sq = d * d;
    if (sq <= number) {
        console.log(`${d}`);
    } else {
        break;
    }
}

console.log(`Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають
інших дільників крім 1 і себе).`)
let yournumber = Number(prompt('Please enter integral number'));
let truenumber = yournumber > 1;
for (let w = 2; w * w <= yournumber; w++){
    if (yournumber % w === 0) {
        truenumber = 0;
    }
}
if (truenumber) {
    console.log(`${yournumber} - This number is prime!`);

} else {
    console.log(`${yournumber} - This number isnt prime!`) 
}

console.log(`Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
Наприклад, числа 9, 81 можна отримати, а 13 - не можна).`);
let number2 = Number(prompt('Please enter number'));
let null2 = 0;
let number1 = 1;
while (number1 < number2) {
    number1 *= 3;
    null2++;
}
if (number1 === number2) {
    console.log(`${number2} можна отримати через 3^${null2}`);
} else {
    console.log(`${number2} не можна отримати через 3 степінь`);
}



