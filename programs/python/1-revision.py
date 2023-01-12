'''
data types - str,int,float,bool
list,tuple,dictionary,set
'''
coursename ='python'
print('course name is ',coursename)
print('course name data type ',type(coursename))
amt = 100.0
print('amt data type ',type(amt))
isActive =True
print('isActive data type ',type(isActive))
marks = [22,21,18,15]
print('marks data type ',type(marks))
days = ('Mon','Tue','Wed')
print('days data type ',type(days))

students={101:'ravi',102:'Abdul',103:'Joseph'}
print('students data type ',type(students))

evennumbs = {2,4,4,6,8}
print('evennumbs  ',evennumbs)

print('evennumbs data type ',type(evennumbs))

def EvenOrOdd(num):
    if (num%2==0):
        print("even")
    else:
        print("odd")

num = int(input("Enter a number"))
EvenOrOdd(num)

for n in range(10):
    print(n)

for n in range(2,21,2):
    print(n)

for n in range(20, 1, -2):
    print(n)


