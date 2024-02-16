# POC for Consuming API 

Proof of concept for consuming the games API created in this repository. 

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

After cloning the repository, navigate to the api_rest directory and install the dependencies by running the following command:

```bash
cd api_rest
npm install
```

### Running the API

Still in the API directory, start the API by running the following command:

```bash
node index.js
```

### Consuming the API

To access the API, you can simply open the HTML page found in the "consuming_api" directory. Alternatively, you can set up a server to host the page locally on your localhost using the http-server package. To do this, first open a new terminal to ensure the API continues to run in parallel. Then, follow the commands below in your terminal:

```bash
cd api_rest
npm install -g http-server
http-server -c-1 -a localhost -p 3000
```

And there you have it! Your API consumption is now active on port 3000 of your localhost.
