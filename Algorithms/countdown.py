# use recursion to implement a countdown counter


def countdown(x):
    if x == 0:
        print("stop!")
    else:
        print("...", x)
        countdown(x-1)
    return


countdown(5)
