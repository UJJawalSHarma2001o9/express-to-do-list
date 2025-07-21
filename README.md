start date : 19-07-2025

#installation

- npm init -y
- npm install express

# Database MySql

# Java Script

/\*_
when you copy my project use this first -- npm install for all package's thank you
_/

# Project run by - npm run dev ;

      * tip - if want use it  npm run start ;

# NPM packages
- env - npm install express dotenv
- morgan - npm install morgan
- cors - npm install cors
- file upload - npm install multer

# server setUp

    * src/server.js

# Following code structure

project-root/

├── src/
│ ├── config/ # Environment configs, DB setup, constants
│ │ ├── db.js
│ │ └── env.js
│ │
│ ├── controllers/ # Handle HTTP requests (one file per module)
│ │ ├── user.controller.js
│ │ ├── auth.controller.js
│ │ └── ...
│ │
│ ├── services/ # Business logic layer (called by controllers)
│ │ ├── user.service.js
│ │ ├── auth.service.js
│ │ └── ...
│ │
│ ├── routes/ # API route definitions
│ │ ├── user.routes.js
│ │ ├── auth.routes.js
│ │ └── index.js # Combines all routes
│ │
│ ├── middlewares/ # Auth, logging, error handling, validation
│ │ ├── auth.middleware.js
│ │ ├── error.middleware.js
│ │ ├── validate.middleware.js
│ │ └── ...
│ │
│ ├── models/ # Mongoose / Sequelize models
│ │ ├── user.model.js
│ │ └── ...
│ │
│ ├── utils/ # Helper functions (e.g. generateToken, formatDate)
│ │ └── logger.js
│ │
│ ├── app.js # Main app setup (Express + middleware + routes)
│ └── server.js # Entry point: load app and start server
│
├── .env # Environment variables
├── package.json
└── README.md
