/**cloning an object */

const user = {
    name : "Francisco",
    age : 31,
    gender : "Male",
};

//const copiedUser = {};
//copiedUser.name = user.name;
//copiedUser.age = user.age;


//with a for loop we can iterate to associate each value
/*
for (let key in user) {
    console.log(key,user[key]);
    copiedUser[key] = user[key];
}
*/

const copiedUser = Object.assign({},user);











