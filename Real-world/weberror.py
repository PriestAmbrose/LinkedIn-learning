import urllib.request

try:
    webpage =urllib.request.urlopen('http://google.com')
except:
    print('Could not access webpage!')
else:
    for line in webpage:
        print(line)