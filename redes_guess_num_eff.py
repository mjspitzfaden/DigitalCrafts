import random
my_random_number = random.randint(0, 100)
new_random_number = 50
print("We think you number is " + str(new_random_number) + " Please let us know if this is correct.")
user_responce = input("Please tell us rather a number is too high = h, too low = l, or your number = n. ")
guess = 1
count = 0
count1 = 0
while user_responce != 'n':
    guess = guess + 1
    if user_responce == "h":
        if new_random_number > my_random_number:
            new_random_number = random.randint(my_random_number, new_random_number)
        else:
            my_random_number = my_random_number + 1
    
print("Your number is:" + str(new_random_number) + "." + "The computer had to guess " + str(guess) + " times.")
