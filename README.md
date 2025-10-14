# Resume Generator

A simple Node.js backend project that generates resume documents (`.docx`) from user-provided data. 

---

## Features

- Accepts data via HTTP POST requests.
- Generates `.docx` resume files using the [`docx`](https://www.npmjs.com/package/docx) library.
- Allows downloading the generated resumes.
- Validates incoming data with [Zod](https://github.com/colinhacks/zod).

---

## Technologies

- **Node.js**
- **Express**
- **Docx** (for creating Word documents)
- **Zod** (for schema validation)
- **Axios** (for frontend requests, if needed)
- **CORS** (for cross-origin requests)

---

## Getting Started

### Install Dependencies

--- 

## API Endpoints

### Generate Resume

- POST /resume/resume
{
  "name": "John Doe",
  "email": "john@example.com",
  "city": "New York",
  "country": "USA",
  "skills": ["JavaScript", "React", "Node.js"],
  "experience": [
    { "company": "Acme Corp", "position": "Frontend Developer", "years": 2 },
    { "company": "Beta LLC", "position": "Backend Developer", "years": 3 }
  ]
}

- Response:

{
  "status": 200,
  "message": "successfully created a resume",
  "fileName": "resume_167892345.docx"
}

### Download Resume

- GET /resume/download/:fileName