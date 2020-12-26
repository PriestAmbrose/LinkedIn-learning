class Vehicle:
    def __init__(self,color):
        self.color = color
        self.gas =1

    def drive(self):
        if (self.gas==0):
            print("no gas")
        else:
            self.gas=self.gas-1
            print("goes vrooom")

        

class Car(Vehicle): #Inherits from Vehicle Class
    def window(self):
        print("open a window")

class Motorcycle(Vehicle):
    def put_on_helmet(self):
        print("Put on helmet")

class ECar(Car):
    def drive(self):
        if (self.gas==0):
            print("no electricity")
        else:
            self.gas=self.gas-1
            print("goes shhe")


my_car = Car('red')
my_motor = Motorcycle('black')
my_motor.put_on_helmet()
my_car.drive()

my_ecar = ECar('white')
my_ecar.drive()