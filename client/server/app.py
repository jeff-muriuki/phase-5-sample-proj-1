from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, User, Message, EducationResource
import config

app = Flask(__name__)
app.config.from_object(config.Config)
db.init_app(app)
migrate = Migrate(app, db)
CORS(app)

# Routes
@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(**data)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.as_dict()), 201

@app.route('/messages', methods=['POST'])
def send_message():
    data = request.get_json()
    new_message = Message(**data)
    db.session.add(new_message)
    db.session.commit()
    return jsonify(new_message.as_dict()), 201

@app.route('/education-resources', methods=['GET'])
def get_resources():
    resources = EducationResource.query.all()
    return jsonify([resource.as_dict() for resource in resources]), 200

if __name__ == '__main__':
    app.run(debug=True)
