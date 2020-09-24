#This is one way to do them

def longestWord():
    string = input('Enter sentence to find longest word\n')
    strSplit = string.split()
    strSplit.sort(key = len)
    print(strSplit[-1])


