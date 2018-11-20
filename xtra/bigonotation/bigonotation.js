/* 

Big O Notation: How long an algorithm takes to run.
- How quickly does the runtime grow relative to it's input

*/

// 0(1) Constant
function print(items) {
    console.log(items[0]);
}

// 0(n) Linear
function print(items) {
    items.forEach(item => console.log(item));
}

// 0(n^2) Quadratic
function print(items) {
    items.forEach(item => {
        item.forEach(unit => console.log(item : unit));
    });
}