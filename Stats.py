import statistics
b = {1:7,2:9,3:12,4:4}
count = 0;
for i in b.keys():
    d = i*b[i]
    count+=d
print(count/28)
list_int = []    
for i in b.keys():
    list_int.append([i]*b[i])
a= [i for j in list_int for i in j]    
print(statistics.stdev(a))
f = []
for i in b.keys():
    f.append(round(b[i]/28,5))
           
print(f)    

#program is used to determine mean and stdev using a dict
# ex: Question "Which ice cream do you like most: Chocolate, Mint, Vanilla, Strawberry" Let Chocolate = 1, Mint = 2, Vanilla = 3, Strawberry = 4
# Chocolate had 7 responces, Mint had 9 responces,  Vanilla had 12 reponces, Strawberry had 4 responces.
# dict_responces = {1:7,2:5,3:12,4:4}
# Mean = 2.75 Stdev = 0.9791166196315481, meaning that on average people liked Mint and Vanilla the most
