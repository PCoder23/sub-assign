# Blog Stats Api

The Blog Stats Api is a Node.js Express backend that allows you to analyze data and cache data

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
  - [1. Fetch Blog Stats Whose Title Contains Word Privacy](#1-fetch-blog-stats-whose-title-contains-word-privacy)
  - [2. Search Blog Data With Query](#2-search-blog-data-with-query)

## Getting Started

These instructions will help you set up and run the Climate Change API on your local machine for development and testing purposes.

### Prerequisites

Before getting started, make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/PCoder23/sub-assign.git
   ```

2. Install all the dependencies:
    ```shell
    npm i
    ```    


4. Start the server:
    ```shell
    npm start
    ```

    The server will be running on http://localhost:5000 or at the port you have specified in the `.env` file.


## API Endpoints
### 1. Fetch Blog Stats Whose Title Contains Word Privacy
- URL: `/api/blog-stats`
- Method: GET

### 2. Search Blog Data With Query
- URL: `/api/blog-search`
- QUERY: `/api/blog-search?query=query` 
- QUERY-EXAMPLE: `/api/blog-search?query=privacy` 
- Method: GET
