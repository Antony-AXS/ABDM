import authentication from "./src/Authentication/routes.js";
import express from "express";

const app = express();

app.post("/authentication", authentication);

export default app;
