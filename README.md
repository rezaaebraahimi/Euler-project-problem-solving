# Problem Solving
- In this repository i try to **solve** a series of **computational problems** with **Python**.
+ I try to do this in **my own way**, but you can solve the problems with **your own point of view**. <br>
<p>
- <a href="https://github.com/rezaaebraahimi/problem-solving#problem---1">Problem-001</a> 
- <a href="https://github.com/rezaaebraahimi/problem-solving#problem---2">Problem-002</a>
- <a href="https://github.com/rezaaebraahimi/problem-solving#problem---3">Problem-003</a> 
- <a href="https://github.com/rezaaebraahimi/problem-solving#problem---4">Problem-004</a> 
- <a href="https://github.com/rezaaebraahimi/problem-solving#problem---5">Problem-005</a> <br>
- <a href="https://github.com/rezaaebraahimi/problem-solving#problem---6">Problem-006</a> 
- <a href="https://github.com/rezaaebraahimi/problem-solving#problem---7">Problem-007</a> 
- <a href="https://github.com/rezaaebraahimi/problem-solving#problem---8">Problem-008</a>
- <a href="https://github.com/rezaaebraahimi/problem-solving#problem---9">Problem-009</a> 
- <a href="https://github.com/rezaaebraahimi/problem-solving#problem---10">Problem-010</a></p>

<br><br>
# Problem - 1
> <h4>If we list all the natural numbers below 10 that are multiples of 3 or 5,<br>
> we get 3, 5, 6 and 9. The sum of these multiples is 23.<br><br>
> Find the sum of all the multiples of 3 or 5 below 1000.<br></h4>
> <h6> اگر اعداد طبیعی زیر 10 که بر 3 یا 5 بخش پذیر هستند را لیست کنیم<br>
> اعداد 3، 5، 6 و 9 بدست میاد، مجموع این اعداد 23 است<br><br>
> مجموع اعداد زیر 1000 که به 3 یا 5 بخش پذیر هستند را پیدا کنید</h6>

```python
num_ls=[]
sum = 0

for n in range(1000):
    if n % 3 == 0 or n % 5 == 0:
        num_ls.append(n)   
        
for num in num_ls:
    sum += num
print(sum)

    ### Answer is 233168 ###
```

# Problem - 2
> <h4>Each new term in the Fibonacci sequence is generated by adding the previous two terms.<br>
> By starting with 1 and 2, the first 10 terms will be:<br><br>
> 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... <br><br>
> By considering the terms in the Fibonacci sequence whose values do not exceed four million,<br>
> find the sum of the even-valued terms.</h4>
> <h6>هر مقدار جدید در دنباله فیبوناچی از جمع دو عدد قبلی ساخته میشه <br>
> با شروع از 1 و 2، 10 عدد اول به این صورت خواهد بود <br><br>
> 1، 2، 3، 5، 8، 13، 21، 34، 55، 89<br><br>
> با در نظر گرفتن عبارت هایی در دنباله فیبوناچی که مقادیر آنها از 4 میلیون تجاوز نمی کند <br>
> مجموع اعداد زوج میان این اعداد را بدست بیاورید</h6>
```python
first_num = 1
second_num = 1
new_fib = first_num + second_num
sum = 0 

while new_fib < 4 * 10 ** 6:
    sum += new_fib
    first_num = second_num + new_fib
    second_num = new_fib + first_num
    new_fib = first_num + second_num
    
print(sum)

    ### Answer is 4613732 ###
```

# Problem - 3 
> <h4>The prime factors of 13195 are 5, 7, 13 and 29.<br><br>
> What is the largest prime factor of the number 600851475143? </h4>
> <h6> ضرایب اول عدد 13195 عبارتند از 5، 7، 13 و 29 <br><br>
> بزرگترین ضریب اول عدد 600851475143 چیست؟ </h6>
```python
num = 600851475143

def prime(x):
    if x > 1:
        for n in range(2, int(x / 2) + 1):
            if (x % n) == 0:
                return False
        else:
            return True
    else:
       return False
 
 
for n in range(1,int(num/2)+1):
    if num % n == 0:
        num = num/n
        if prime(num):
            print(num)

    ### Answer is 6857 ###
```

# Problem - 4
> <h4> A palindromic number reads the same both ways.<br>
> The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 * 99.<br><br>
> Find the largest palindrome made from the product of two 3-digit numbers. </h4>
> <h6> یک عدد پالیندرومیک از هر دو طرف یکسان خوانده میشود <br>
>  بزرگترین پالیندورم ساخته شده از حاصل ضرب دو عدد 2 رقمی عدد 91 * 99 = 9009 است <br><br>
> بزرگترین پالیندورمی که از ضرب دو عدد 3 رقمی ساخته میشود را پیدا کنید </h6>
```python
num_ls = []

for i in range(100, 1000):
	for j in range(100, 1000):
		if str(i * j) == str(i * j)[ : :-1]:
			num_ls.append(i * j)
   
print(max(num_ls))

	### Answer is 906909 ###
```

