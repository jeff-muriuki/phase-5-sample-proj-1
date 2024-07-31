from faker import Faker
from app import app, db
from models import User, Message, EducationResource

fake = Faker()

with app.app_context():
    db.create_all()

    # Create users
    users = []
    for _ in range(10):
        user = User(username=fake.user_name(), email=fake.email())
        users.append(user)
        db.session.add(user)

    # Create education resources
    for _ in range(10):
        resource = EducationResource(title=fake.sentence(), description=fake.text())
        db.session.add(resource)

    db.session.commit()

    # Create messages
    for _ in range(20):
        message = Message(
            sender_id=fake.random_element(users).id,
            recipient_id=fake.random_element(users).id,
            content=fake.text()
        )
        db.session.add(message)

    db.session.commit()
