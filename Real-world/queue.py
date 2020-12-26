import queue

q = queue.Queue(1)
q.put('bag1')
q.put('bag2')
print(q.empty())

print(q.get())
print(q.empty())
q.get(False)