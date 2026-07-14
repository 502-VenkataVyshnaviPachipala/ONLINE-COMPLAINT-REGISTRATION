# ONLINE-COMPLAINT-REGISTRATION
A MERN stack platform designed to streamline submitting, tracking, and resolving complaints. Features include real-time progress tracking, automatic notifications, intelligent routing, and secure data management.

🛡️ Online Complaint Registration System
📖 Project Overview
The Online Complaint Registration System is a full-stack web application developed using the MERN stack. It allows users to create an account, log in, and register complaints online. The system stores user and complaint information securely in MongoDB through a Node.js and Express.js backend.
✨ Features
👤 User Module
User Registration
User Login
User details stored securely in MongoDB
📝 Complaint Module
Register New Complaint
Store Complaint Details in MongoDB
Complaint fields include:
Full Name
Mobile Number
Email
Complaint Type
Subject
Description
Address
Complaint Status
🛠️ Tech Stack
Frontend
React.js
HTML
CSS
JavaScript
Backend
Node.js
Express.js
Database
MongoDB
Mongoose
Tools
Visual Studio Code
MongoDB Compass
Thunder Client
GitHub
📂 Project Structure
OnlineComplaintRegistration/
│
├── client/
│   ├── public/
│   │
│   ├── src/
│   │   │
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
│   ├── package-lock.json
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
│   ├── package-lock.json
│   └── server.js
│
├── package.json
├── package-lock.json
└── README.md
---
# ⚙️ Installation
### Clone the Repository
```bash
git clone https://github.com/your-username/OnlineComplaintRegistration.git
Navigate to the Project Folder
cd OnlineComplaintRegistration
Install Frontend Dependencies
cd client
npm install
Install Backend Dependencies
cd ../server
npm install
▶️ Run the Backend
cd server
node server.js
Backend runs on:

http://localhost:5000
▶️ Run the Frontend
cd client
npm start
Frontend runs on:

http://localhost:3000
🔐 Environment Variables
Create a .env file inside the server folder.

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/onlineComplaintDB
JWT_SECRET=mysecretkey
📡 API Endpoints
User APIs
Method	Endpoint	Description
POST	/api/users/signup	Register User
POST	/api/users/login	Login User
Complaint APIs
Method	Endpoint	Description
POST	/api/complaints/register	Register Complaint
💾 Database
The application uses MongoDB as the database.

Collections
Users
admins
Complaints
🧪 API Testing
The backend APIs were tested using Thunder Client. Tested APIs:

User Signup
User Login
admin signup
admin login
Complaint Registration
Complaint all
👨‍💻 Team Members
Name	Role
Venkata Vyshnavi Pachipala	Team Lead
Thanusha Guttha	Member
Swathi Pidugu	Member
Bushra Shaik	Member
Lakshmi Devi Seelam	Member
🎯 Project Objectives
Develop an online complaint registration system.
Simplify complaint submission.
Store complaint details securely.
Learn full-stack web development using the MERN stack.
Perform CRUD operations with MongoDB.
📚 Skills Used
HTML
CSS
JavaScript
React.js
Node.js
Express.js
MongoDB
MongoDB Compass
REST API Development
GitHub
📄 License
This project is developed for educational purposes as part of a college mini project.
