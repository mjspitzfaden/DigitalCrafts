from turtle import *

def pentagon(distance):
    for i in range (5):
        forward(distance)
        right (72)

def octagon(distance):
    for i in range (8):
        forward(distance)
        right (45)


def hexagon(distance):
    for i in range (6):
        forward(distance)
        right (60)

def square(distance):
#Draw a square
    forward(distance)
    right(90)
    forward(distance)
    right(90)
    forward(distance)
    right(90)
    forward(distance)


def circle2():
    circle(180)

def star(distance):
    for i in range(5):
        forward(distance)
        right(144)


def triangle(distance):
    forward(distance)
    left(120)
    forward(distance)
    left(120)
    forward(distance)
