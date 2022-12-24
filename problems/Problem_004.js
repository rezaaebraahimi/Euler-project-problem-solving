/* 
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 * 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/


function answer() {
    const pln = (n) => n === n.split("").reverse().join("")
    let max = 0
    
    for (let i = 100; i < 1000; i++) {
        for (let j = 100; j < 1000; j++) {
            const n = (i * j)
            if (n > max && pln(n.toString())) {
                max = n
            }
        }
    }
    return max;
}


console.log(answer())

    /* Answer is 906609 */