import sqlite3

conn = sqlite3.connect('ecommerceaprlnew.db')
print("Opened database successfully")

records = conn.execute("SELECT id, name, address, salary from COMPANY")
print(type(records))
for row in records:
   print("ID = ", row[0])
   print("NAME = ", row[1])
   print("ADDRESS = ", row[2])
   print("SALARY = ", row[3], "\n")

print("Operation done successfully")

print("Operation done successfully")


conn.close()# -*- coding: utf-8 -*-

