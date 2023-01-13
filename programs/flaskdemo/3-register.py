from flask import Flask, redirect, url_for, request
import sqlite3

app = Flask(__name__)


@app.route('/success/<name>')
def success(name):
    return 'welcome %s' % name


@app.route('/register', methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        mobile = request.form['mobile']
        location = request.form['location']
        country = request.form['country']
        password = request.form['password']
        print('name = ', name)
        print('email = ', email)
        print('mobile = ', mobile)
        print('location = ', location)
        print('country = ', country)
        print('password = ', password)

        conn = sqlite3.connect('demo.db')

        sql = """
        INSERT INTO registration  VALUES (?, ?,?,?,?,?)"""
        cur = conn.cursor()
        cur.execute(sql, (name, email, mobile, location, country, password))

        conn.commit()
        conn.close()

        return redirect(url_for('success', name=name))
    else:
        user = request.args.get('name')
        return redirect(url_for('success', name=user))


if __name__ == '__main__':
    app.run(debug=True)