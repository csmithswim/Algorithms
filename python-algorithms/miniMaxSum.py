## Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

##Sort then sum the minimum range and the maximum range.

arr = [9,7,3,5,1]

arr.sort()

minSum = 0
maxSum = 0


for i in range(0, len(arr)-1):
    minSum += arr[i]

    

for i in range(1, len(arr)):
    maxSum += arr[i]

print(minSum,maxSum)



