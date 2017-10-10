n = int(input("What is the number: "))
n = n + 1
for i in range(1,n):
    if i % 2 == 0:
        print("The number sent is: "+ str(i) + " " + str(i/2))
    else:
        print("The number sent is: "+ str(i) + " " + str((i*3)+1))
