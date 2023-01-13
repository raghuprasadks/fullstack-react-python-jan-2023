import pymysql
# Open database connection
db = pymysql.connect(host="localhost",port=3306,user="root",passwd="kaushalya@2017",database="ammlfullstackdb")

# prepare a cursor object using cursor() method
cursor = db.cursor()
# Prepare SQL query to INSERT a record into the database.
sql = "INSERT INTO EMPLOYEE(FIRST_NAME,LAST_NAME, AGE, SEX, INCOME)    VALUES ('%s', '%s', '%d', '%c', '%d' )" %('Windows', 'Ravi', 20, 'M', 12000)
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Commit your changes in the database
   db.commit()
except:
   # Rollback in case there is any error
   db.rollback()
# disconnect from server
db.close()# -*- coding: utf-8 -*-

