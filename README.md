# Medical Records Management System

This project is a **Medical Records Management System** that stores patient information, medical history, treatments, and insurance details. The system also manages prior authorizations for treatments, handling statuses such as pending, approved, and denied.

## Features

- Store patient details including medical conditions, treatments, and insurance info.
- Track prior authorizations for treatments and their status.
- View and manage patients' medical records efficiently.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [Database Schema](#database-schema)

## Technologies Used

- **Node.js**: Backend runtime environment
- **Express.js**: Web framework for building RESTful APIs
- **MongoDB**: NoSQL database to store patient records
- **Mongoose**: MongoDB ORM for schema modeling and database interactions
- **Postman**: API testing

## Project Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 16+)
- **MongoDB**

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/mehraankush/medical-records-management-system.git
   cd medical-records-management-system
   
Install the dependencies:
     ```bash
          npm install
          MONGODB_URI=mongodb://localhost:27017/medical-db
          PORT=3000
          npm run dev
     ```
     
Database Schema :
```javascript
{
  "name": "string",
  "age": "number",
  "condition": "string",
  "medicalHistory": ["string"],
  "treatments": ["string"],
  "insurance": {
    "provider": "string",
    "policyNumber": "string",
    "groupNumber": "string"
  },
  "priorAuthorizations": [
    {
      "treatment": "string",
      "status": "Pending | Approved | Denied",
      "insuranceResponse": "string",
      "createdAt": "Date",
      "updatedAt": "Date"
    }
  ]
}
```

 ```javascript
[
  {
    "name": "Alice Johnson",
    "age": 34,
    "condition": "Asthma",
    "medicalHistory": ["Asthma", "Allergies"],
    "treatments": ["Albuterol", "Singulair"],
    "insurance": {
      "provider": "Blue Shield",
      "policyNumber": "BS987654321",
      "groupNumber": "G654321"
    },
    "priorAuthorizations": [
      {
        "treatment": "Albuterol",
        "status": "Approved",
        "insuranceResponse": "Approved by Blue Shield",
        "createdAt": "2024-09-17T10:00:00Z",
        "updatedAt": "2024-09-17T10:00:00Z"
      }
    ]
  }
]

```
