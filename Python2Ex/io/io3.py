
def letter_histogram(word):
    counts = {}
    for i in word:
        if i not in counts:
            counts[i] = 1
        else:
            counts[i] += 1
    return counts


filename = input("File name you want to open: ")
data = open(filename, 'r')
data = data.read()
print(letter_histogram(data))
