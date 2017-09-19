import json
data = input("Json file data:")
with open('data.json', 'w') as fh:
  json.dump(data, fh)
with open('data.json', 'r') as fh:
  data = json.load(fh)
  print(data)
