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
