# REPANA YAKOBU - Library Professional Portfolio

This is a professional portfolio website for Repana Yakobu, a Library Science Expert. The website showcases experience, education, skills, achievements, projects, and contact information.

## Features

*   **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile).
*   **Dynamic Content Loading:** Sections are loaded asynchronously for a smoother user experience.
*   **Interactive Elements:** Stylish buttons, animated icons in the Experience section, and dynamic copyright year.
*   **Direct Contact Form (Python Flask Backend):** Allows visitors to send emails directly without opening their email client.

## Project Structure

```
Repana Yakubo/
├── assets/               # Contains images and other static assets
├── sections/             # Contains HTML for various sections (e.g., about, experience, contact)
├── style.css             # Main stylesheet for the website
├── index.html            # Main entry point of the website
├── app.py                # Python Flask backend for handling contact form submissions
├── requirements.txt      # Lists Python dependencies
├── .env.example          # Example environment variables file
└── README.md             # This file
```

## Setup and Running the Application

To run this portfolio website locally, you need to have Python installed on your system.

### 1. Clone the Repository (if applicable)

If you downloaded the project as a ZIP, skip this step. Otherwise, clone the repository to your local machine:

```bash
git clone <repository_url>
cd Repana Yakubo
```

### 2. Install Python Dependencies

Navigate to the root directory of the project (`C:\Repana Yakubo`) in your terminal or command prompt and install the required Python packages:

```bash
pip install -r requirements.txt
```

### 3. Configure Environment Variables (.env file)

The `app.py` Flask application requires email credentials to send messages. For security, these are stored in an environment file.

1.  Create a new file named `.env` in the root directory of your project (`C:\Repana Yakubo`).
2.  Copy the content from `.env.example` into your new `.env` file.
3.  **Replace the placeholder values** with your actual email server details and credentials. Pay special attention to `MAIL_PASSWORD`.

    **Example `.env` content:**
    ```env
    MAIL_SERVER=smtp.gmail.com
    MAIL_PORT=587
    MAIL_USE_TLS=True
    MAIL_USERNAME=your_email@gmail.com
    MAIL_PASSWORD=your_app_password
    MAIL_DEFAULT_SENDER=your_email@gmail.com
    ```

    **Important Notes on `MAIL_PASSWORD` (especially for Gmail):**

    *   **For Gmail:** If you're using Gmail, you'll most likely need to generate an **App Password** from your Google Account Security settings (if you have 2-Factor Authentication enabled). Your regular Gmail password will not work. Search for "Gmail App Passwords" if you are unsure how to generate one.
    *   For other providers, consult their documentation for SMTP settings and whether they require app-specific passwords.

### 4. Run the Flask Application

With your `.env` file configured, start the Flask server from the root directory of your project:

```bash
python app.py
```

You should see output indicating that the server is running on `http://127.0.0.1:5000`.

### 5. View the Website

Open your web browser and navigate to:

```
http://127.0.0.1:5000/
```

The website should now be fully functional, including the direct email sending feature from the contact form.

## Contact

For any questions or further inquiries, please reach out to Repana Yakobu via the contact form on the website. 