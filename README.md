# QuizQuest

Welcome to the QuizQuest documentation! This README will provide you with all the essential information to understand, install, and use the QuizQuest quiz app. The app has been developed using TypeScript, Vite, and the Open Trivia API.

## App Description

QuizQuest is an engaging quiz application that challenges users with a variety of trivia questions. Users can test their knowledge across different categories. The app utilizes the Open Trivia API to fetch the quiz questions ( https://opentdb.com/api_config.php ).

## System Requirements

Before you get started, ensure you have the following requirements installed on your system:

- Node.js 
- npm 

## Installation

1. Clone the repository from [https://github.com/369-Palma/quiz_app_ts.git].
2. Navigate to the project directory in your terminal: `cd quiz-quest`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root directory and add your Open Trivia API key:
5. Start the development server: `npm run dev`

The app will be available at [http://localhost:5173/](http://localhost:5173/).

## Project Structure

The project structure is organized as follows:

quiz-quest/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── App.css
│ ├── App.styles.ts
│ ├── App.tsx
│ ├── main.tsx
│ ├── utils.ts
│ ├── API.ts
│ ├── vite-env.d.ts
├── package.json
├── tsconfig.json
└── README.md


- **`public/`**: Contains publicly accessible static files.
- **`src/assets/`**: Holds assets like images, icons, etc.
- **`src/components/`**: Contains reusable React components.
- **`src/App.css`**: Global CSS for the app.
- **`src/App.styles.ts`**: Styles specific to the App component.
- **`src/App.tsx`**: The main component of the application.
- **`src/main.tsx`**: The entry point of the app.
- **`src/utils.ts`**: Utility functions for the app.
- **`src/API.ts`**: Handles API calls using the Open Trivia API.
- **`package.json`**: Dependency and script configuration.
- **`tsconfig.json`**: TypeScript configuration.

## Contact

For questions, suggestions, or issues, feel free to contact us at [palmaiacobelli92@gmail.com](mailto:palmaiacobelli92@gmail.com).

---

Thank you for choosing QuizQuest! I hope this documentation helps you get started with the app. Enjoy the world of trivia! 🎉

