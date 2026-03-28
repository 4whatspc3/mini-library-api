# Mini Library API
This project is an evolution of a previous exercise focused on mastering the fundamentals of **Express.js**.

While earlier versions focused on basic routing and serving static files, this iteration shifts the focus toward **API architecture**, **clean code**, and **robust error handling**.

The goal of this project is to implement a **professional backend structure**, moving away from a monolithic `app.js` and adopting a **modular approach**.


## Key Concepts Practiced

- **Layered Architecture**  
  Separating logic into Controllers and Models.

- **Centralized Error Handling**  
  Implementing a global `errorHandler` middleware.

- **Custom Error Classes**  
  Extending the native `Error` class to create specific errors like `NotFoundError`.

- **Async/Await Flow**  
  Handling asynchronous operations using `try/catch` and `next(error)`.

- **Custom Middleware**  
  Implementing loggers and error interceptors.

- **RESTful Standards**  
  Returning consistent JSON responses for both success and error states.


## Project Structure

Instead of placing all logic in one file, the project is organized into:

```
/controllers   → Handles request/response logic
/errors        → Custom error classes (e.g., NotFoundError.js)
/middlewares   → errorHandler and logging logic
/routes        → API endpoints
```


## Centralized Error Handling Example

One of the core features of this project is the **"Safe Error Funnel"**.

When a resource is not found or a server error occurs, the API returns a standardized response:

```json
{
  "error": "NotFoundError",
  "message": "Book with this ID does not exist"
}
```

---

## Important Notes

- This project was created as a **learning exercise** to explore how to build a **resilient and scalable API**.
- Focused on **Backend Architecture** and **Developer Experience (DX)**.
- Demonstrates how to **prevent server crashes** using proper async error propagation.
- Intended to be run locally to observe the flow between **Controllers** and the **Global Error Handler**.


## ▶Running the Project

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project folder

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the server

```bash
node app.js
```


## Testing the API

You can test the endpoints using tools like:

- Postman  
- Insomnia  
- Browser  

### Available routes:

- Get all books:  
  http://localhost:3000/books

- Get a specific book:  
  http://localhost:3000/books/1

- Trigger custom 404 error:  
  http://localhost:3000/books/999