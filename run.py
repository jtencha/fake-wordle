from flask import Flask, render_template

app = Flask(__name__)
#not completely implemented just yet
@app.route('/' , methods = ['GET','POST'])
def landing():
    return render_template('index.html')

@app.route('/contact', methods = ['GET','POST'])
def contacting():
    return render_template('contact.html')

@app.route('/scoreboard', methods = ['GET', 'POST'])
def scoring():
    return render_template('scoreboard.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080)

