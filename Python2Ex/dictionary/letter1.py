word = 'bananas'

counts = {}

for char in word:
    if char not in counts:
        counts[char] = 1
    else:
        counts[char] += 1

print(counts)
