import json

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import datetime

from Employee import Employee

x =datetime.datetime.now()

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
    empjson = json.dumps(empnew.__dict__)
    employees.append(empnew)
    return emp, 201

@app.route('/listEmployee',methods=['GET'])
@cross_origin()
def listEmployee():
    jsonStr = json.dumps([obj.__dict__ for obj in employees])
    return jsonStr

if __name__=='__main__':
    app.run(debug=True)

