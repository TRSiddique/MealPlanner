const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'mealPlanner10'
});
// Connect to MySQL
db.connect((err) => {
    if (err) {
      console.error("MySQL connection error:", err);
    } else {
      console.log("Connected to MySQL database");
    }
  });
// Define the endpoint to fetch crops based on criteria
app.get("/meal", async (req, res) => {
    const { Calorie, Time, diet } = req.query;
  
// Middleware to parse JSON requests
app.use(express.json());

// Route to get meal plan for a specific day
app.get('/mealplan/:day', (req, res) => {
    const day = req.params.day;

    // Query to retrieve meal plan for the specified day
    const query = `
        SELECT MealPlan.mealplan_id, Users.username, Meals.meal_name, Days.day_name
        FROM MealPlan
        JOIN Users ON MealPlan.user_id = Users.user_id
        JOIN Meals ON MealPlan.meal_id = Meals.meal_id
        JOIN Days ON MealPlan.day_id = Days.day_id
        WHERE Days.day_name = ?;
    `;

// Helper function for querying the database with parameters
const queryDatabase = (query, params) => {
    return new Promise((resolve, reject) => {
      db.query(query, params, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };
  
const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)
`;
const insertUserQuery = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  
db.query(insertUserQuery, [username, email, password], (err, result) => {
    if (err) {
        console.error("Error inserting user:", err);
        res.status(500).send({ message: "Internal server error", error: err.message });
    } else {
        res.status(200).send({ message: "ACCOUNT CREATED SUCCESSFULLY" });
    }
});
});


// Start the server
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
