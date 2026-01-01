# PR_11_Employee_Management_System

Employee Management System (EMS)
📌 Project Overview

The Employee Management System is a web-based application built with Node.js, Express.js, MongoDB, and EJS.
It helps manage employees (users), managers, and tasks with role-based access control and authentication.

🚀 Features

User authentication (Login)

Role-based authorization (Admin / Manager / Employee)

Employee (User) management

Manager management

Task assignment and tracking

Secure routes using middleware

MVC architecture

EJS templating for UI

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

⚙️ Configuration Files (configs)
database.js

Connects the application to MongoDB.

dotenv.js

Loads environment variables from .env.

axiosInstance.js

Configures Axios for API calls.

🧠 Models (models)
user.model.js

Defines the User schema:

Name

Email

Password

Role (Admin / Manager / Employee)

task.model.js

Defines the Task schema:

Task name

Description

Assigned employee

Status

🎯 Controllers (controllers)
user.controller.js

User registration

Login handling

Manager creation

Viewing employees

task.controller.js

Create task

Assign task

View tasks

client.controller.js

Handles client-side page rendering

🛡️ Middlewares (middlewares)
userAuth.middleware.js

Protects routes by checking login status

userRole.middleware.js

Restricts access based on user roles

🛣️ Routes (routers)
user.route.js

User-related APIs (login, add manager, view users)

task.route.js

Task creation and management routes

client.route.js

Page rendering routes

index.js

Central route manager

🖼️ Views (views)
Pages
Page	Description
login.ejs	User login
addManager.ejs	Add manager
addTask.ejs	Create new task
viewManager.ejs	View managers
viewTask.ejs	View assigned tasks
Partials

header.ejs – Navigation bar

footer.ejs – Footer layout

index.ejs – Base layout

🔐 Authentication & Authorization

Login handled via session or token (middleware-based)

Protected routes using userAuth.middleware.js

Role validation using userRole.middleware.js

🌱 Environment Variables (.env)

Example:

PORT=3000
MONGO_URI=mongodb://localhost:27017/ems

▶️ How to Run the Project

Install dependencies

npm install


Start MongoDB

mongod


Run the application

npm start


Open in browser

http://localhost:3000

📌 Future Enhancements

Password encryption (bcrypt)

Task status updates

Pagination & search

Admin dashboard

REST API documentation

👨‍💻 Author
Drashti Bilimoria

Email : drashtibilimoria@gmail.com
Password : 1234
