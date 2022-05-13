/**traversing  object */

let user = {
    name : "Francisco",
    city : "Vera",
    age : 31,
    gender : "Male",
    phone : "669558334",
};

//first way
for (let key in user) {
    console.log(key,user[key]);
}

//second way
console.log(Object.keys(user));
console.log(Object.values(user));

for (let val of Object.values(user)) {
    console.log(val);
}










