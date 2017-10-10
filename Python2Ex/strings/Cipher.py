import string

#6 Cipher 13
#decipher = "lbh zhfg hayrnea jung lbh unir yrnearq"
decipher = "fun"
lowercase = string.ascii_lowercase
offset = 13
result = []
for i in decipher:
    ascii_code = ord(i)
    result[i] = int(ascii_code + offset)
