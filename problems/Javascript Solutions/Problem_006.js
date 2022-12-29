/*
The sum of the squares of the first ten natural numbers is:
    1**2 + 2**2 + ... + 10**2 = 385
    
The square of the sum of the first ten natural numbers is:
    (1+2+3+...+10)**2 = 55**2 = 3025
    
Hence the difference between the sum of the squares of /
  the first ten natural numbers and the square of the sum is:
    3025 - 385 = 2640
    
Find the difference between the sum of the squares of /
the first one hundred natural numbers and the square of the sum.
*/

function sumOfSq() {
    let sum = 0;
    for (let n = 1; n < 101; n++) {
        let sumSq = n ** 2;
        sum += sumSq;
    }
    return sum;
}

function sqOfSum() {
    let sum2 = 0;
    
    for (let x = 1; x < 101; x++) {
        sum2 += x;
        sq = sum2 ** 2;
    }
    return sq;
}

console.log(sqOfSum() - sumOfSq());

    /* Answer is 25164150 */