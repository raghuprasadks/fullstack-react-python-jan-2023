import pymysql
# Open database connection
db = pymysql.connect(host="localhost",port=3306,user="root",passwd="kaushalya@2017",database="ammlfullstackdb")
# prepare a cursor object using cursor() method
cursor = db.cursor()
# Prepare SQL query to DELETE required records
sql = "DELETE FROM EMPLOYEE WHERE AGE > '%d'" % (20)
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Commit your changes in the database
   db.commit()
except:
   # Rollback in case there is any error
   db.rollback()
# disconnect from server
db.close()

# -*- coding: utf-8 -*-

