phonebook_dict = {
  'Alice': '703-493-1834',
  'Bob': '857-384-1234',
  'Elizabeth': '484-584-2923'
}

print("Elizabeth's phone number: ")
print(phonebook_dict['Elizabeth'])

phonebook_dict.update({'Kareem': '938-489-1234'})
print (phonebook_dict)

del phonebook_dict['Alice']
print("Alice phone number should be deleted")
print (phonebook_dict)

phonebook_dict['Bob'] = '968-345-2345'
print("Bobs new number should be 968-345-2345:")
print(phonebook_dict['Bob'])

print (phonebook_dict)
