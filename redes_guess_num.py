new_random_number = 50
print("We think you number is " + str(new_random_number) + " Please let us know if this is correct.")
user_responce = input("Please tell us rather a number is too high = h, too low = l, or your number = n. ")
guess = 1
count = 0
count1 = 0
while user_responce != 'n':
    guess = guess + 1
    if user_responce == "l":
        count = count + 1
        if count1 == 0:
            new_random_number = new_random_number + 25
        else:
            new_random_number = new_random_number + 1
        print("We think you number is " + str(round(new_random_number)) + " Please let us know if this is correct.")
        user_responce = input("Please tell us rather a number is too high = h, too low = l, or your number = n.")
        #new_random_number = (1+new_random_number) / 2
    elif user_responce == "h":
        count1 = count1 + 1
        if count == 0:
            new_random_number = new_random_number - 25
        else:
            new_random_number = new_random_number - 1
        print("We think you number is " + str(round(new_random_number)) + " Please let us know if this is correct.")
        user_responce = input("Please tell us rather a number is too high = h, too low = l, or your number = n.")
        #new_random_number = (1+new_random_number) * 2

print("Your number is:" + str(new_random_number) + "." + "The computer had to guess " + str(guess) + " times.")
