import json

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import datetime
import pymysql

from Employee import Employee

x =datetime.datetime.now()
db = pymysql.connect(host="localhost",port=3306,user="root",passwd="kaushalya@2017",database="ammlfullstackdb")


app=Flask(__name__)
CORS(app)
employees = []

@app.route('/data')
@cross_origin()
def get_time():
    return{
        "Name":"ravi",
        "Age":20,
        "Date":x,
        "Programming":"Python"
    }
@app.route('/addEmployee',methods=['POST'])
@cross_origin()
def addEmployee():
    emp = request.get_json()
    print(emp)

    empnew = Employee(emp['code'],emp['name'],emp['desg'],emp['dept'],emp['sal'])
    employees.append(empnew)
    '''
    empjson = json.dumps(empnew.__dict__)
    employees.append(empnew)
    '''
    cursor = db.cursor()
    # Prepare SQL query to INSERT a record into the database.
    sql = "INSERT INTO EMPLOYEE(name,dept, desg, sal)    VALUES ('%s', '%s', '%s', '%d' )" % (
     emp['name'],emp['name'], emp['desg'], int(emp['sal']))
    try:
        # Execute the SQL command
        cursor.execute(sql)
        # Commit your changes in the database
        db.commit()
    except:
        # Rollback in case there is any error
        db.rollback()
    # disconnect from server
    db.close()  # -*- coding: utf-8 -*-

    return emp, 201

@app.route('/listEmployee',methods=['GET'])
@cross_origin()
def listEmployee():

    cursor = db.cursor(pymysql.cursors.DictCursor)
    cursor.execute("select * from employee")
    jsonStr = cursor.fetchall()
    print("result")
    print(jsonStr)
    #jsonStr = json.dumps([obj.__dict__ for obj in employees])
    jsonStrUpd = json.dumps(jsonStr)
    return jsonStrUpd

if __name__=='__main__':
    app.run(debug=True)

