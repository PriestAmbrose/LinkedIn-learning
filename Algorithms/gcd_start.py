# Find the greatest common denominator of two numbers
# using Euclid's algorithm


def gcd(a, b):
    max_value = max(a,b)
    min_value = min(a,b)
    while (max_value % min_value != 0):
        temp = max_value
        max_value = min_value
        min_value = temp % max_value
    return min_value
    
        
# try out the function with a few examples
print(gcd(60, 96))  # should be 12
print(gcd(20, 8))   # should be 4
