status = "y"
while (status == "y" or status == "Y"):
    import random
    my_random_number = random.randint(1, 10)
    print("I am thinking of a number between 1 and 10.")
    number = input("What's the number? ")
    guess = 5
    while  int(number) != my_random_number and guess > 0:
        print ("Nope, try again.")
        print ("You have " + str(guess) + " guesses left.")
        guess = guess - 1
        if (int(number) < my_random_number):
            print ( str(number) + " is too low." )
        if (int(number) > my_random_number):
            print( str(number) + " is to high.")
        number = input("What's the number? ")

        if guess == 0:
            print ("You ran out of guesses")
        else:
            print("Yes! You win!")
    status = input ("Do you want to play again? Press Y to play again. ")
print ("Bye!")
