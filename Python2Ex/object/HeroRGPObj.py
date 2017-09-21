
import random

class Character:
   def __init__(self, health, power, name, mult, value, dead, weapon):
       self.health = health
       self.power = power
       self.name = name
       self.mult = mult
       self.value = value
       self.dead = True
       self.weapon = weapon
   def super_tonic(self):
       self.health = self.health + 10
   def alive(self):
       if self.health <= 0:
           print("{} is dead.".format(self.name))
           return False
       else:
           return True
   def attack(self, enemy):
       if enemy.name == "zombie":
          enemy.never_hurt()
       elif enemy.name == "military":
           self.death(enemy)
       elif self.name == "hero":
           self.hero_attack(enemy)
       else:
           enemy.health -= self.power
           print("{} do {} damage to the {}.".format(self.name,self.power,enemy.name))
           if (self.name == "medic"):
               self.heal_two
   def print_status(self):
       print("{} have {} health and {} power.".format(self.name, self.health, self.power))
   def defeated_coins(self, enemy):
       if (enemy.dead == False):
          return enemy.value
          enemy.value = 0
       else:
           print("You must need your eyes checked the dead guy just hit you BRO!!")
           enemy.attack(self)
class Hero(Character):

    def hero_attack(self, enemy):
        randNum = random.randint(1,5)
        if randNum == 5:
            enemy.health = enemy.health - self.power * 2
        else:
            enemy.health = enemy.health - self.power
class Goblin(Character):
    pass
class Zombie(Character):
    def never_hurt(self):
        print("You cant hurt the Zombie, but I am too slow and cant hurt u either")
class Medic(Character):
    def heal_two(self):
        randNum = random.randit(1,5)
        if randNum == 5:
            self.health = self.health + 2
class Shadow(Character):
    def shadow_attack(self, enemy):
        randNum = random.randit(1,10)
        if randNum == 10:
            self.power = self.power - 1
class Lizard(Character):
    # He has a 5 percent chance of healing himself when attacking a target.
    # He does this by stealing power from the enemy/
    def spell_attack(self, enemy):
        randNum = random.randit(1,10)
        if randNum == 20:
            self.power = 10
            enemy.power = enemy.power - 1
class Military(Character):
    def death(self, enemy):
        enemy.health = 0
        print("Why would you attacked the Military: Death")

class Store:
    def __init__ (self):
        self.potion = 19
        self.soard = 10
        self.ax = 10
        self.cost = 1

    def set_up(self):
        print("**************************")
        print("Press 1 to buy a potion: Number of Potions :" + str(self.potion))
        print("Press 2 to buy a soard: Number of Soards :" + str(self.soard))
        print("Press 9 when finished")

        status = input("Please enter a number:")

        while status != "9":
            if status == 1:
               self.buy_potion()
            elif status == 2:
                self.buy_soard()

        print("You are leaving the store")
        print("#########################")
        print("*********GAME_ON*********")
        print("*************************")


    def buy_potion(object):
        self.potion = self.potion - 1

    def buy_soard(object):
        self.soard = self.soard - 1

    def buy_ax(objects):
        self.ax = self.ax - 1

#class Product:
#    def __init__ (self):
#        self.Potion = 10
#        self.soard = 10
#        self.ax = 10
#        self.cost = 1


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
