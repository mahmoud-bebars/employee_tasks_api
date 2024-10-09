# Employee Tasks Logic API

## Setup

### Install Dependencies

```bash
  npm install
```

### Setup the Environments

```bash
  cp .env.example .env
```

Add the needed ENVs from .env.example

```bash
  NODE_ENV=development # Required
  NODE_VERSION=20.15.0 # Required
  PORT=5000 # Required
  DATABASE_URL= # Required
  APP_URL= # Required
```

### Setup the Database

we have used Prisma as ORM so we need to setup the database first.

2 ways to setup the database

1. Setup the database locally using docker

- Run the docker-compose.yml file using the command
  ```bash
      docker-compose up -d
  ```
  This will create the database in the docker container
- Add the database url in the .env file
- Run the command
  ```bash
  npx prisma db push
  ```
  This will create the database in the local database
- Run the command
  ```bash
  npx prisma db generate
  ```

2. Setup the database using the mongo atals

- Create a database in mongo atlas
- Add the database url in the .env file
- Run the command
  ```bash
  npx prisma db generate
  ```

### Run the Server

```bash
  npm run start
```

## Used Technologies

- Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- Express.js - A fast, unopinionated, minimalist web framework for Node.js.
- Prisma - A modern database toolkit for Node.js and TypeScript.
- MongoDB - A document-based database.
- joi - A JavaScript object schema description language and validator for JavaScript objects.
- morgan - A HTTP request logger middleware for Node.js.
- dotenv - A zero-dependency module that loads environment variables from a .env file into process.env.

## API Documentation

### Endpoints

#### Employees Endpoints

- [GET] `/api/v1/employees` - Get all employees
- [GET] `/api/v1/employees/with-tasks` - Get all employees with tasks
- [GET] `/api/v1/employees/:id` - Get employee by id
- [POST] `/api/v1/employees` - Create a new employee
- [PUT] `/api/v1/employees/:id` - Update employee by id
- [DELETE] `/api/v1/employees/:id` - Delete employee by id

#### Tasks Endpoints

- [GET] `/api/v1/tasks` - Get all tasks
- [GET] `/api/v1/tasks/:id` - Get task by id
- [POST] `/api/v1/tasks` - Create a new task
- [PUT] `/api/v1/tasks/:id` - Update task by id
- [DELETE] `/api/v1/tasks/:id` - Delete task by id
