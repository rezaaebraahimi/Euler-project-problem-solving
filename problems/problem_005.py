"""
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
"""


def answer():
    num = 1
    
    for n in range(1, 21):
        if num % n != 0:
            for x in range(1, 21):
                if (x * num) % n == 0:
                    num = num * x
                    break
    return num

            
print(answer())

    ### Answer is 232792560 ###
