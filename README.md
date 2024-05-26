
# User Management Application

## Overview

This application is a user management system with a frontend built using React and Next.js, and a backend using Express and Prisma. The application allows for creating, reading, updating, and deleting users. The database used is PostgreSQL, and Docker is used for containerization.

## Table of Contents

1. [Frontend Setup](#frontend-setup)
    - [Installation](#installation)
    - [Usage](#usage)
    - [File Structure](#file-structure)
2. [Backend Setup](#backend-setup)
    - [Installation](#installation-1)
    - [Usage](#usage-1)
    - [File Structure](#file-structure-1)
3. [Database Setup](#database-setup)
4. [Docker Setup](#docker-setup)
5. [Environment Variables](#environment-variables)

## Frontend Setup

### Installation

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Usage

1. Start the development server:

    ```bash
    npm run dev
    ```

2. Build the application:

    ```bash
    npm run build
    ```

3. Start the application:

    ```bash
    npm start
    ```

### File Structure

- `components/CardComponent.tsx`: Card component for displaying user information.
- `pages/_app.tsx`: Custom App component to initialize pages.
- `pages/api/hello.ts`: Example API route.
- `pages/index.tsx`: Main page component where the user management functionality is implemented.
- `styles/globals.css`: Global styles.

## Backend Setup

### Installation

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

### Usage

1. Start the server:

    ```bash
    node index.js
    ```

### File Structure

- `index.js`: Main server file where Express server and routes are defined.
- `prisma/schema.prisma`: Prisma schema file for database modeling.

## Database Setup

This application uses PostgreSQL as the database. The Prisma ORM is used for database interactions.

1. Ensure you have PostgreSQL installed and running.
2. Set up the database using Prisma:

    ```bash
    npx prisma migrate dev --name init
    ```

## Docker Setup

To run the application using Docker, ensure Docker is installed on your machine and follow these steps:

1. Navigate to the root directory where the `docker-compose.yml` file is located.
2. Build and start the containers:

    ```bash
    docker-compose up --build
    ```

This will start the frontend, backend, and PostgreSQL database in separate containers.

## Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```env
DATABASE_URL=postgres://postgres:postgres@db:5432/postgres?schema=public
```

Create a `.env.local` file in the `frontend` directory with the following content:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```
