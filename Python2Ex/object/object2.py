class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
    def print_info(self):
        print(self.make + " " + self.model + " " + self.year)


class Person:

    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greeting_count = 0

    def greet(self, other_person):
        print ('Hello {}, I am {}!'.format(other_person.name, self.name))
        self.greeting_count = self.greeting_count + 1
    def print_contact_info(self):
        print("Sonny's email: " + self.email + " , Sonny's phone number: " + self.phone)
    def num_friends(self):
        return len(self.friends)
    def add_friend(self, other_person):
        self.friends.append(other_person)
    def __str__(self):
       return 'Person: {} {} {}'.format(self.name, self.email, self.phone)
    #def num_unique_people_greeted(self):
    #    return number
        

#Question # 1
sonny = Person('Sonny', 'sonny@hotmail.com', '438-485-4948')

#Question # 2
jordan = Person('Jordan', 'jordan@hotmail.com', '495-586-3456')

#Question # 3
#sonny.greet(jordan)

# Question # 4
#jordan.greet(sonny)

# Question # 5
print(sonny.email + " " + sonny.phone)

# Question # 6
print(jordan.email + " " + jordan.phone)

# Question # 1
car = Vehicle('Nissan', 'Leaf', '2015')

# Question # 2
print(car.make, car.model, car.year)

# Question # 3
car.print_info()

# Question # 4
sonny.print_contact_info()

# Question # 5
sonny.friends.append(jordan)
 # Question # 6
jordan.friends.append(sonny)
sonny.friends.append(jordan)
# Question # 7
print(len(jordan.friends))
# Queston # 8
jordan.add_friend(sonny)

#Question # 9
print(jordan.num_friends())

# Question # 10
print(sonny.greeting_count)
sonny.greet(jordan)
print(sonny.greeting_count)
sonny.greet(jordan)
print(sonny.greeting_count)

print(jordan)
