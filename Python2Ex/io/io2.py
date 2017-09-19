
filename = input("File name you want to open: ")
data = open(filename, 'w')
newFileData = input("what would you like to write to the file ? ")
data.write(newFileData)
data.close()
