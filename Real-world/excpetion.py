class PlumbingError(Exception):
    def __init__(self,device, problem):
        self.device= device
        self.problem = problem
    
    def __str__str(self):
        return "The {} is {}!",format(self.device,self.problem)


try:
    raise PlumbingError('deshwasher', 'overload')
except PlumbingError as e:
    print("fix myself")
except:
    raise Exception('connection exceed capacity')