# Google Books API Test Suite

## Overview

This project demonstrates automated testing of a REST API using Postman and Node.js. It interacts with the Google Books API to perform book searches and validate responses through chained requests and assertions.

## Tech Stack

* Node.js
* Postman
* JavaScript
* REST APIs

## Features

* Automated API testing using Postman collections
* Environment variable management for dynamic requests
* Chained API requests (search followed by detailed lookup)
* Response validation using assertions
* HTTP header inspection and analysis

## Workflow

1. Send a request to search for books using a query parameter
2. Extract a book ID from the response
3. Use the extracted ID to request detailed book information
4. Validate responses using automated tests

## Setup and Usage

1. Clone the repository
2. Import the Postman collection
3. Configure environment variables in Postman
4. Run the collection to execute tests

## Key Concepts Demonstrated

* RESTful API interaction
* Automated API testing
* Handling HTTP requests and responses
* Working with headers and status codes
* Request chaining and data extraction

## Future Improvements

* Add edge case and negative testing
* Integrate automated testing into a CI/CD pipeline
* Expand support for additional APIs













[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/51996823-b5581350-ecbb-4749-b6df-12d7a91fe1cf?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D51996823-b5581350-ecbb-4749-b6df-12d7a91fe1cf%26entityType%3Dcollection%26workspaceId%3D25275803-dfa1-4ff4-9f9e-540eec3c38dd#?env%5BJoshiHW0%5D=W3sia2V5IjoiYm9va190aXRsZSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJ0dXJpbmciLCJjb21wbGV0ZVNlc3Npb25WYWx1ZSI6InR1cmluZyIsInNlc3Npb25JbmRleCI6MH0seyJrZXkiOiJ3b3JrX2tleSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiIvd29ya3MvT0w2MTIxNVciLCJjb21wbGV0ZVNlc3Npb25WYWx1ZSI6Ii93b3Jrcy9PTDYxMjE1VyIsInNlc3Npb25JbmRleCI6MX1d)

