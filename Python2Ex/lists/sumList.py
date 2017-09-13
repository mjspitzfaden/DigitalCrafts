fun = [1,2,-5,5,6,3,-1]
total = len(fun)
count = 0
totalSum = 0
while (count < total):
    totalSum = totalSum + fun[count]
    count = count + 1
print("The sume of the list is " + str(totalSum))
fun.sort()
print("The largest number is: " + str(fun[total - 1]))
print("The smallest number is: " + str(fun[0]))


# 4 Even numbers
evens = []
for x in fun:
    if x % 2 == 0:
        evens.append(x)
print(evens)



# 5 grater then zero
moreZero = []
for x in fun:
    if x > 0:
        moreZero.append(x)
print(moreZero)

# 6 Postive Numbers
postive = []
for x in fun:
    if x > 0:
        postive.append(x)

# 7 mutiply a list
moreFun = fun * 2
print(moreFun)

#8 Mutiply vectors
listA = [1,2,3]
listB = [2,3,4]
mult = []
for x in listA:
    for y in listB:
        z = x * y
        mult.append(z)
print(mult)

#9 Matris Addition
a = [ [1, 3], [2, 4] ]
b = [ [5, 2 ], [1, 0]  ]
res = []
for i in range(len(a)):
    row = []
    for j in range(len(a[0])):
        row.append(a[i][j]+b[i][j])
    res.append(row)
print(res)

#10 Matris Addition II
c = [ [1, 3], [2, 4], [1, 3] ]
d = [ [5, 2 ], [1, 0], [2, 4] ]
res1 = []
for k in range(len(c)):
    row1 = []
    for m in range(len(c[0])):
        row1.append(c[k][m]+d[k][m])
    res1.append(row1)
print(res1)

#11 Given an list of numbers or strings, create a new list containing the same
#elements as the first list, except with any duplicate values removed.
#Print the list.
#

testList1 = [2,3,3,3,3,3,5,5,6,6,7,3]
newTestList = []

for x in testList1:
    if x not in newTestList:
        newTestList.append(x)

print("List no duplicates: ")

print(newTestList)

#Bonus
#Given two two-dimensional lists of numbers of the size 2x2 - calculate the
#result of multiplying the two matrices. Print the resulting matrix.
#How do you multiple two matricies?

numOne = [[2,-2],[5,3]]
numTwo = [[-1, 4], [7, -6]]
final = [[0,0],[0,0]]

for i in range(len(numOne)):
    for j in range(len(numTwo[0])):
        for k in range(len(numTwo)):
            final[i][j] = numOne[i][k] * numTwo[k][j] + final[i][j]

print ("This is final")
for r in final:
    print(r)
