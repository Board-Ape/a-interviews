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

// Drop Constants 0(2n) => 0(n)
function print(items, basics) {
    items.forEach(item => console.log(item));

    basics.forEach(basic => console.log(basic));
}

// Drop Less Signigicant Terms 0(n + n^2) => 0(n^2)
function print(items, basics) {
    items.forEach(item => console.log(item));

    basics.forEach(itemOne => itemOne.forEach(itemTwo => console.log(itemTwo)));
} 

