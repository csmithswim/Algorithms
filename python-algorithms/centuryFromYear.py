# Given a year, return the century it is in, i.e. for year = 1905, output should be 20.


def centuryFromYear(year):
    if year <= 100:
        print (1)
    elif year % 100 == 0:
        print (year // 100)
    else:
        print(year // 100 + 1)


centuryFromYear(2006)







