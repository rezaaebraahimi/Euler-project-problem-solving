/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/


function prime(x) {
    for (let n = 2; n < x; n++ ) {
        if (x % n === 0) {
            return false;
        }
    }
    return true;
}


function answer() {
    let sum = 0;

    for (let n = 2; n < 2000000; n++ ) {
        if (prime(n)) {
            sum += n
        }
    }
    return sum;
}


console.log(answer());

    /* Answer is 142913828922 */