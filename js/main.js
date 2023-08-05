////////1
let name = "Шамсудин"; /////2 тип данных string

/////////3
const age = 32; // тип данных number

////////4
name = "Shams";
if (age < 15) {
  console.log("доступ запрещен");
} else {
  console.log(`привет  ${name}`);
}

///////5
function viewMoney() {
  console.log("вот вам 10$");
}
viewMoney();

/////////6
function getMoney() {
  return "вот вам 10$";
}
getMoney();

///////7
function getMoney(cash) {
  return `вот вам  ${cash}$`;
}
console.log("399$");
console.log("100$");
console.log("0");
getMoney();

////////8
function num(number) {
  let num = number * number;
  console.log(num);
}
num(4);

////////9
let one = prompt(1);
let two = prompt(2);
let three = prompt(3);
if (+one > +two && +one > +three) {
  console.log(one);
} else if (+two > +three && +two > +one) {
  console.log(two);
} else {
  console.log(three);
}

////////10
function Disc(a, b, c) {
  let disc = b ** 2 - 4 * a * c;
  return disc;
}
console.log(Disc(2, 3, 1));

// /////////11
function nomer(nom3, nom4) {
  if (nom3 % 2 === 0 && nom4 % 2 === 0) {
    return nom3 * nom4;
  } else if (nom3 % 2 !== 0 && nom4 % 2 !== 0) {
    return nom3 + nom4;
  } else {
    if (nom3 % 2 !== 0) {
      return nom3;
    } else {
      return nom4;
    }
  }
}
console.log(nomer(2, 4));
console.log(nomer(5, 3));
console.log(nomer(4, 7));
