# Medical Records Management System

This project is a **Medical Records Management System** that stores patient information, medical history, treatments, and insurance details. The system also manages prior authorizations for treatments, handling statuses such as pending, approved, and denied.

## Features

- Store patient details, including medical conditions, treatments, and insurance info.
- Track prior authorizations for treatments with statuses: pending, approved, or denied.
- Paginated patient list with optimized data fetching.
- In-House Authentication with **Next-Auth**.
- Responsive and modern UI built with **Shadcn UI** components.
- Full-stack development using **Next.js** for the frontend and **Express.js** for the backend.
- Backend API supports CRUD operations for managing patients and authorization requests.

## Technologies Used

### Frontend

- **Next.js**: Full-stack React framework for building server-rendered apps.
- **React Query**: Data fetching and caching library for managing server state in React.
- **Shadcn**: Modern UI components styled with TailwindCSS.
- **Pagination**: For efficient navigation of large datasets (patients).

### Backend

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database to store patient records.
- **Mongoose**: MongoDB ORM for schema modeling and database interactions.
- **Postman**: API testing.

## Project Setup

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 16+)
- **MongoDB**

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/mehraankush/basysFE.git
   cd basysFE
   
Install the dependencies:
     ```bash
          npm install
          npm run dev
     ```

##.env
```bash
NEXT_PUBLIC_BASE_BACKEND_URL="http://localhost:4000/api"


GOOGLE_CLIENT_ID = 286-o5gkmi.googleusercontent.com
GOOGLE_CLIENT_SECRET = GSPX-7s6wGuUq

NEXTAUTH_URL=http://localhost:3000
AUTH_SECRET="JJmX10YqDXiZF2LHRIvhgrOnGOJRJJGycAnvpCyhbik="
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
