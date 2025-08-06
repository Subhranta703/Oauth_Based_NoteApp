# Full-Stack Personal Notes App

A full-stack web application for creating, viewing, and deleting personal notes. **Google OAuth** handles all authentication, keeping your notes private and secure.

---

## 🚀 Features

- **Secure Google login** using OAuth
- **Create, read, and delete** personal notes
- **View authenticated user's name and email**
- **Only authenticated users** can manage their own notes
- Notes are stored securely in **MongoDB Atlas**
- Clean, responsive UI with **Tailwind CSS**

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React, Tailwind CSS, Axios |
| **Backend** | Node.js, Express.js, Passport.js |
| **Authentication** | Google OAuth 2.0 |
| **Database** | MongoDB Atlas |
| **Sessions** | `express-session` + `connect-mongo` |

---

## ⚙️ How to Set Up

### 1. Backend

1.  Navigate to the `backend` directory.
    ```bash
    cd backend
    ```
2.  Install dependencies.
    ```bash
    npm install
    ```
3.  Create a **.env** file with your credentials.
    ```env
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    SESSION_SECRET=your_random_secret
    MONGO_URI=your_mongodb_connection_string
    FRONTEND_URL=http://localhost:3000
    ```
4.  Start the server.
    ```bash
    node server.js
    ```

### 2. Frontend

1.  Navigate to the `frontend` directory.
    ```bash
    cd frontend
    ```
2.  Install dependencies.
    ```bash
    npm install
    ```
3.  Start the app.
    ```bash
    npm start
    ```

### 3. Google OAuth

1.  Go to the **[Google Cloud Console](https://console.cloud.google.com/)** and create a new project.
2.  Under **APIs & Services > Credentials**, click **Create Credentials > OAuth Client ID**.
3.  Configure the following:
    - **Application type**: Web application
    - **Authorized JavaScript origins**: `http://localhost:3000`
    - **Authorized redirect URIs**: `http://localhost:5000/auth/google/callback`
4.  Copy your **Client ID** and **Client Secret** and add them to your `backend/.env` file.
