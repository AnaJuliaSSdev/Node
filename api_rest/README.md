# Games REST API

This is a Proof of Concept (POC) of a REST API for games that performs CRUD (Create, Read, Update, Delete) operations.

The main goal of this project was to demonstrate the creation of a REST API, with a focus on implementing CRUD functionalities. Mock data was used for this purpose, in order to simplify the development process and focus on building the API.

## How to Clone and Run the Project

To clone and run this project on your local machine, follow the steps below:

### Prerequisites

Make sure you have Node.js and npm (Node.js package manager) installed on your machine.

### Cloning the Repository

Open the terminal and navigate to the directory where you want to clone the project. Then, execute the following command:

```bash
git clone https://github.com/AnaJuliaSSdev/Node.git
```

### Installing Dependencies

After cloning the repository, navigate to the project directory and install the dependencies by running the following command:

```bash
cd api_rest
npm install
```

After installing the dependencies, you can start the program with the following command:

```bash
node index.js
```

This will start the server and your program will be accessible at http://localhost:8080.

### Endpoints

The API provides the following functionalities:

    List All Games: `GET /games`
    Get a Game by ID: `GET /game/:id`
    Add a New Game: `POST /game`
    Update an Existing Game: `PUT /game/:id`
    Delete an Existing Game: `DELETE /game/:id`
