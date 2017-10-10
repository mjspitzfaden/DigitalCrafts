height = int(input("What is the hight of your triangle "))

for i in range(height):
    print((' ' * (height - i - 1) + '*' * (2 * i + 1)))
