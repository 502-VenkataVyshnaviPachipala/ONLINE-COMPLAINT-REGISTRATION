const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
// FIXED: Imported your complaints router file directly from your routes folder tree
const complaintRoutes = require("./routes/complaints");

const app = express();

app.use(cors());
app.use(express.json());

// connect database
connectDB();

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// FIXED: Mounted your route configurations right to the base path expected by your frontend Axios calls
app.use("/api/complaints", complaintRoutes);

const PORT = 5000;

// FIXED: "0.0.0.0" has been added here so your frontend can connect
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT + " and open to network interfaces 🚀");
});
