# Lexovate

This is a simple React application built with Next.js. It provides a basic project structure for web development, including environment configuration and essential project setup.

## Requirements

To run and develop this project, you'll need the following:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

## Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variable:

```env
API_CODE=your_api_code_here
```

Replace `your_api_code_here` with the actual API code.

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Build

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

## Run Production Server

After building, run the production server:

```bash
npm start
# or
yarn start
```

## Project Structure

```
├── src/                # Application pages
├── public/             # Static files
├── .env                # Environment variables
└── README.md           # Project documentation
```

## Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm start`: Runs the built app in production mode

## License

This project is licensed under the MIT License.

