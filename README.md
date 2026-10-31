# Cynbit Project Inquiry Assistant

A full-stack web application that improves the project inquiry experience through a guided, multi-step form.

## Live Demo

- **Frontend:** https://cynbit-project-inquiry-assistant.vercel.app/
- **Backend:** https://cynbit-inquiry-backend.onrender.com

## Project Overview

The Project Inquiry Assistant is a proposed enhancement to the contact inquiry experience on the Cynbit website.

Instead of collecting project requirements through a single free-text message, the application guides users through structured steps to share their project details, budget, timeline, and contact information.

The goal is to make submitting an inquiry easier for prospective clients and provide the business with more organized project information.

## Key Features

- Guided, three-step project inquiry form.
- Project type and description selection.
- Budget and timeline collection.
- Contact information with required-field validation.
- Review of project details before submission.
- Back navigation while retaining entered information.
- API integration using Axios.
- Inquiry storage in MongoDB Atlas.
- Submission loading and error handling.
- Responsive user interface.

## Technology Stack

**Frontend**

- React
- Vite
- JavaScript
- CSS
- Axios
- Lucide React

**Backend**

- Node.js
- Express.js
- Mongoose

**Database**

- MongoDB Atlas

**Deployment**

- Vercel (Frontend)
- Render (Backend)

## Project Structure

```text
cynbit-project/
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
├── server/
│   ├── config/
│   │   └── db.js
│   ├── src/
│   │   ├── controllers/
│   │   │   └── inquiryController.js
│   │   ├── models/
│   │   │   └── Inquiry.js
│   │   └── routes/
│   │       └── inquiryRoutes.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
└── README.md
```

## API Endpoint

**Create a project inquiry**

`POST /api/inquiries`

The endpoint accepts project details and contact information, validates required fields, and stores valid submissions in MongoDB.

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Tamanna157087/cynbit-project-inquiry-assistant.git
cd cynbit-project-inquiry-assistant
```

### 2. Start the backend

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm run dev
```

### 3. Start the frontend

Open a second terminal:

```bash
cd client
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Testing

The application was tested for:

- Required-field validation.
- Navigation between form steps.
- Retention of entered data when navigating backwards.
- Successful API submission.
- Saving inquiry records in MongoDB Atlas.
- Live frontend-to-backend communication.

## Future Improvements

- Email notifications after inquiry submission.
- Admin dashboard to manage inquiries.
- More detailed project requirement fields.
- Spam protection and rate limiting.
- Improved accessibility.

---

**Developed as a practical assessment project for Cynbit Technologies.**
