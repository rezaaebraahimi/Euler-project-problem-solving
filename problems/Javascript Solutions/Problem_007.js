/**
By listing the first six prime numbers: 
2, 3, 5, 7, 11, and 13,
we can see that the 6th prime is 13.

What is the 10001st prime number?
 */

function prime(x) {
    for (let n = 2; n < x; n++ ) {
        if (x % n === 0) {
            return false;
        }
    }
    return true;
}

const stNumber = 10001;

function answer(stNumber) {
    let primes = [];
    let num = 2;

    while (primes.length < stNumber) {
        if (prime(num)) {
            primes.push(num);
        }
        num += 1;
    }
    return primes.slice(-1).pop()
}

console.log(answer(stNumber));

    /* Answer is 104743 */