# -*- coding: utf-8 -*-
import pymysql
# Open database connection
db = pymysql.connect(host="localhost",port=3306,user="root",passwd="kaushalya@2017",database="ammlfullstackdb")
# prepare a cursor object using cursor() method
cursor = db.cursor()
# execute SQL query using execute() method.
cursor.execute("SELECT VERSION()")
# Fetch a single row using fetchone() method.
data = cursor.fetchone()
print ("Database version : %s " % data)
# disconnect from server
db.close()

