import mysql.connector
from mysql.connector import Error
from mysql.connector import errorcode
try:
   connection = mysql.connector.connect(host='localhost',
                             database='pythondb',
                             user='pythonuser',
                             password='password')

   records_to_insert = [('Raghu','Prasad',45,'M', 10000) ,
                         ('Ramya','Prasad',40,'F', 12000),
                         ('Vikas','Ram',24,'M', 12600) ]


   sql_insert_query = "INSERT INTO EMPLOYEE (FIRST_NAME,LAST_NAME, AGE, SEX, INCOME)  VALUES ('%s', '%s', '%d', '%c', '%d')" 
      
   #VALUES (%s,%s,%s,%s)

   cursor = connection.cursor(prepared=True)
   #used executemany to insert 3 rows
   result  = cursor.executemany(sql_insert_query, records_to_insert)
   connection.commit()
   print (cursor.rowcount, "Record inserted successfully into python_users table")

except mysql.connector.Error as error :
    print("Failed inserting record into python_users table {}".format(error))

finally:
    #closing database connection.
    if(connection.is_connected()):
        cursor.close()
        connection.close()
        print("connection is closed")