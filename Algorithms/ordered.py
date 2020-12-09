# searching for an item in an ordered list
# this technique uses a binary search


items = [6, 8, 19, 20, 23, 41, 49, 53, 56, 87]

def binarysearch(item, itemlist):
    # get the list size
    listsize = len(itemlist) - 1
    # start at the two ends of the list
    lowerIdx = 0
    upperIdx = listsize

    while lowerIdx <= upperIdx:
        # TODO: calculate the middle point
        midpoint = (upperIdx+lowerIdx)//2
        print ("midpoint ", midpoint, "   itemlist ", itemlist[midpoint])
        # TODO: if item is found, return the index
        if itemlist[midpoint]==item:
            return midpoint
        # TODO: otherwise get the next midpoint
        if item > itemlist[midpoint]:
            lowerIdx=midpoint+1
        else:
            upperIdx=midpoint-1

    if lowerIdx > upperIdx:
        return None


print(binarysearch(23, items))
print(binarysearch(87, items))
print(binarysearch(250, items))
