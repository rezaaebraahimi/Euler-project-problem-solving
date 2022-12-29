/* 
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function answer(min, max) {
    let num = 1;
    
    for (let n = min; n < max; n++) {
        if (num % n !== 0) {
            for (let x = min; x < max; x++){
                if ((x * num) % n === 0) {
                    num = num * x
                    break
                }
            }
        }
    }
    return num;
}

console.log(answer(1 , 20));

    /* Answer is 232792560 */