

n = int(input("Enter amount of even number Fibonacci sequance you would like the sum of: "))


a = 0
b = 1
t = []
total = 0

for i in range(0,n):
    c = a + b
    a = b
    b = c
    if (b % 2 == 0):
        t.append(b)

for i in t:
    total = total + i

print(total)
