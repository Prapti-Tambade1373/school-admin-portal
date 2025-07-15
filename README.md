# school-admin-portal
🎓 School Management System — Spring Boot + React.js
A full-stack School Management System built using Spring Boot (JPA, REST API), MySQL, and React.js with Bootstrap for styling. The system provides login and registration for Principal, Teacher, and Employee, enabling them to manage student and teacher records. No Spring Security is used.

🔧 Technologies Used 
Java

Spring Boot

Spring Data JPA

MySQL

React.js

Bootstrap

Maven

REST API

📡 REST API Endpoints

🧑‍🏫 Teacher APIs
| Method | Endpoint                           | Description         |
| ------ | ---------------------------------- | ------------------- |
| GET    | `/api/teacher/get/teacher`         | Get all teachers    |
| GET    | `/api/teacher/get/teacher/{id}`    | Get teacher by ID   |
| POST   | `/api/teacher/add/teacher`         | Add new teacher     |
| PUT    | `/api/teacher/update/teacher/{id}` | Update teacher info |
| DELETE | `/api/teacher/delete/teacher/{id}` | Delete teacher      |

👨‍🎓 Student APIs
| Method | Endpoint                           | Description         |
| ------ | ---------------------------------- | ------------------- |
| GET    | `/api/student/get/student`         | Get all students    |
| GET    | `/api/student/get/student/{id}`    | Get student by ID   |
| POST   | `/api/student/add/student`         | Add new student     |
| PUT    | `/api/student/update/student/{id}` | Update student info |
| DELETE | `/api/student/delete/student/{id}` | Delete student      |

🔐 Authentication APIs
| Method | Endpoint             | Description                  |
| ------ | -------------------- | ---------------------------- |
| POST   | `/api/auth/register` | Register new user            |
| POST   | `/api/auth/login`    | Login user and validate role |


✨ Features
🏠 Homepage with Navbar

Register and Login options for Principal, Teacher, and Employee.

👨‍🏫 Principal Dashboard

View all Students and Teachers in tables.

🧑‍💼 Employee Dashboard

Add, Update, Delete Teacher records.

👩‍🏫 Teacher Dashboard

Add, Update, Delete Student records.

📋 Student Information

Name, Roll No, Class, Phone No.

📚 Teacher Information

Name, Phone No, Email ID, Subject.

✅ Clean and attractive UI using Bootstrap.





