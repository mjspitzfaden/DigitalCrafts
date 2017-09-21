class Person:
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone

    def greet(self, other_person):
        print ('Hello {}, I am {}!'.format(other_person.name, self.name))

#Question # 1
sonny = Person('Sonny', 'sonny@hotmail.com', '438-485-4948')

#Question # 2
jorden = Person('Jorden', 'jorden@hotmail.com', '495-586-3456')

#Question # 3
sonny.greet(jorden)

# Question # 4
jorden.greet(sonny)

# Question # 5
print(sonny.email + " " + sonny.phone)

# Question # 6
print(jorden.email + " " + jorden.phone)
