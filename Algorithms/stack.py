# try out the Python stack functions
from linklist import Node, LinkedList

class Stack(object):
    def __init__(self):
        self.list = LinkedList()

    def push(self, item):
        self.list.insert(item)
    
    def print(self):
        self.list.dump_list()
    
    def pop(self):
        self.list.deleteAt(0)
    


# TODO: create a new empty stack

stack = Stack()


# TODO: push items onto the stack


stack.push(15)
stack.push(38)
stack.push(49)
stack.push(13)


# TODO: print the stack contents

stack.print()


# TODO: pop an item off the stack

stack.pop()
print()
stack.print()