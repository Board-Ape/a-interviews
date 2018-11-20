/* 

Big O Notation: How long an algorithm takes to run.
- How quickly does the runtime grow relative to it's input

*/

// TIME COMPLEXITY

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

// SPACE COMPLEXITY

// 0(1) Space
function print(items) {
    firstItem = items[0];

    for (let item of items) {
        console.log(firstItem, item)
    }
}

// 0(n) Space
function print(items) {
    const result = [];

    for (let item of items) {
        if (item > 5) {
            result.push(item);
        }
    }
}

// CAVEATS:
// Big O ignores constants, BUT sometimes constants do matter especially at scale.
// Premature optimization may lead to readability or coding time issues.