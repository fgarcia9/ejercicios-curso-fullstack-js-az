/**destructuring a object */

const user = {
    name : "Francisco",
    age : 31,
    favBook : {
        bookname : "Poder sin limites",
        bookauthor : "Tony Robbins",
    },
};

const { favBook : {bookname}  } = user;

console.log(bookname);

//const { nestedObjectProp: { identifier } } = expression;

//const { address: { city } } = hero;
//city; // => 'Gotham'









