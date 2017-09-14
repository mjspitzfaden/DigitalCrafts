
width =  int(input("Width? "))
height = int(input("Height? "))
newWidth = width - 2
newHeight = height - 2
print('*' * width)

    #for i in range(test):
    #    print('*' * test)
for i in range (newHeight):
    print('*' + " " * newWidth + "*")

print('*' * width)
