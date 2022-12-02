let a = 0.1;
let b = 0.2;
let result = a + b;


let c = "1";
let d = 2;
console.log(d+Number(c));
alert(c+d.toString());


let amount = prompt('Який обсяг флешки в Гб?');
let file = 820;
const gigabyte = 1024;
console.log(Math.trunc(amount * gigabyte / file));


let amount = prompt('Яка у вас сума грошей?');
let price = prompt('Яка ціна однієї шоколадки?');
console.log(Math.trunc(amount / price));
console.log(amount % price);


let amount = prompt('Яку суму ви б хотіли покласти на депозит?');
let time = 2;
let percent = 0.05;
console.log(amount * percent * time)


let amount = prompt('Яку суму ви б хотіли покласти на депозит?');
let percent = 0.05;
let monthFirst = amount * percent;
let monthSecond = ( amount + monthFirst ) * percent;
console.log(monthFirst + monthSecond);