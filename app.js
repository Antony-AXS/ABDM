import authentication from "./src/Authentication/routes.js";
import express from "express";

// Create an Express application
const app = express();

// Define a route
app.get("/authentication", authentication);

// Start the server
export default app;
