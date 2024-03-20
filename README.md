## =============== Restaurant Listing Platform =============== ##

Welcome to the Restaurant Listing Platform! This web application provides information about various restaurants, including menus, images, addresses, features, pricing, and user reviews. It facilitates interactions between businesses (vendors) and users (customers), allowing users to book tables for dining or call restaurants for ordering.

# Installation and Setup:

1. Clone this repository to your local machine.
2. Install dependencies using npm install.
3. Create a .env file and define environment variables:
    PORT = 'define_port_number'
    JWT_SECRET_KEY = 'defined_jwt_secret_key'
    MONGODB_URI = 'define_mongodb_local_url_or_atlas'
4. Start the server using `npm start`

# Technologies Used
Express.js
MongoDB
Node.js
TypeScript

# Packages Used:
express
bcryptjs
jsonwebtoken
typescript, ts-node
dotenv
mongoose
tsc
body-parser

# Folder Structure:

restaurant-listing-app/
│
├── src/
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── listingController.ts
│   │   └── reviewController.ts
│   ├── middleware/
│   │   └── authMiddleware.ts
│   ├── models/
│   │   ├── listingModel.ts
│   │   ├── reviewModel.ts
│   │   └── userModel.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── listingRoutes.ts
│   │   └── reviewRoutes.ts
│   ├── utils/
│   │   └── jwtUtils.ts
│   ├── app.ts
│   └── config.ts
│
├── .env
├── .gitignore
├── package.json
└── tsconfig.json


# Objective:
The objective of this project is to design and implement a web application for the Restaurant Listing Platform. The application should include user authentication, CRUD operations for business listings, and reviews management. Additionally, it should implement JWT authentication with role-based access levels for Business Owners, Users, and Admins.

# Features:
User Authentication
Implements JWT authentication for secure user authentication.
Defines three user authorization levels: Business Owner, User, and Admin.

# Listing Management:
Provides CRUD operations for managing business listings.
Allows Business Owners to create, read, and update their listings with details such as name, phone, city, address, and images.

# Review Management:
Implements a review system where only logged-in users can review businesses.
Allows Business Owners to respond to reviews.

# Access Control:
Listing Access Grid
Role	Create	Read	Update	Delete
Business Owner	Yes	Yes	Yes	No
User	No	Yes	No	No
Admin	Yes	Yes	Yes	Yes

# Review Access Grid:
Role	Create	Read	Update	Delete
Business Owner	No	Yes	Yes	No
User	Yes	Yes	Yes	Yes
Admin	Yes	Yes	Yes	Yes

# Deliverables:
Implementation of JWT authentication with role-based access.
Role-based authorization for CRUD operations on listings and reviews.
