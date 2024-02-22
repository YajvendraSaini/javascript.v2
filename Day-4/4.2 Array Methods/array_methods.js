

let names = ["Yajvendra", "Ananya", "Prince", "Aanchal", "Ram"];
console.log(names);

names.push("Anshu", "Manshi");
console.log(names);

names.pop();
console.log(names);

console.log(names.toString());

let anotherNames = ["Yajju", "Nishu", "Vijay", "Aachuu 🤧", "RAM", "Chiki", "missi"];

console.log(names.concat(anotherNames));


names.unshift("Mini Zoo");
console.log(names);

names.shift();
console.log(names);

console.log(names.slice(1,6));

let num = [1,2,3,4,5,6,7];

num.splice(2, 2, 10, 20);
console.log(num);
console.log(num.length);

num.splice(2, 0, 10);
console.log(num);
console.log(num.length);

num.splice(2, 1);
console.log(num);
console.log(num.length);

num.splice(3);
console.log(num);
console.log(num.length);

num.splice();
console.log(num);
console.log(num.length);