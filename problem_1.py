"""
If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
"""

num_ls=[]
sum = 0

for n in range(1000):
    if n % 3==0 or n % 5 == 0:
        num_ls.append(n)

for num in num_ls:
    sum += num

print(sum)

    ### Answer is 233168 ###