const express = require("express");
const app = express();

const tourRouter=require("./routes/tourRoutes.js")

// Middleware to parse JSON
app.use(express.json());

// ROUTES
app.use('/api',tourRouter)

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});