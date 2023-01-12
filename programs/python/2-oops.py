class Employee():
    code=0
    name = ''
    dept = ''
    sal = 0

    def info(self):
        return "Code ",self.code, " Name : ",self.name

emp1 = Employee()
emp1.name="Ravi"
emp1.code = 1
emp1.dept="AIML"
emp1.sal = 73737
info = emp1.info()
print(info)


class Employee():
    code=0
    name = ''
    dept = ''
    sal = 0

    def __init__(self,code,name,dept,sal,aadhar=None):
        self.code = code
        self.name = name
        self.dept = dept
        self.sal = sal

    def info(self):
        return "Code ",self.code, " Name : ",self.name

emp1 = Employee(1,'suresh','AIML',39393)
emp2 = Employee(2,'ramesh','AIML',49393)
emp3 = Employee(3,'rakesh','AIML',59393)

info = emp3.info()

print(info)

emplist = []
emplist.append(emp1)
emplist.append(emp2)
emplist.append(emp3)
print("display employees whose salary is greater than 40k")
for emp in emplist:
    #print(emp.info())
    if(emp.sal > 40000):
        print(emp.info())



