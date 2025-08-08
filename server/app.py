from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager

app = Flask(__name__)

# Configuración básica
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://usuario:password@localhost:5432/arena_hub'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'super-secret-key'  # Cambia esto en producción

db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)

@app.route('/')
def home():
    return jsonify({"message": "Arena-Hub backend funcionando."})

if __name__ == '__main__':
    app.run(debug=True)