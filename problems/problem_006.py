"""
The sum of the squares of the first ten natural numbers is:
    1**2 + 2**2 + ... + 10**2 = 385
    
The square of the sum of the first ten natural numbers is:
    (1+2+3+...+10)**2 = 55**2 = 3025
    
Hence the difference between the sum of the squares of /
  the first ten natural numbers and the square of the sum is:
    3025 - 385 = 2640
    
Find the difference between the sum of the squares of /
the first one hundred natural numbers and the square of the sum.
"""

def sum_of_sq():
    sum_sq = []
    sum = 0
    for n in range (1, 101):
        sum_sq.append(n**2)
    for num in sum_sq:
        sum += num
    return sum
    
def sq_of_sum():
    sum_2 = 0
    for x in range (1, 101):
        sum_2 += x
    sq = sum_2**2
    return sq

print (sq_of_sum() - sum_of_sq())

    ### Answer is 25164150 ###
