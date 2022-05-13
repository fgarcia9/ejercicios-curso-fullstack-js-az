/**javascript objects. exercise with salaries sum */

let salaries = {
    juan : 3000,
    pedro : 1550,
    jose : 2010,
    luis : 1250,
};

let sum=0;

/*
for (let key in salaries) {

    sum  +=  + salaries[key];
}

console.log(sum);
*/

for (let value of Object.values(salaries)) {
    sum += + value;
}

console.log(sum);











