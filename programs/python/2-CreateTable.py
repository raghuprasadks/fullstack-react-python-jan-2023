# -*- coding: utf-8 -*-
import sqlite3

conn = sqlite3.connect('ecommay2021.db')
print("Opened database successfully")

conn.execute('''CREATE TABLE if not exists COMPANY 
         (ID INT PRIMARY KEY     NOT NULL,
         NAME           TEXT    NOT NULL,
         AGE            INT     NOT NULL,
         ADDRESS        CHAR(50),
         SALARY         REAL)''')
         

print("Table created successfully")

conn.close()
