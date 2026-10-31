# Technical Report

## Cynbit Project Inquiry Assistant

**Candidate:** Tamanna Goyal  
**Project:** Cynbit Project Inquiry Assistant  
**Assessment:** Full Stack Developer Intern Practical Assessment  
**Repository:** https://github.com/Tamanna157087/cynbit-project-inquiry-assistant  
**Live Application:** https://cynbit-project-inquiry-assistant.vercel.app/

---

## 1. Introduction

This project was developed as part of the Cynbit Technologies Full Stack Developer Intern practical assessment.

The objective was to examine the existing Cynbit website from a user and developer perspective, identify an opportunity for improvement, and develop a functional prototype demonstrating that improvement.

I chose to enhance the project inquiry experience by building a guided, multi-step Project Inquiry Assistant.

## 2. Existing Website Analysis

The existing contact inquiry experience provides visitors with a way to share their contact details and project requirements.

From a user-experience perspective, a single form with a free-text message field can make it difficult for prospective clients to understand which project details they should provide.

From a business perspective, project information submitted in an unstructured format may require additional clarification before the team can understand the client's requirements.

This presented an opportunity to make project inquiries more structured and guided.

## 3. Problem Identified

The improvement focuses on three areas:

- **User guidance:** Visitors may not know which information is useful when describing a project.
- **Structured information:** Important details such as project type, budget, and timeline may not be provided consistently.
- **Review before submission:** A guided process can help users review their requirements before sending an inquiry.

These are proposed usability improvements rather than claims that the existing website is non-functional.

## 4. Proposed Solution

I developed a three-step Project Inquiry Assistant.

### Step 1: Project Details

Users provide their project type and describe their requirements.

### Step 2: Budget and Timeline

Users specify their approximate budget and expected project timeline.

### Step 3: Contact Information and Review

Users enter their name, email, and optional company information, and review their project details before submitting.

The interface also supports backward navigation while retaining previously entered information.

## 5. Key Features

- Three-step guided inquiry workflow.
- Structured project requirement collection.
- Required-field validation.
- Email format validation.
- Back navigation with form data retention.
- Project detail review before submission.
- Loading state during submission.
- Error handling for unsuccessful requests.
- Backend API integration.
- Persistent inquiry storage using MongoDB Atlas.
- Responsive user interface.

## 6. Technology Stack

| Layer               | Technologies                 |
| ------------------- | ---------------------------- |
| Frontend            | React, Vite, JavaScript, CSS |
| HTTP Requests       | Axios                        |
| Icons               | Lucide React                 |
| Backend             | Node.js, Express.js          |
| Database            | MongoDB Atlas                |
| ODM                 | Mongoose                     |
| Frontend Deployment | Vercel                       |
| Backend Deployment  | Render                       |

## 7. System Architecture

The application follows a client-server architecture.

1. The user enters project information in the React frontend.
2. React manages the form state and performs client-side validation.
3. Axios sends the inquiry data to the Express backend.
4. The backend validates the submitted information.
5. Mongoose creates an inquiry document in MongoDB Atlas.
6. The backend returns a response to the frontend.
7. The frontend displays a success or error message based on the response.

### Architecture Flow

```text
User
  |
  v
React Frontend (Vercel)
  |
  | POST /api/inquiries
  v
Express Backend (Render)
  |
  v
Inquiry Controller
  |
  v
Mongoose Model
  |
  v
MongoDB Atlas
  |
  v
API Response
  |
  v
Frontend Feedback
```

## 8. Backend API Design

### Create Inquiry

**Method:** POST

**Endpoint:**

`/api/inquiries`

**Request body example:**

```json
{
  "projectType": "Web Development",
  "description": "I need a responsive business website.",
  "budget": "₹50,000 - ₹1,00,000",
  "timeline": "1-3 months",
  "name": "Test User",
  "email": "test@example.com",
  "company": "Example Company"
}
```

**Successful response:**

The backend returns HTTP status `201` when an inquiry is successfully saved.

The inquiry data is stored in the MongoDB `inquiries` collection.

## 9. Database Design

An Inquiry model was created using Mongoose.

The schema includes:

| Field       | Purpose                          |
| ----------- | -------------------------------- |
| projectType | Type of project                  |
| description | Project requirements             |
| budget      | Approximate budget               |
| timeline    | Expected timeline                |
| name        | Contact person's name            |
| email       | Contact email                    |
| company     | Optional company name            |
| timestamps  | Record creation and update times |

Required fields are validated through the schema and backend logic.

## 10. Testing and Validation

The following scenarios were tested:

| Test Case                           | Expected Result                                      |
| ----------------------------------- | ---------------------------------------------------- |
| Submit without required information | Validation prevents submission                       |
| Enter an invalid email              | Email validation displays an error                   |
| Navigate backward                   | Previously entered information remains               |
| Submit valid inquiry                | Backend receives the request                         |
| Successful database operation       | Inquiry is saved in MongoDB Atlas                    |
| Live application submission         | Deployed frontend communicates with deployed backend |

The live application was tested by submitting an inquiry and confirming that its details were saved in MongoDB Atlas.

## 11. Deployment

The application was deployed using separate frontend and backend hosting services.

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

This separation allows the frontend and backend to be deployed and maintained independently.

## 12. Challenges and Learnings

During development, I worked through several practical challenges:

- Connecting a React frontend to an Express backend.
- Config
