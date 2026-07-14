const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// 🌐 FORCE NODE.JS TO USE GOOGLE/CLOUDFLARE DNS (Bypasses network connection block bugs)
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

// ✅ ALLOW CROSS-ORIGIN INPUT REQUESTS FROM CLIENT PORT 3000
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// 💡 CONNECT PIPELINE USING ROBUST ATLAS IP HOOKSTRINGS
const dbURI = "mongodb://21057cm036_db_user:MySecretPass123%21@13.233.155.151:27017,13.232.181.161:27017,13.127.181.251:27017/complaint_system?ssl=true&replicaSet=atlas-3m0o2d-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(dbURI)
  .then(() => console.log("MongoDB Database Connected Successfully! 🎉"))
  .catch((err) => console.error("Database connection failure error:", err.message));

// ✅ REALIGNED INTEGRATED SCHEMA ROUTING (Matches your local model attributes completely)
const complaintSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  comment: String,
  status: { type: String, default: "Pending" },
  agentMessage: { type: String, default: "" } // Ensures the schema maps message attributes properly
}, { timestamps: true });

const Complaint = mongoose.models.Complaint || mongoose.model("Complaint", complaintSchema);

// ✅ BACKEND ENDPOINTS
app.post("/api/complaints", async (req, res) => {
  try {
    const newComplaint = new Complaint(req.body);
    await newComplaint.save();
    res.status(201).json({ success: true, data: newComplaint });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.get("/api/complaints", async (req, res) => {
  try {
    const data = await Complaint.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ FIXED: Captures req.body dynamically to save BOTH status changes and agent message inputs!
app.put("/api/complaints/:id", async (req, res) => {
  try {
    const updated = await Complaint.findByIdAndUpdate(
      req.params.id, 
      req.body, // Dynamic updates pass parameters like status or agentMessage simultaneously
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("Backend running optimally.");
});

const PORT = 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
