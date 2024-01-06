// Conditional Statements

// if statement

let mode = "purple";
let color;

if(mode === "dark"){
    color = "black";
}

if (mode === "light"){
    color = "light";
}

console.log(color);


// if-else statement

let a = 10;

if(a%2 === 0){
    console.log( a, "is even");
} else{
    console.log(a, "is odd");
}


// else-if statement

if(mode === "dark"){
    color = "black";
} else if(mode ==="purple"){
    color = "purple";
} else if(mode === "yellow"){
    color = "yellow";
} else {
    color = "light";
}

console.log(color);



