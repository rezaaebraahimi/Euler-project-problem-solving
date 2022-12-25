/* 
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/


function answer() {
    let num = 1;
    
    for (let n = 1; n < 20; n++) {
        if (num % n !== 0) {
            for (let x = 1; x < 20; x++){
                if ((x * num) % n === 0) {
                    num = num * x
                    break
                }
            }
        }
    }
    return num;
}


console.log(answer());

    /* Answer is 232792560 */