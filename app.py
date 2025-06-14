from flask import Flask, request, jsonify, send_from_directory
from flask_mail import Mail, Message, Connection
import os
from dotenv import load_dotenv

load_dotenv() # Load environment variables from .env file

# Configure Flask to serve static files from the current directory
app = Flask(__name__, static_folder=os.getcwd(), static_url_path='')

# Print the static folder path to verify
print(f"Serving static files from: {app.static_folder}")

# Flask-Mail configuration
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS', 'True').lower() == 'true'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER')

mail = Mail(app)

# Route to serve the main index.html file
@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    try:
        data = request.form
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')

        if not all([name, email, subject, message]):
            return jsonify({'success': False, 'message': 'All fields are required.'}), 400

        msg = Message(
            subject=f"Contact Form: {subject}",
            sender=app.config['MAIL_DEFAULT_SENDER'],
            recipients=['repanayakobu@gmail.com'], # Your email address
            body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"
        )
        
        # Explicitly open and close connection to get more detailed errors
        with mail.connect() as conn:
            conn.send(msg)

        return jsonify({'success': True, 'message': 'Your message has been sent successfully!'})
    except Exception as e:
        app.logger.error(f"Error sending email: {e}", exc_info=True)
        return jsonify({'success': False, 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000) 