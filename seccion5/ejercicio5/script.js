/**for in loop */

const objs = {
    name : "Francisco",
    age : 31,
}

for (let key in objs) {
    console.log(key, objs[key]);
}

let numbers = [1,2,3,4,5];
console.log(numbers);

for (let index in numbers) {
    console.log(index,objs[index]);
}

for (let number of numbers) {
    console.log(number);
}

 










