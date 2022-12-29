/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a**2 + b**2 = c**2
For example, 32 + 42 = 9 + 16 = 25 = 5**2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

function answer(sumABC) {
    for (let a = 1; a <= sumABC; a++) {
        for (let b = a + 1; b <= sumABC; b++) {
            c = sumABC - a - b;
            if (a*a + b*b === c*c) {
                return (a*b*c);
            }
        }
    }
}

console.log(answer(1000));

    /* Answer is 31875000 */