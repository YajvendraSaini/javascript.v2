// let friend = ["Aancahl", "Anshu", "Mansi", "Ananya", "Prince", "Ram"];

// console.log(friend);


// //using for loop with array

// for(let idx = 0; idx <friend.length; idx++){
//     console.log(friend[idx]);
// }

// // using for of loop with array

// for(let el of friend){
//     console.log(el);
// }


// //Question: find the avg of given marks

// let marks = [10,20,30,40,50,60,70,80,90,100];
// let sum = 0;

// for(let val of marks){
//     sum += val;
// }

// let avg = sum/marks.length;
// console.log(`Avg marks of the class = ${avg}`);


// Question: For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after
// applying offer.

let items = [250, 645, 300, 900, 50];

for(let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}

console.log(items);