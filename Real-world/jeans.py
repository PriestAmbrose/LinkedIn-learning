
class jeans:
    def __init__(self, waist, length, color):
        self.waist = waist
        self.length = length
        self.color = color
        self.wearing = False

    def put_on(self):
        self.wearing = True

    def take_of(self):
        self.wearing = False

j = jeans(31,32,'blue')
i = j
print(id(i), id(j))
print(i is j)
words = "You're wearing that"
print(words, id(words))
