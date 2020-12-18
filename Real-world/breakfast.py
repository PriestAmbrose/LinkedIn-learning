cheese = 'cheddar'

def make_omelette (ingredient):
    return 'a {} omelette'.format(ingredient)

#print(make_omelette(input("what omelette? ")))

def fancy_omeletee(*ingredient):
    global cheese
    cheese = "swiss"
    return "a omelette with {} ingredients".format(len(ingredient))

#print(fancy_omeletee('cheese', 'bacon', 'something'))
print(cheese)