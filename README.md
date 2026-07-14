# 🛡️ Online Complaint Registration System

A **MERN Stack** web application designed to simplify the process of submitting, tracking, and managing complaints. The system provides secure user authentication, complaint registration, real-time status tracking, and efficient complaint management.

---

## 📖 Project Overview

The **Online Complaint Registration System** is a full-stack web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. It enables users to register, log in, submit complaints online, and track their complaint status. Complaint and user information are securely stored in MongoDB through a Node.js and Express.js backend.

---

## ✨ Features

### 👤 User Module

- User Registration
- User Login
- Secure Authentication
- User Details Stored in MongoDB

### 📝 Complaint Module

- Register New Complaint
- Store Complaint Details
- Track Complaint Status
- View Complaint Information

#### Complaint Details

- Full Name
- Mobile Number
- Email
- Complaint Type
- Subject
- Description
- Address
- Complaint Status

---

## 🛠️ Tech Stack

### Frontend

- React.js
- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Tools

- Visual Studio Code
- MongoDB Compass
- Thunder Client
- Git
- GitHub

---

# 📂 Project Structure

```text
OnlineComplaintRegistration/
│
├── client/
│   ├── public/
│   │
│   ├── src/
│   │
│   │   ├── components/
│   │   │   ├── Features.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProgressBar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── ComplaintDetails.jsx
│   │   │   ├── ContactUs.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── PreviewComplaint.jsx
│   │   │   ├── RegisterComplaint.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Success.jsx
│   │   │   └── TrackComplaint.jsx
│   │   │
│   │   ├── styles/
│   │   │   ├── AdminDashboard.css
│   │   │   ├── ComplaintDetails.css
│   │   │   ├── ContactUs.css
│   │   │   ├── Features.css
│   │   │   ├── Footer.css
│   │   │   ├── Hero.css
│   │   │   ├── Home.css
│   │   │   ├── Login.css
│   │   │   ├── Navbar.css
│   │   │   ├── PreviewComplaint.css
│   │   │   ├── RegisterComplaint.css
│   │   │   ├── Signup.css
│   │   │   ├── Success.css
│   │   │   └── TrackComplaint.css
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── package.json
│   └── README.md
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── adminController.js
│   │   ├── complaintController.js
│   │   └── userController.js
│   │
│   ├── models/
│   │   ├── Admin.js
│   │   ├── Complaint.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── complaintRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/OnlineComplaintRegistration.git
```

## 2. Navigate to the Project Folder

```bash
cd OnlineComplaintRegistration
```

## 3. Install Frontend Dependencies

```bash
cd client
npm install
```

## 4. Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# ▶️ Run the Backend

```bash
node server.js
```

Backend runs on:

```
http://localhost:5000
```

---

# ▶️ Run the Frontend

Open another terminal.

```bash
cd client
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/onlineComplaintDB
JWT_SECRET=mysecretkey
```

---

# 📡 API Endpoints

## User APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/users/signup` | Register User |
| POST | `/api/users/login` | Login User |

### Complaint APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/complaints/register` | Register Complaint |
| GET | `/api/complaints` | Get All Complaints |

### Admin APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/admin/signup` | Admin Registration |
| POST | `/api/admin/login` | Admin Login |

---

# 💾 Database

MongoDB Collections

- Users
- Admins
- Complaints

---

# 🧪 API Testing

The REST APIs were tested using **Thunder Client**.

### Tested APIs

- User Signup
- User Login
- Admin Signup
- Admin Login
- Register Complaint
- Get All Complaints

---

# 🎯 Project Objectives

- Develop an online complaint registration system.
- Simplify complaint submission.
- Enable online complaint tracking.
- Securely store complaint information.
- Learn MERN Stack development.
- Perform CRUD operations using MongoDB.

---

# 📚 Skills Used

- HTML5
- CSS3
- JavaScript
- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST APIs
- Git
- GitHub

---

# 👨‍💻 Team Members

| Name | Role |
|------|------|
| **Pachipala Venkata Vyshnavi** | Team Lead |
| Thanusha Guttha | Team Member |
| Swathi Pidugu | Team Member |
| Bushra Shaik | Team Member |
| Lakshmi Devi Seelam | Team Member |

---

# 📄 License

This project is developed for **educational purposes** as part of a college mini project.

---

## ⭐ If you like this project, don't forget to give it a Star!
