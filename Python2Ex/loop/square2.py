
test = int(input("Enter the size of your square? "))
if type(test) == int:
    for i in range(test):
        print('*' * test)
else:
    print ("Error this is not a number")
