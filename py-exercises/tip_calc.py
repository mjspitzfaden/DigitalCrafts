total = input("What is the bill amount? ")
service = input("What is the level of service? ")
if (service == "good"):
    tipAmount = float(total) * float(.20)
    print("tip amount " + "{:.2f}".format(tipAmount))
    totalAmount = float(total) + float(tipAmount)
    print("Total amount " + "{:.2f}".format(totalAmount))
if (service == "fair"):
    tipAmount = float(total) * float(.15)
    print("tip amount " + "{:.2f}".format(tipAmount))
    totalAmount = float(total) + float(tipAmount)
    print("Total amount " + "{:.2f}".format(totalAmount))
if (service == "bad"):
    tipAmount = float(total) * float(.10)
    print("tip amount " + "{:.2f}".format(tipAmount))
    totalAmount = float(total) + float(tipAmount)
    print("Total amount " + "{:.2f}".format(totalAmount))
