from flask import Flask, request, render_template, redirect, url_for
from pymongo import MongoClient

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/buy')
def buy():
    return render_template('buy.html')

@app.route('/buyers')
def buyers():
    return render_template('buyers.html')

@app.route('/connect')
def connect():
    return render_template('connect.html')

@app.route('/farmer1_buy')
def farmer1_buy():
    return render_template('farmer1_buy.html')

@app.route('/farmers')
def farmers():
    return render_template('farmers.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/marketplace')
def marketplace():
    return render_template('marketplace.html')

@app.route('/order')
def order():
    return render_template('order.html')

@app.route('/sell')
def sell():
    return render_template('sell.html')

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['myDatabase']

# Collections for each user type
farmers_collection = db['farmers']
buyers_collection = db['buyers']
cold_storages_collection = db['cold_storages']

# Handle user registration
@app.route('/register', methods=['POST'])
def register_user():
    user_type = request.form.get('user_type')
    name = request.form.get('name')
    email = request.form.get('email')
    password = request.form.get('password')
    gender = request.form.get('gender')
    state = request.form.get('state')
    district = request.form.get('district')
    pincode = request.form.get('pincode')
    identity = request.form.get('identity')

    user_data = {
        "name": name,
        "email": email,
        "password": password,  # In production, hash the password!
        "gender": gender,
        "state": state,
        "district": district,
        "pincode": pincode,
        "identity": identity
    }

    if user_type == 'farmer':
        farmers_collection.insert_one(user_data)
    elif user_type == 'buyer':
        buyers_collection.insert_one(user_data)
    elif user_type == 'cold_storage':
        cold_storages_collection.insert_one(user_data)

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)