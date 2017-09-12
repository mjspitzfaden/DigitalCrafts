nextCoin = 0
print ("you have " + str(nextCoin) + "  coins")
status = input("Do you want a coin? ")
status = status.lower()
if (status == "no"):
    print("Bye")
while (status == "yes"):
    nextCoin = nextCoin + 1
    print("You have " + str(nextCoin) + " coins")
    status = input("Do you want a coin? ")
    status = status.lower()
    if (status == "no"):
        print("Bye")
