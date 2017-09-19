
filename = input("File name you want to open: ")
data = open(filename, 'r')
data = data.read()
print(data)
