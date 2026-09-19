import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from database import db
from models import Lesson, Announcement
from flask_socketio import SocketIO

BASE_DIR = os.path.dirname(__file__)
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'uploads')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(BASE_DIR, 'rural_ed.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)

socketio = SocketIO(app, cors_allowed_origins='*', async_mode='threading')

db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/api/ping')
def ping():
    return jsonify({'status': 'ok'})

# ------------------ Lessons ------------------
@app.route('/api/lessons', methods=['GET'])
def get_lessons():
    lessons = Lesson.query.order_by(Lesson.created_at.desc()).all()
    return jsonify([l.to_dict() for l in lessons])

@app.route('/api/lessons', methods=['POST'])
def create_lesson():
    # Try both JSON and FormData
    if request.is_json:
        data = request.get_json() or {}
        title = data.get("title", "").strip()
        content = data.get("content", "").strip()
        file = None
        filename = None
    else:
        title = request.form.get('title', '').strip()
        content = request.form.get('content', '').strip()
        file = request.files.get('file')
        filename = None
        if file:
            filename = file.filename
            dest = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(dest)

    # Graceful defaults
    title = title if title else "No Title"
    content = content if content else "No Content"

    lesson = Lesson(title=title, content=content, filename=filename)
    db.session.add(lesson)
    db.session.commit()
    return jsonify(lesson.to_dict()), 201

@app.route('/uploads/<path:filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename, as_attachment=True)

# ------------------ Announcements ------------------
@app.route('/api/announcements', methods=['GET', 'POST'])
def announcements():
    if request.method == 'GET':
        anns = Announcement.query.order_by(Announcement.created_at.desc()).limit(50).all()
        return jsonify([a.to_dict() for a in anns])

    data = request.get_json() or {}
    msg = data.get('message')
    if not msg:
        return jsonify({'error': 'message required'}), 400

    ann = Announcement(message=msg)
    db.session.add(ann)
    db.session.commit()
    socketio.emit('announcement', ann.to_dict(), broadcast=True)
    return jsonify(ann.to_dict()), 201

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000) 






