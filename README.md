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

## **Milestone 7: Login Endpoint and Password Validation**
## Features Implemented
- Login Endpoint:
Created an endpoint to accept user credentials (email/username and password).
Retrieved the corresponding user from the database using the provided email/username.
- Password Validation:
Used bcrypt to hash the entered password during login.
Compared the hashed password with the stored hashed password in the database for authentication, ensuring that only valid users can log in.

## **Milestone 8: Product Card Component and Homepage Layout**
## Features Implemented
- Card Component:
Designed a reusable card component to display product details like name, image, and price using props.
Ensured the component is flexible and can be used for displaying multiple products on the homepage.
- Homepage Layout:
Set up a clean, responsive layout using CSS grid or flexbox for displaying the product cards in an organized manner.
Created a neat and visually appealing display for products, ensuring good user experience across different screen sizes.

## **Milestone 9: Product Creation Form**
## Features Implemented
- Product Form: A form to input product details like name, description, price, and category.
- Multiple Image Upload: Functionality to upload multiple product images.

## **Milestone 10: Product Schema and Endpoint Creation**

## Features Implemented
- **Product Schema**: Defined the structure of product data (e.g., name, description, price, image URL) using Mongoose. Ensured each field has proper validation (e.g., required fields, correct data types).
- **Endpoint Creation**: Built a POST endpoint to receive product data. Validated and saved the product details to MongoDB.

## Why Validation?
- Ensures that only valid data is saved in the database, maintaining data integrity and preventing errors.

## **Milestone 11: Fetch and Display Products**
## Features Implemented
- Endpoint to Fetch Products:
Wrote an endpoint that sends all product data to the frontend.
- Fetch Products in Frontend:
Implemented a function in the frontend to fetch all product data from the backend.
- Display Products:
Displayed the fetched product data dynamically by passing it to the product card component.

## **Milestone 12: Product Update and Delete**
## Features Implemented
- Update Product:
Implemented functionality to update existing product details. Created an endpoint to handle product updates and a form in the frontend to submit updated product data.
- Delete Product:
Implemented functionality to delete a product. Created an endpoint to handle product deletion and added a delete button in the frontend to remove products.

## **Milestone 13: Product Edit Functionality**
## Features Implemented
- Update Endpoint:
Wrote an endpoint that receives new data and updates the existing data inside MongoDB.
- Edit Button:
Added an edit button to the product card in the frontend.
- Auto-fill Form:
When the edit button is clicked, the form is auto-filled with the existing product data, allowing the user to edit and save the changes.

## **Milestone 14: Product Delete Functionality**
## Features Implemented
- Delete Endpoint:
Wrote an endpoint that deletes the product data from MongoDB using the product ID.
- Delete Button:
Added a delete button to the product card in the frontend.
- Delete Operation:
When the delete button is clicked, the product ID is sent to the server endpoint to delete the product.

## **Milestone 15: Navigation Component**
## Features Implemented
- Navigation Component:
Created a new Nav component with links to all pages: Home, My-products, Add product, and Cart.
- Responsive Navbar:
Made the Navbar responsive to all screen sizes.
- Smooth Navigation:
Added the Nav component to all pages and ensured smooth and easy navigation between pages.

## **Milestone 16: Display All Products Page**
## Features Implemented
- Products Page:
Created a new page that displays all the product data.
- Fetch and Display:
Fetched all product data from the backend and displayed it on the new page.

## **Milestone 17: Cart Functionality**
## Features Implemented
- Cart Schema:
  Defined a schema for storing cart data using MongoDB. The schema includes fields like user ID, product ID, quantity, and total price.
- Add to Cart Endpoint:
  Created an endpoint to receive and store product details in the cart. This endpoint accepts product ID and quantity, calculates the total price, and saves the cart data to MongoDB.
- Fetch Cart Data:
  Implemented an endpoint to fetch all cart data for a specific user. This endpoint retrieves the cart items from the database and sends them to the frontend.
- Update Cart:
  Created an endpoint to update the quantity of a product in the cart. This endpoint accepts the cart item ID and the new quantity, recalculates the total price, and updates the cart data in MongoDB.
- Remove from Cart:
  Implemented an endpoint to remove a product from the cart. This endpoint accepts the cart item ID and deletes the corresponding cart item from the database.
- Cart Page:
  Created a new page that displays all the cart items for the user. This page fetches the cart data from the backend and displays it in a user-friendly format.
- Responsive Cart Page:
  Made the cart page responsive to all screen sizes, ensuring a smooth user experience on both desktop and mobile devices.

## **Milestone 18: Cart Page Backend Integration**
## Features Implemented
- Create Backend Endpoint for Cart Page:
  Developed a backend endpoint to handle requests for the cart page. This endpoint is responsible for retrieving the cart data for a specific user.
- Get Products Inside Cart for User:
  Implemented an endpoint to fetch all products inside the cart for a specific user. This endpoint retrieves the cart items from the database and sends them to the frontend.

## **Milestone 19: Cart Quantity Management**
## Features Implemented
- Create Cart Frontend Page:
  Designed a frontend page to display the products in the cart.
- Quantity Management:
  Added options to increase and decrease the quantity of each product using + and - buttons.
