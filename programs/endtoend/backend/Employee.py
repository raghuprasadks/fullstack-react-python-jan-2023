class Employee():

    def __init__(self,code,name,dept,desg,sal):
        self.code = code
        self.name = name
        self.dept = dept
        self.desg = desg
        self.sal = sal

    def info(self):
        return "Code :",self.code, "Name :",self.name, "Dept :",self.dept," Desg :",self.desg," Salary ",self.sal