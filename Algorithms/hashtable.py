# demonstrate hashtable usage


# TODO: create a hashtable all at once
hashtab1 = {i:[] for i in range(10)}
hashtab2 = {}

# TODO: create a hashtable progressively
for j in range(5):
    val = int(input(" input element number " + str(j)+ "     "))
    key = val%10
    if key in hashtab2:
        hashtab2[key].append(val)
    else:
        hashtab2[key] = [val]

# TODO: try to access a nonexistent key
try:
    print(hashtab2[1])
except:
    print("failed to access nonexistent key")

# TODO: replace an item
hashtab2[2] = [42]

# TODO: iterate the keys and values in the dictionary
for key in hashtab2:
    print(key, hashtab2[key])