# Recipe App

This web application retrieves recipes using the Spoonacular API. To get started, follow the instructions below:

## Getting the API Key

1. Visit [Spoonacular API](https://spoonacular.com/food-api) and sign up for an account if you don't have one.

2. Once logged in, navigate to your account settings and obtain the API key from the Spoonacular API.

## Setting up the Project

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/recipe-app.git
   ```

2. Change into the project directory:

   ```bash
   cd recipe-app
   ```

3. Create a `.env` file in the `src` folder of your project.

4. Open the `.env` file and add the following line, replacing `YOUR_API_KEY` with the API key obtained from Spoonacular:

   ```env
   REACT_APP_API_KEY=YOUR_API_KEY
   ```

   Save the file.

## Running the Application

1. Install the project dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Important Note

Ensure that your API key is kept confidential. Do not expose it in public repositories or share it publicly. The `.env` file containing your API key should be added to your project's `.gitignore` file to prevent accidental commits.

---