- Backend Endpoints for Quantity Management:
  Created backend endpoints to handle requests for increasing and decreasing product quantities in the cart.
- Understanding Cart Functionality:
  This lesson helps in understanding how to create and manage cart functionality effectively.

## **Milestone 20: User Profile Page**
## Features Implemented
- Backend Endpoint for User Data:
  Created a backend endpoint to send user data.
- Frontend Profile Page:
  Designed a frontend profile page to display user information.
- Display User Information:
  Displayed profile photo, name, and email in one section.
- Address Section:
  Displayed address information in another section with an "Add address" button.
  If no address is found, displayed "No address found".
- Understanding Profile Page:
  This lesson helps in understanding how to display and manage a user profile page effectively.

## **Milestone 21: Address Form Page**
## Features Implemented
- Address Form Frontend Page:
  Created a frontend page with a form to input address details.
- State Management for Address:
  Created a state to store the input address.
- Navigation from Profile to Address Form:
  Implemented navigation from the profile page to the address form page when the "Add address" button is clicked.
- Understanding Address Form:
  This lesson helps in understanding how to create and manage an address form page effectively.

## **Milestone 22: Store Address Endpoint**
## Features Implemented
- Address Storage Endpoint:
  Created an endpoint to receive the address from the address form in the frontend.
- Add Address to User Collection:
  Added the received address to the address array inside the user collection in the database.
- Understanding Address Storage:
  This lesson helps in understanding how to create an endpoint that will store the address in the database.

## **Milestone 23: Select Address for Order**
## Features Implemented
- Place Order Button:
  Created a "Place Order" button inside the cart page that navigates to the select address page when clicked.
- Select Address Page:
  Designed a page to display all available addresses with an option to select one address.
- Backend Endpoint for User Addresses:
  Wrote a backend endpoint to send all the addresses of the user.
- Understanding Address Selection:
  This lesson helps in understanding how to create and manage the address selection process for placing an order.

## **Milestone 24: Order Summary and Placement**
## Features Implemented
- Display Ordered Products:
  Displayed all the products that the user is ordering.
- Display Selected Address:
  Displayed the address selected by the user for delivery.
- Display Total Cart Value:
  Displayed the total value of the cart.
- Place Order Button:
  Added a "Place Order" button at the bottom of the page.
- Understanding Order Placement:
  This lesson helps in understanding how to implement the place order functionality effectively.

## **Milestone 25: Place Order Endpoint**
## Features Implemented
- Order Placement Endpoint:
  Created an endpoint to receive the products, user, and address details.
- Retrieve User ID:
  Retrieved the user ID using the email of the user.
- Store Order Details:
  For each product, created a separate order with the same address and stored the order details in the MongoDB order collection using the order schema.
- Understanding Order Placement:
  This lesson helps in understanding how to create an endpoint that places an order in the database.

## **Milestone 26: Retrieve User Orders**
## Features Implemented
- Retrieve Orders Endpoint:
  Created an endpoint to receive the user's email.
- Retrieve User ID:
  Retrieved the user ID using the email of the user.
- Fetch User Orders:
  Using the user ID, fetched all the orders of that user from the database.
- Send Orders in Response:
  Sent all the user's orders in the response.
- Understanding Order Retrieval:
  This lesson helps in understanding how to create an endpoint that retrieves and sends user orders.

## **Milestone 27: My Orders Page**
## Features Implemented
- My Orders Page:
  Created a new "My Orders" page.
- Fetch User Orders:
  Sent a GET request to the "my-orders" endpoint created in the previous milestone.
- Send User Email:
  Sent the user's email to the endpoint to get all the user's orders.
- Display User Orders:
  Displayed all the user's orders on the "My Orders" page.
- Add to Navbar:
  Added the "My Orders" page to the navbar for better navigation.
- Understanding My Orders Page:
  This lesson helps in understanding how to create a page to display user orders and integrate it into the navigation.

## **Milestone 28: Cancel Order Functionality**
## Features Implemented
- Cancel Order Button:
  Added a "Cancel Order" button for every order on the "My Orders" page.
- Conditional Display:
  Ensured the "Cancel Order" button is not displayed if the order is already canceled.
- Cancel Order Endpoint:
  Created an endpoint to receive the order ID.
- Update Order Status:
  Retrieved the order using the provided ID, marked its status as "canceled," and saved the changes.
- Understanding Order Cancellation:
  This lesson helps in understanding how to implement functionality to cancel user orders.

## **Milestone 29: Payment Options Setup**
## Features Implemented
- PayPal Account Setup:
  - Created a PayPal account and logged into the PayPal developer dashboard.
  - Created a sandbox account and copied the UserID for future use.
  - Retrieved and saved the client ID from the sandbox account.
- Payment Options:
  Added two payment options on the order confirmation page: Cash on Delivery (COD) and Online Payment.
- Radio Buttons:
  Created radio buttons to select between COD and Online Payment.
- PayPal Button Placeholder:
  Displayed PayPal buttons dynamically when the Online Payment option is selected.
- Understanding Payment Options Setup:
  This lesson helps in understanding how to set up PayPal sandbox accounts and prepare for integrating PayPal buttons for online payments.