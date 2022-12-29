/* 
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 * 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function answer(min, max) {
    const pln = (n) => n === n.split("").reverse().join("")
    let largest = 0
    
    for (let i = min; i < max; i++) {
        for (let j = min; j < max; j++) {
            const n = (i * j)
            if (n > largest && pln(n.toString())) {
                largest = n
            }
        }
    }
    return largest;
}

console.log(answer(100, 1000));

    /* Answer is 906609 */