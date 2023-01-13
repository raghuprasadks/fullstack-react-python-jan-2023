from flask import Flask
app = Flask(__name__)
@app.route("/")
def Hello():
    return "Welcome to Flask"
@app.route("/learning")
def learning():
    return "I am learning Flask"

if __name__=='__main__':
    app.run(debug=True)
