from flask import Flask, jsonify
from extensions import db, migrate, jwt

def create_app():
    app = Flask(__name__)

    # Configuración básica
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://donbeta:Cb2728026@localhost:5432/arena_hub'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY'] = 'super-secret-key'  # Cambia esto en producción

    # Inicializar extensiones
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    @app.route('/')
    def home():
        return jsonify({"message": "Arena-Hub backend funcionando."})

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)