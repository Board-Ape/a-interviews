// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree
/*

            20
         /  |   \
        0   40  -15
      / | \       |
    12  -2  1    -2

 */

// Breadth-First Traversal 
    // It's similar to a level traversal
    // [20,0,40,-15,12,-2,1,-2]

// Depth-First Traversal
    // Deep dive as quickly as possible
    // [20,0,12,-2,1,40,-15,-2]

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data))
    }

    remove(data) {
        this.children = this.children.filter(function(node) {
            return node.data !== data
        })
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Notice the similarity of a simplified data structure
    // This utilizes an array and forces a queue approach
    // Having a queue simulates a breadth first approach
    traverseBF(fn) {
        const result = [ this.root ];

        while (result.length) {
            const current = result.shift();
            result.push(...current.children);
            fn(current)
        }
    }

    traverseDF(fn) {
        const result = [ this.root ];

        while (result.length) {
            const current = result.shift();
            result.unshift(...current.children);
            fn(current);
        }
    }
}

































//class Tree {
//    constructor() {
//        this.root = null;
//    }
//
//    traverseBF(fn) {
//        const result = [ this.root ];
//
//        while (result.length) {
//            const current = result.shift();
//            result.push(...current.children);
//            fn(current)
//        }
//    }
//
//    traverseDF(fn) {
//        const result = [ this.root ];
//
//        while (result.length) {
//            const current = result.shift();
//            result.unshift(...current.children);
//            fn(current);
//        }
//    }
//}









































//class Node {
//    constructor(data) {
//        this.data = data;
//        this.children = [];
//    }
//
//    add(data) {
//        this.children.push(new Node(data));
//    }
//
//    remove(data) {
//        this.children = this.children.filter(node => {
//            return node.data !== data;
//        });
//    }
//}
//
//class Tree {
//    constructor() {
//        this.root = null;
//    }
//
//    traverseBF(fn) {
//        const result = [ this.root ];
//
//        while (result.length) {
//            const node = result.shift();
//            result.push(...node.children);
//            fn(node);
//        }
//
//    }
//
//    traverseDF(fn) {
//        const result = [ this.root ];
//
//        while (result.length) {
//            const node = result.shift();
//            result.unshift(...node.children);
//            fn(node);
//        }
//    }
//}

module.exports = { Tree, Node };
