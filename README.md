# Ecommerce-Follow-Along


Welcome to the **Ecommerce Application** project!  The application demonstrates modern development practices and hands-on experience with real-world concepts.

---

## **Project Overview**

This application is built using the **MERN Stack**, a popular technology stack for building full-stack web applications.

### **Key Features**
1. **User Authentication**:
   - Users can sign up and log in using their personal credentials.
2. **Product Management**:
   - Add, update, and retrieve product data.
3. **Order Handling**:
   - Manage customer orders efficiently.
4. **Database Integration**:
   - Uses **MongoDB** to store data in a flexible and scalable manner.
   - Each API endpoint interacts with the database and serves data in a structured format (typically JSON).

---

## **Milestone 1: Project Overview**

### **MERN Stack Overview**
- The MERN stack is favored for its **JavaScript-only approach**, enabling developers to work with a single language across the application:
  - **MongoDB**: For data storage.
  - **Express.js**: To build the backend server.
  - **React.js**: To create the frontend user interface.
  - **Node.js**: For running the server-side JavaScript.



### **REST API**
- A **REST API** is used to establish communication between the client (frontend) and the server (backend). This enables:
  - **User Authentication**: Secure registration and login.
  - **Product Management**: Handling product-related operations.
  - **Order Handling**: Managing and retrieving customer orders.

---

## **Milestone 2: Project Setup**
In this milestone, we created a login page using react and tailwind css. Then we linked it to the app.jsx using a loginPage.jsx in the pages folder.
Here, we learned about the differences between css and tailwind css and how to use it effectively.

## **Milestone 3: Project Setup**
### Features Implemented
- Structured backend folders for routes, controllers, models, and middlewares.
- Set up a Node.js server using Express.
- Connected the server to MongoDB.
- Implemented basic error handling for better debugging.

## **Milestone 4: User Management and File Uploads**
### Features Implemented
- Created a User Model:
Defined a schema for storing user data using MongoDB. The schema includes fields like name, email, and password to map the structure of user information.
- Developed a User Controller:
Implemented logic for managing user-related actions such as adding new users and retrieving their information. This controller acts as a bridge between the user interface and the database.
- Set Up File Uploads with Multer:
Configured Multer to handle file uploads, allowing users to upload profile pictures or other files. Files are stored securely in the backend with paths linked to user profiles.

## **Milestone 5: User Sign-Up Page and Form Validation**
## Features Implemented
- Created the Sign-Up page :
Designed a user-friendly, clean, and simple form where users can input their details, including name, email, and password.
Added Form Validation:
- Implemented validation for user inputs such as checking if the email format is correct and ensuring the password meets certain security criteria (e.g., minimum length).
Ensured that only valid data is submitted to the server.

## **Milestone 6: Secure Password Storage and Data Handling**
## Features Implemented
- Password Encryption:
Used bcrypt to hash passwords during the signup process.
Stored only hashed passwords in the database to ensure that sensitive information is never saved as plain text.
- Secure Data Handling:
Saved user data such as name, email, and hashed password in the MongoDB database.
Ensured compliance with security standards to protect user privacy and prevent data breaches.
