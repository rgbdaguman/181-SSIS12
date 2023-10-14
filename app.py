from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home_page():

    return render_template("website.html")
    

if __name__ == '__main__':
    app.run (host = '0,0,0,0', debug = True)