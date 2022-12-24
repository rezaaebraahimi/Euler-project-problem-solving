/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/


function answer(x) {
    let n;
    
    for (n = 2; n < x; n +=1 ) {
        while (x % n === 0) {
            x /= n;
        }
    }
    return n;
}


console.log(answer(600851475143));

    /* Answer is 6857 */