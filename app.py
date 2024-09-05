from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/buyers')
def buyers():
    return render_template('buyers.html')

@app.route('/connect')
def connect():
    return render_template('connect.html')

@app.route('/farmer1_buy')
def farmer1_buy():
    return render_template('farmer1_buy.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/marketplace')
def marketplace():
    return render_template('marketplace.html')

@app.route('/order')
def order():
    return render_template('order.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/sell')
def sell():
    return render_template('sell.html')

if __name__ == '__main__':
    app.run(debug=True)
