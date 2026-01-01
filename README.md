PR_11_Employee_Management_System
📘 Employee Management System (EMS)
📌 Project Overview

The Employee Management System (EMS) is a web-based application developed using Node.js, Express.js, MongoDB, and EJS.
The system helps manage employees, managers, and tasks with role-based authentication and authorization.

It follows the MVC (Model–View–Controller) architecture and ensures secure access using middleware.

🚀 Features

User Authentication (Login)

Role-Based Authorization (Admin / Manager / Employee)

Employee (User) Management

Manager Management

Task Assignment and Tracking

Secure Routes using Middleware

MVC Architecture

EJS Templating for User Interface

🛠️ Technology Stack
Layer	Technology
Backend	Node.js, Express.js
Frontend	EJS, HTML, CSS
Database	MongoDB
Authentication	Custom Middleware
HTTP Client	Axios
Environment	dotenv
📁 Project Folder Structure
PR_11_EMPLOYEE_MANAGEMENT
│
├── configs

│   ├── axiosInstance.js

│   ├── database.js

│   └── dotenv.js
│
├── controllers

│   ├── client.controller.js

│   ├── task.controller.js

│   └── user.controller.js
│
├── middlewares

│   ├── userAuth.middleware.js

│   └── userRole.middleware.js
│
├── models

│   ├── task.model.js

│   └── user.model.js
│
├── public
│
├── routers

│   ├── client.route.js

│   ├── task.route.js

│   ├── user.route.js
│   └── index.js
│
├── views

│   ├── pages

│   │   ├── addManager.ejs

│   │   ├── addTask.ejs

│   │   ├── login.ejs

│   │   ├── viewManager.ejs

│   │   └── viewTask.ejs
│   │
│   └── partials

│       ├── header.ejs

│       ├── footer.ejs

│       └── index.ejs
│
├── .env

├── .gitignore

├── index.js

├── package.json

└── package-lock.json

⚙️ Configuration Files
database.js

Establishes connection with MongoDB.

dotenv.js

Loads environment variables from the .env file.

axiosInstance.js

Configures Axios for API requests.

🧠 Models
user.model.js

Defines the User schema with the following fields:

Name

Email

Password

Role (Admin / Manager / Employee)

task.model.js

Defines the Task schema with:

Task Name

Description

Assigned Employee

Status

🎯 Controllers
user.controller.js

Handles:

User Registration

User Login

Manager Creation

Viewing Employees

task.controller.js

Handles:

Task Creation

Task Assignment

Viewing Tasks

client.controller.js

Handles:

Client-side page rendering using EJS

🛡️ Middlewares
userAuth.middleware.js

Protects routes by checking user login status.

userRole.middleware.js

Restricts access based on user roles (Admin / Manager / Employee).

🛣️ Routes
user.route.js

Login

Add Manager

View Users

task.route.js

Create Task

Assign Task

View Tasks

client.route.js

Page rendering routes

index.js

Central route handler

🖼️ Views
Pages
Page	Description
login.ejs	User login page
addManager.ejs	Add manager page
addTask.ejs	Create new task
viewManager.ejs	View managers
viewTask.ejs	View assigned tasks
Partials

header.ejs – Navigation bar

footer.ejs – Footer layout

index.ejs – Base layout

🔐 Authentication & Authorization

Login handled using middleware-based authentication

Protected routes using userAuth.middleware.js

Role-based access control using userRole.middleware.js

🌱 Environment Variables (.env)

Example:

PORT=3000
MONGO_URI=mongodb://localhost:27017/ems

▶️ How to Run the Project
1️⃣ Install Dependencies
npm install

2️⃣ Start MongoDB
mongod

3️⃣ Run the Application
npm start

4️⃣ Open in Browser
http://localhost:3000

📌 Future Enhancements

Password Encryption using bcrypt

Task Status Updates

Pagination and Search

Admin Dashboard

REST API Documentation

👨‍💻 Author

Drashti Bilimoria

📧 Email: drashtibilimoria@gmail.com

🔑 Admin Login Credentials (for testing):

Email: drashtibilimoria@gmail.com

Password: 1234
