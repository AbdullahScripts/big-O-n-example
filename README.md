# Big O Notation Explained

This repository contains a simple JavaScript code example along with an explanation of Big O notation.

## Big O Notation

Big O notation is a mathematical notation that describes the time complexity or space complexity of an algorithm in terms of the size of its input. It provides a way to analyze the efficiency of algorithms and compare their performance.

### Common Notations

- O(1): Constant time complexity. The algorithm's performance does not depend on the size of the input.
- O(log n): Logarithmic time complexity. The algorithm's performance grows logarithmically as the size of the input increases.
- O(n): Linear time complexity. The algorithm's performance grows linearly with the size of the input.
- O(n^2): Quadratic time complexity. The algorithm's performance grows quadratically with the size of the input.

## Code Example

The provided JavaScript code demonstrates a simple algorithm to find occurrences of the string 'memo' in an array.

```javascript
const names = ['memo'];

const moreNames = new Array(1000).fill('memo');

function memofinder(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'memo') {
            console.log("memo found at index: " + i);
        }
    }
    let te = performance.now();
}

memofinder(moreNames);
