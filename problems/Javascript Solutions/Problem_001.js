/*
If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

const range = [...Array(1000).keys()];

function answer(range) {
    let sum = Number("0");
    for (let n in range) {
        if (n % 3 === 0 || n % 5 === 0)
            sum = sum + Number(n);
    }
    return sum
}

console.log(answer(range));

    /* Answer is 233168 */