import matplotlib.pyplot as plot
import math
from numpy import arange

def playAgain(x):
    if x == 'Y':
        return True
    if x == 'N':
        return False
    else:
        print ("Error: Please enter a captial Y or N only.")


value = input("Do you want to play again? ")
print(playAgain(value))
