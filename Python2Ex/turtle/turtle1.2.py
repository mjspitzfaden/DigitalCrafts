
from turtle import *
pencolor('orange')
width(10)
circle(180)

# move into position
up()
forward(50)
left(90)
forward(50)
left(90)
down()
# draw the square
forward(100)
left(90)
forward(100)
left(90)
forward(100)
left(90)
forward(100)

for i in range(5):
    forward(100)
    right(144)

mainloop()
