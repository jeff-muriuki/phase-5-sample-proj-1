from flask import Flask, request, jsonify
from flask_restful import Resource


from models import User
from config import app, db, api 

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


class Signup(Resource):
    def post(self):
        json=request.get_json()
        user= User(
            username=json['username'],
            email= json['email'],
            password= json['password']
        )
        db.session.add(user)
        db.session.commit()
        return user.as_dict(), 201
        
api.add_resource(Signup, '/signup', endpoint='signup')

if __name__ == '__main__':
    app.run(debug=True)
