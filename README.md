NodeJS Movies API

# Overview

This is a Node.js project that provides an API to fetch movies for a specific year, sorted by popularity, and includes optional details about the movie editors. The service integrates with the TMDB API and is designed to handle failures gracefully when fetching editor details.

# Features

Fetch movies for a given year, sorted by descending popularity.
Include editor details (retrieved via the Movie Credits API) in the response.
Resilient to failures—if the editor details fail to load, the service will still respond with movie details.
Includes unit tests using Jest for the services.
Requirements

Node.js: Version 21 or higher
npm: Version 8 or higher
TMDB API v4 Bearer Token (Sign up for an API key here)
Dependencies:
TypeScripta
Express
Jest
Axios
Setup Instructions

## Step 1: Clone the Repository
- git clone https://github.com/your-username/nodejs-movies-api.git
- cd nodejs-movies-api

## Step 2: Install Dependencies
Run the following command to install all project dependencies:

- npm install


## Step 3: Configure Environment Variables
- Create a .env file in the root directory and add your TMDB v4 Bearer Token:

TMDB_API_KEY=your_tmdb_v4_bearer_token
Replace your_tmdb_v4_bearer_token with your actual API key.

## Step 4: Compile TypeScript
Compile the TypeScript code to JavaScript:

- npx tsc


## Step 5: Start the Server
Start the server by running:

- node dist/index.js

The server will start at http://localhost:3000.

# API Endpoints

1. Fetch Movies
URL: GET /api/movies
Query Parameters:

year (required): The release year of movies (e.g., 2019).
page (optional): The page number of the results (defaults to 1).
Example Request:

curl "http://localhost:3000/api/movies?year=2019&page=1"
Example Response:

[
  {
    "id": 475557,
    "title": "Joker",
    "release_date": "2019-10-04",
    "vote_average": 8.5,
    "editors": ["Jeff Groth", "Ray Neapolitan"]
  },
  {
    "id": 420818,
    "title": "The Lion King",
    "release_date": "2019-07-12",
    "vote_average": 7.1,
    "editors": []
  }
]

# Testing the Project

Run Unit Tests
Run the following command to execute unit tests:

- npm test

- Expected Output:
PASS  tests/movies.test.ts
  ✓ should fetch movies for a given year (xx ms)
  ✓ should fetch editors for a movie (xx ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Development Workflow


# Error Handling

If the Movie Credits API fails, the editors field in the response will be an empty array, ensuring the service does not fail entirely.
Invalid requests (e.g., missing year parameter) will return a 400 Bad Request response with an appropriate error message.


This README file provides all the necessary details to understand, set up, and run the project. Let me know if you need any additional tweaks!