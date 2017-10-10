from character import *
from store import *

Store1 = Store()

print("***************************")
print("Please enter your character")
print("Enter H = Hero")
print("Enter G = Goblin")
print("Enter Z = Zombie")
print("Enter M = Medic ")
print("Enter S = Shadow")
print("****************************")
YourChar = input("Please enter a letter: ")

H = 0
G = 0
Z = 0
M = 0
S = 0

if YourChar == "H":
    God = Hero(10,2,"hero",2,10,True,1)
    H = 1
elif YourChar == "G":
    God = Goblin1 = Goblin(6,2,"goblin",1,11,True,2)
    G = 1
elif YourChar == "Z":
    God = Zombie(100,0,"zombie",1,12,True,3)
    Z = 1
elif YourChar == "M":
    God = Medic(6,2,"medic",1,13,True,4)
    M = 1
elif YourChar == "S":
    God = Shadow(14,2,"shadow",1,14,True,5)
    S = 1


if H != 1:
    Hero1 = Hero(10,2,"hero",2,10,True,1)
if G != 1:
    Goblin1 = Goblin(6,2,"goblin",1,11,True,2)
if Z != 1:
    Zombie1 = Zombie(100,0,"zombie",1,12,True,3)
if M != 1:
    Medic1 = Medic(6,2,"medic",1,13,True,4)
if S != 1:
    Shadow1 = Shadow(14,2,"shadow",1,14,True,5)


#while Goblin1.health > 0 and Hero1.health > 0:
while God.alive():

    #print("You have {} health and {} power.".format(Hero1.health, Hero1.power))
    Shadow1.print_status()
    God.print_status()
    Goblin1.print_status()
    Zombie1.print_status()
    Medic1.print_status()
    #print("The goblin has {} health and {} power.".format(Goblin1.health, Goblin1.power))
    print()
    print("What do you want to do?")
    print("1. fight goblin")
    print("2. do nothing")
    print("3. flee")
    print("4. fight the zombie")
    print("5. Attack the medic")
    print("6. Collect money")
    print("7. Drink your tonic")
    print("8. Enter the store")
    print("> ", end=' ')
    raw_input = input()
    if raw_input == "1":
        # Hero attacks goblin
        God.attack(Goblin1)
    elif raw_input == "2":
        pass
    elif raw_input == "3":
        print("You just scared of the zombie")
        break
    elif raw_input == "4":
        God.attack(Zombie1)
    elif raw_input == "5":
        God.attack(Medic1)
    elif raw_input == "6":
        break
    elif raw_input == "7":
        #while (raw_input == 7):
        God.super_tonic()
    elif raw_input == "8":
        Store1.set_up()
    else:
        print("Invalid input {}".format(raw_input))
    if raw_input != "4" and Goblin1.alive():
        Goblin1.attack(God)
