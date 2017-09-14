import matplotlib.pyplot as plot
import math
from numpy import arange

def playAgain(x):
    if x == 'Y':
        return True
    if x == 'N':
        return False
    else:
        return False




value = input("Do you want to play again? ")
status = playAgain(value)
while (status == False):
    if (value == "N"):
        break
    else:
        print ("Error: Please enter a captial Y or N only.")
        value = input("Do you want to play again? ")
        status = playAgain(value)
