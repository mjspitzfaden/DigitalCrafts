import pickle

print("Electronic Phone Book")
print("=======================")
print("1. Look up entry ")
print("2. Set an entry ")
print("3. Delete an entry ")
print("4. List all entries ")
print("5. Save entries ")
print("6. Restore saved data ")
print("7. Quit ")
phonebook = {}
selection = input("What do you want to do (1-7)? ")
while selection != "5":
    if selection == "1":
        name = input("What is the persons name? ")
        number = phonebook[name]
        print("The person phone number is: " + number)
    elif selection == "2":
        name = input("What is the persons name? ")
        number = input("What is the persons phone number? ")
        phonebook[name] = number
        print("Entry stored for " + name)
    elif selection == "3":
        name = input("What is the persons name you wish to delete from the phonebook? ")
        del phonebook[name]
    elif selection == "4":
        print(phonebook)
    elif selection == "5":
        # open the file in write mode (wb)
        myfile = open('phonebook.pickle', 'wb')
        # dump the contents of the phonebook_dict into myfile - the open file
        pickle.dump(phonebook, myfile)
        # close myfile
        myfile.close()
    elif selection == "6":
        # open the file in read mode (rb)
        myfile = open('phonebook.pickle', 'rb')
        # load the contents from the file and store it in the phonebook_dict variable
        phonebook = pickle.load(myfile)    
    selection = input("What do you want to do (1-7)? ")
print("Bye.")
