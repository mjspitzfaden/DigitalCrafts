#1 Given a string, print the string uppercased.
string = "How ARE we doinG!"
string = string.upper()
print ("The string in uppercase is: " + string)

#2 Given a string, print the string capitalized.

stringCap = string.capitalize()
print ("The string in caps is : " + stringCap)

#3 Given a string, print the string reversed.
rev = []
count = 1
for i in range(len(string)):
    rev.append(string[len(string)-count])
    count += 1
rev = " ".join(rev)

print(rev)

print("reversed string: ", string[::-1])

# 4. Leetspeak

#Given a paragraph of text as a string, print the paragraph in leetspeak.
#To translate a string to leetspeak, you need to replace make the following
#character replacements (treat all input characters as uppercase):

#A => 4
#E => 3
#G => 6
#I => 1
#O => 0
#S => 5
#T => 7
#Example: Leet => l337

string = " What is leat spEak.  How should we do this.  What more needs adfadfadfasdfadsfasdfasdfasdfasdfasdfasdfadfadsfadfasdf"
string = string.upper()
finalString = []
for i in range(len(string)):
    if string[i] == "A":
        finalString.append("4")
    elif string[i] == "E":
        finalString.append("3")
    elif string[i] == "G":
        finalString.append("6")
    elif string[i] == "I":
        finalString.append("1")
    elif string[i] == "O":
        finalString.append("0")
    elif string[i] == "S":
        finalString.append("5")
    elif string[i] == "T":
        finalString.append("7")
    else:
        finalString.append(string[i])
print ("Here is Leekspeak: ", ''.join(finalString))

#leatspeek = {'A':4, 'E':3, 'G':6, 'I':1, 'O':}


#5. Long-long Vowels

#Given a word as a string, print the result of extending any long vowels to the length of 5. Examples:

#Good => Goooood
#Cheese => Cheeeeese
#Man => Man
#Spoon => Spooooon

word = "chyyysee"
replaceWord = []

for i in range(len(word)):
    if len(word) != i+1:
        if word[i] == "a" and word[i+1] == "a":
            replaceWord.append("aaaa")
        elif word[i] == "e" and word[i+1] == "e":
            replaceWord.append("eeee")
        elif word[i] == "i" and word[i+1] == "i":
            replaceWord.append("iiii")
        elif word[i] == "o" and word[i+1] == "o":
            replaceWord.append("oooo")
        elif word[i] == "u" and word[i+1] == "u":
            replaceWord.append("uuuu")
        else:
            replaceWord.append(word[i])
    else:
        replaceWord.append(word[i])

print ("Here is the Long Vovel ", ''.join(replaceWord))
