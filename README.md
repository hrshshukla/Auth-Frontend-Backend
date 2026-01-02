
# Auth-Frontend-Backend

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub Stars](https://img.shields.io/github/stars/yourusername/auth-frontend-backend?style=social)
![GitHub Issues](https://img.shields.io/github/issues/yourusername/auth-frontend-backend)
![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-green.svg)
![React](https://img.shields.io/badge/react-%3E%3D18.0.0-blue.svg)

## 🚀 Overview

A **full-stack authentication system** built with modern JavaScript technologies. This project provides a complete solution for user registration, login, profile management, and session handling with JWT and Redis integration.

### Key Features
- ✅ **Full-stack authentication** with JWT tokens
- ✅ **Secure password hashing** using bcrypt
- ✅ **Redis integration** for session management
- ✅ **Modern UI** with React, Tailwind CSS, and Radix UI
- ✅ **Responsive design** for all devices
- ✅ **Environment-based configuration** for easy deployment
- ✅ **Comprehensive error handling** and validation

Perfect for developers looking to implement a robust authentication system in their applications.

---

## ✨ Tech Stack

### Backend
- **Language**: JavaScript (ES Modules)
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens)
- **Session Management**: Redis
- **Validation**: Express Validator
- **Utilities**: Dotenv, Morgan, Cookie Parser

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, Lucide Icons
- **State Management**: React Context
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **API Client**: Axios

### Dev Tools
- **Linting**: ESLint
- **Type Checking**: TypeScript (optional)
- **Testing**: Jest (not implemented but ready)

---

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)
- Redis (local or cloud instance)

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/auth-frontend-backend.git
   cd auth-frontend-backend
   ```

2. **Set up environment variables**:
   Create a `.env` file in both `backend` and `frontend` directories with the following variables:

   **Backend**:
   ```bash
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/authdb
   JWT_SECRET=your_jwt_secret_key
   REDIS_HOST=localhost
   REDIS_PORT=6379
   REDIS_PASSWORD=your_redis_password
   ```

   **Frontend**:
   ```bash
   VITE_API_URL=http://localhost:3000
   ```

3. **Install dependencies**:
   ```bash
   # In backend directory
   cd backend
   npm install

   # In frontend directory
   cd ../frontend
   npm install
   ```

4. **Start the development servers**:
   ```bash
   # In backend directory
   npm run dev

   # In frontend directory (in a new terminal)
   npm run dev
   ```

5. **Access the application**:
   Open your browser to `http://localhost:5173` (Vite default port)

---

## 🎯 Usage

### Backend API Endpoints

#### User Registration
```bash
POST /users/register
Headers: None
Body:
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

#### User Login
```bash
POST /users/login
Headers: None
Body:
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

#### User Profile (Authenticated)
```bash
GET /users/profile
Headers:
  Authorization: Bearer YOUR_JWT_TOKEN
```

#### User Logout
```bash
GET /users/logout
Headers:
  Authorization: Bearer YOUR_JWT_TOKEN
```

### Frontend Components

#### Login Page
```jsx
import { useState } from "react";
import axios from "./config/axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/login', {
        email,
        password
      });
      console.log("Login successful:", response.data);
      // Handle successful login (e.g., redirect, store token)
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};
```

#### Register Page
```jsx
import { useState } from "react";
import axios from "./config/axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/register', {
        email,
        password
      });
      console.log("Registration successful:", response.data);
      // Handle successful registration (e.g., redirect)
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
  );
};
```

---

## 📁 Project Structure

```
auth-frontend-backend/
├── backend/                  # Backend server
│   ├── app.js                # Main application file
│   ├── server.js             # Server entry point
│   ├── package.json          # Backend dependencies
│   ├── .env                  # Environment variables
│   ├── routes/               # API routes
│   ├── controllers/          # Route controllers
│   ├── models/               # Database models
│   ├── middleware/           # Middleware functions
│   ├── services/             # Business logic services
│   ├── db/                   # Database connection
│   └── postman_routes.json   # Postman collection for API testing
│
├── frontend/                 # Frontend application
│   ├── public/               # Static files
│   ├── src/                  # Source code
│   │   ├── components/       # Reusable components
│   │   ├── screens/          # Page components
│   │   ├── config/           # Configuration files
│   │   ├── lib/              # Utility functions
│   │   ├── assets/           # Static assets
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # React entry point
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.js        # Vite configuration
│   ├── .env                  # Environment variables
│   └── README.md             # Frontend-specific documentation
│
├── .gitignore                # Git ignore rules
└── README.md                 # This file
```

---

## 🔧 Configuration

### Environment Variables

| Variable          | Description                          | Default Value |
|-------------------|--------------------------------------|---------------|
| `PORT`            | Server port                          | 3000          |
| `MONGO_URI`       | MongoDB connection URI               |               |
| `JWT_SECRET`      | JWT secret key                       |               |
| `REDIS_HOST`      | Redis server host                    | localhost     |
| `REDIS_PORT`      | Redis server port                    | 6379          |
| `REDIS_PASSWORD`  | Redis server password                |               |
| `VITE_API_URL`    | Frontend API base URL                | http://localhost:3000 |

### Customization Options

1. **Tailwind CSS Themes**: Customize colors and styles in `frontend/src/index.css`
2. **API Endpoints**: Modify routes in `backend/routes/user.routes.js`
3. **Authentication Logic**: Adjust JWT settings in `backend/models/user.model.js`
4. **UI Components**: Extend components in `frontend/src/components/`

---