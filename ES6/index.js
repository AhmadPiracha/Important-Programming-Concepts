// var => function-scoped
// let, const => block-scoped

// function sayHello() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }
// sayHello();

// const Name = "Ahmad";

// console.log(Name);


const person = {
    name: "Ahmad",
    walk() {},
};

person['name'] = "Ali";

console.log(person.name);