# Problem - 5
> <h4> 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.<br><br>
> What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?</h4>
> <h6>2520 کوچکترین عددی است که می توان بر هر یک از اعداد از 1 تا 10 بدون هیچ باقیمانده ای تقسیم کرد. <br><br>
> کوچکترین عدد مثبتی که بر همه اعداد 1 تا 20 بخش پذیر است کدام است؟ </h6>

```python
num = 1

for n in range(1, 21):
    if num % n != 0:
        for x in range(1, 21):
            if (x * num) % n == 0:
                num = num * x
                break
            
print(num)

    ### Answer is 232792560 ###
```

# Problem - 6
> <h4> The sum of the squares of the first ten natural numbers is: <br>
> 1**2 + 2**2 + ... + 10**2 = 385 <br><br>
> The square of the sum of the first ten natural numbers is:<br>
> (1+2+3+...+10)**2 = 55**2 = 3025 <br><br>
> Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is: <br>
> 3025 - 385 = 2640 <br><br>
> Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum. </h4>
> <h6> مجموع مربع های ده عدد طبیعی اول برابر است با <br>
> 1**2 + 2**2 + ... + 10**2 = 385 <br><br>
> مربع مجموع ده عدد طبیعی اول برابر است با <br>
> (1+2+3+...+10)**2 = 55**2 = 3025 <br><br>
> بنابراین تفاضل مجموع مربع های ده عدد طبیعی اول و مربع مجموع آن برابر است با <br>
> 3025 - 385 = 2640 <br><br>
> تفاضل مجموع مربع های صد عدد طبیعی اول و مربع مجموع را پیدا کنید. </h6>

```python
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
```
# Problem - 7
> <h4> By listing the first six prime numbers:  <br>
> 2, 3, 5, 7, 11, and 13, <br>
> we can see that the 6th prime is 13.<br><br>
> What is the 10001st prime number? </h4>
> <h6>با لیست کردن 6 عدداول : 2، 3، 5، 7، 11 و 13   <br>
> میتونیم ببینیم که ششمین عدد اول 6 است<br><br>
> حالا 10001مین عدد اول کدام است؟ </h6>
```python
def prime(x):
    for n in range(2, int(x / 2) + 1):
        if (x % n) == 0:
            return False
    else:
        return True


primes = []
num = 2

while len(primes) < 10001 :
    if prime(num):
        primes.append(num)
    num += 1
    
print(primes[-1])
    
    ### Answer is 104743 ###
```

# Problem - 8
> <h4> The four adjacent digits in the 1000-digit number that have the greatest product are 9 * 9 * 8 * 9 = 5832. <br>
> NUMBER = 7316717653133............0420752963450 <br><br>
> Find the thirteen adjacent digits in the 1000-digit number that have the greatest product.<br>
> What is the value of this product? </h4>
> <h6> چهار رقم مجاور در عدد 1000 رقمی زیر که بیشترین حاصلضرب را دارند 9 * 9 * 8 * 9 = 5832 هستند  <br>
> سیزده رقم مجاور را در عدد 1000 رقمی پیدا کنید که بیشترین حاصل ضرب را دارند. <br><br>
> مقدار حاصلضرب آنها چقدر است؟ </h6>
```python
NUMBER = """7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"""

greatest = 0
for n in range(0,len(NUMBER) - 39):
    num = 1
    for j in NUMBER[n:n+13]:
        num *= int(j)
    if num > greatest:
        greatest = num    
        
print(greatest)  

    ### Answer is 23514624000 ###
```

# Problem - 9
> <h4> A Pythagorean triplet is a set of three natural numbers, a < b < c,<br>
>  for which, a**2 + b**2 = c**2 <br>
> For example, 32 + 42 = 9 + 16 = 25 = 5**2.<br><br>
> There exists exactly one Pythagorean triplet for which a + b + c = 1000.<br>
> Find the product abc. </h4>
> <h6> سه گانه فیثاغورثی مجموعه ای از سه عدد طبیعی است <br>
> به عنوان مثال: a**2 + b**2 = c**2 <br>
> دقیقاً یک سه گانه فیثاغورثی وجود دارد که به این صورت a + b + c = 1000 است  <br><br>
> حاصلضرب a , b , c را پیدا کنید </h6>
```python
for a in range(1, 1000+1):
    for b in range(a + 1, 1000+1):
        c = 1000 - a - b
        if a*a + b*b == c*c:
            print(a*b*c)
            
            ### Answer is 31875000 ###
```

# Problem - 10
> <h4> The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. <br><br>
> Find the sum of all the primes below two million. </h4>
> <h6>مجموع اعداد اول زیر 10 برابر است با 2 + 3 + 5 + 7 = 17 <br><br>
> مجموع همه اعداد اول زیر 2 میلیون را پیدا کنید. </h6>
```python
def prime(x):
    for n in range(2, int(x / 2) + 1):
        if (x % n) == 0:
            return False
    else:
        return True


sum = 0

for n in range (2, 2000000):
    if prime(n):
        sum += n

print(sum)

    ### Answer is 142913828922 ###
```
