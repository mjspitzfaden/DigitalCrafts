from characters.base import CharactersBase

class WereWolf (CharactersBase):
    def __init__ (self, name):
        super().__init__(name)
        self.health = 10

    def greet (self):
        super().greet()
        print("AAAAAAAAAA!")
