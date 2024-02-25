# React + TypeScript + Vite Template

This template provides a minimal setup for building React applications with TypeScript using Vite. It includes features such as Hot Module Replacement (HMR) and ESLint rules to ensure code quality.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

-   Node.js (version >= 18.x)
-   npm or yarn

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install dependencies using npm:

    ```bash
    npm install
    ```

    or using yarn:

    ```bash
    yarn install
    ```

### Development Server

To start the development server, run the following command:

```bash
npm run dev
```

or

```bash
yarn dev
```

The app will run in development mode with Hot Module Replacement (HMR) enabled. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

or

```bash
yarn build
```

This command generates a production-optimized build of your application in the `dist` directory.

## Folder Structure

The project structure follows a standard React application layout:

```
.
├── public/            # Public assets
├── src/               # Source files
│   ├── ssets/         # Images and logos
│   ├── components/    # React components
│   ├── pages/         # React pages
│   ├── services/      # Api requests
│   ├── shared/        # Contexts and hooks
│   ├── types/         # Typescript annotations
│   ├── utils/         # Utility functions and helpers
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Entry point of the application
├── .eslintrc.js       # ESLint configuration
├── .gitignore         # Git ignore file
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

### Libs

Here are the technologies/libraries used in this project:

-   React
-   Vite
-   TypeScript
-   MUI
-   Axios
-   React-query
-   React-router-dom

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. Make sure to follow the existing coding style and conventions.
