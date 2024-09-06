from flask import Flask, flash, request, render_template, redirect, url_for
from pymongo import MongoClient
import os

app = Flask(__name__)

# Set the secret key for session management
app.secret_key = os.urandom(24)

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/contact')
def contact():
    return render_template('contact.html')

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

@app.route('/register', methods=['POST'])
def register_user():
    if request.method == 'POST':
        user_type = request.form.get('user_type')
        name = request.form.get('name')
        email = request.form.get('email')
        password = request.form.get('password')  # In production, hash this
        gender = request.form.get('gender')
        state = request.form.get('state')
        district = request.form.get('district')
        pincode = request.form.get('pincode')
        identity = request.form.get('identity')

        user_data = {
            "name": name,
            "email": email,
            "password": password,  # Remember to hash the password in production
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

        flash(f"Hi {name}, your registration was successful!", 'success')
        return redirect(url_for('index'))

    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login_user():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        user_type = request.form.get('user_type')

        # Check login credentials based on user type
        if user_type == 'farmer':
            user = farmers_collection.find_one({"email": email, "password": password})
        elif user_type == 'buyer':
            user = buyers_collection.find_one({"email": email, "password": password})
        elif user_type == 'cold_storage':
            user = cold_storages_collection.find_one({"email": email, "password": password})
        else:
            flash("Invalid user type selected.", 'error')
            return redirect(url_for('login'))

        if user:
            flash(f"Hi {user['name']}, welcome back!", 'success')
            return redirect(url_for('index'))
        else:
            flash("Invalid email or password. Please try again.", 'error')

    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
