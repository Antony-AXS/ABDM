import app from "./app.js";
const PORT = 3002;
//const { PORT = 3001 } = process.env;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console
