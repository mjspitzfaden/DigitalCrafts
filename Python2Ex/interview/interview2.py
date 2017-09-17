amount = 1000
total = 0
for i in range(0,amount):
    if i%5 == 0 or i%3 == 0:
        total = total + i

print (total)
