# use a hashtable to filter out duplicate items


# define a set of items that we want to reduce duplicates
items = ["apple", "pear", "orange", "banana", "apple",
         "orange", "apple", "pear", "banana", "orange",
         "apple", "kiwi", "pear", "apple", "orange"]

# TODO: create a hashtable to perform a filter
filter = {}

# TODO: loop over each item and add to the hashtable
for item in items:
    filter[item]=""

# TODO: create a set from the resulting keys in the hashtable
s=set(filter)
print(s)