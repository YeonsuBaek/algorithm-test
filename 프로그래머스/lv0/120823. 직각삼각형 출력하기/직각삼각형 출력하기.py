n = int(input())

for i in range(1, n + 1):
    stars = ''
    for j in range(1, i + 1):
        stars += '*'
    print(stars)