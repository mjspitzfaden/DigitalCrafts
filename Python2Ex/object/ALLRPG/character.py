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
