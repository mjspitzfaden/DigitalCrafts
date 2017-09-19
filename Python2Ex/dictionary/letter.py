def letter_histogram(word):
    counts = {}
    for i in word:
        if i not in counts:
            counts[i] = 1
        else:
            counts[i] += 1
    return counts

def word_histogram(sentence):
    word_list = sentence.split()
    print(word_list)
    word_lib = {}
    for word in word_list:
        if word not in word_lib:
            word_lib[word] = 1
        else:
            word_lib[word] += 1
    return word_lib


print(letter_histogram('bannas'))
print(word_histogram('to be or not to be'))
