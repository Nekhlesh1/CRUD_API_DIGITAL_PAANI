# Introduction
This documentation provides information about the Book API, which allows users to manage books and perform various operations 
such as adding, viewing, filtering, updating, and deleting books.

# Authentication
Authentication is required for certain endpoints. Users must provide a valid JWT token obtained through the login endpoint.

# Dependemcies Used

   1: bcrypt: Library for hashing passwords securely using bcrypt hashing algorithm.
   2: cookie-parser: Middleware for parsing cookies in Express.js applications.
   3: dotenv: Utility for loading environment variables from a .env file into Node.js applications.
   4: express: Web framework for building Node.js applications, providing features for routing, middleware, and more.
   5: jsonwebtoken: Library for generating and verifying JSON Web Tokens (JWT) used for authentication and authorization.
   6: mongoose: Object Data Modeling (ODM) library for MongoDB, providing a higher-level abstraction for interacting with MongoDB databases.
   7: nodemon: Utility that monitors changes in your Node.js application files and automatically restarts the server.
   8: validator: Library for data validation in JavaScript, providing functions for validating various data types such as strings, numbers, emails, and URLs.


# Endpoints
  
  **Add Book**
    URL: api/books/add
    Method: POST
    Description: Adds a new book to the database.
    Request Body:
    title (string, required): Title of the book.
    author (string, required): Author of the book.
    year (number, required): Publication year of the book.
    pages (number, required): Number of pages in the book.
    Authentication: Required
    Sample Request:

      {
        "title": "Example Book",
        "author": "John Doe",
        "year": 2022,
        "pages": 200
      }
    Sample Response:
      {
        "message": "Book added successfully",
        "book": {
        "_id": "609aeeb4c37f40b0a6d0a2c5",
        "title": "Example Book",
        "author": "John Doe",
        "year": 2022,
        "pages": 200
      }

**View All Books**
    URL: api/books/viewBooks
    Method: GET
    Description: Retrieves all books from the database.
    Authentication: Required
    Filter Books
    URL: /filter
    Method: GET
    Description: Filters books by author or publication year.
    Query Parameters:
      author (string, optional): Author name to filter by.
      year (number, optional): Publication year to filter by.
    Authentication: Required

**Update Book by ID**
    URL: api/books/updateBook/:id
    Method: PUT
    Description: Updates a book with the specified ID.
    Path Parameters:
    id (string, required): ID of the book to update.
    Request Body:
        title (string, optional): New title of the book.
        author (string, optional): New author of the book.
        year (number, optional): New publication year of the book.
        pages (number, optional): New number of pages in the book.
    Authentication: Required


**Delete Book by ID**
    URL: api/books/delete/:id
    Method: DELETE
    Description: Deletes a book with the specified ID.
    Path Parameters:
      id (string, required): ID of the book to delete.
    Authentication: Required


**Add User**
    URL: api/users/addUser
    Method: POST
    Description: Registers a new user.
    Request Body:
    username (string, required): Username of the user.
    password (string, required): Password of the user.
    Sample Request:
              {
                "username": "john_doe",
                "password": "examplepassword"
              }
    Authentication: Not Required

**Login User**
    URL: api/users/login
    Method: POST
    Description: Authenticates a user and returns a JWT token.
    Request Body:
    username (string, required): Username of the user.
    password (string, required): Password of the user.
    Sample Request:

              {
                "username": "john_doe",
                "password": "examplepassword"
              }
    Sample Response:

              {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
              }
    Authentication: Not Required
