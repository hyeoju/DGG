from flask import Flask, request, render_template, redirect, url_for
import flask_cors

app = Flask(__name__)
x
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/home')
def home():
    return 'Welcome to Home Page!'

if __name__ == '__main__':
    app.run(debug=True)
