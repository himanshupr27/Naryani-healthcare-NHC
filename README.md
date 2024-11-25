# Naryani Healthcare (NHC)

This is a medical website designed for booking appointments with doctors, contacting them, and allowing users to sign up and log in. The website aims to streamline the process of connecting patients with healthcare providers efficiently and securely.

## Features

- **User Signup/Login**: Patients can register and log in to book appointments.
- **Appointment Booking**: Book appointments with doctors based on availability.
- **Doctor Profiles**: View doctor profiles and contact them directly.
- **Secure Authentication**: User authentication is handled securely using JWT tokens.
- **Contact Form**: Contact healthcare providers for general inquiries or support.

## Tech Stack

### Frontend
- **ReactJS**: For building the user interface.
- **Redux Toolkit**: For managing application state.
- **CSS3**: For styling and responsiveness.

### Backend
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Backend web framework for handling requests and API routes.
- **MongoDB**: NoSQL database for managing user data and appointments.

### Additional Tools
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **Mongoose**: For object data modeling (ODM) in MongoDB.

## Installation & Setup

### Prerequisites
- **Node.js** and **npm** installed
- **MongoDB** installed and running locally or using a cloud-based solution like MongoDB Atlas

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/himanshupr27/Naryani-healthcare-NHC.git
   cd Naryani-healthcare-NHC/backend
2. Install backend dependencies:
   ```bash
   npm install

3. Set up environment variables:
Create a .env file in the backend folder and add the following:

   ```bash
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret_key

4. Start the backend server:
   ```bash
   npm start

The server will run on http://localhost:4000.

###Frontend Setup:

1.Navigate to the frontend folder:

    ```bash
    cd ../frontend

2. Install frontend dependencies:

    ```bash
   npm install

3.Start the React development server:

    ```bash
    npm start

The frontend will run on http://localhost:3000.
