const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint'); 

// 📥 1. USER SUBMIT ROUTE (Handles BOTH / and /submit to prevent frontend errors)
router.post(['/', '/submit'], async (req, res) => {
  try {
    const { name, address, city, state, pincode, description, comment } = req.body;

    const newComplaint = new Complaint({
      name,
      address,
      city,
      state,
      pincode,
      description: description || comment || "No description provided",
      status: 'Pending'
    });

    await newComplaint.save();
    res.status(201).json({ success: true, message: 'Complaint registered in database successfully!', data: newComplaint });
  } catch (error) {
    console.error("Submission failed:", error);
    res.status(500).json({ success: false, message: 'Server error saving complaint', error: error.message });
  }
});

// 📤 2. FETCH ALL LIVE COMPLAINTS (Handles BOTH / and /all to support Agent and Admin screens)
router.get(['/', '/all'], async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    // Returns data both as a direct array and nested object wrapper to support both your fetch styles
    if (req.path === '/all') {
      return res.status(200).json({ success: true, data: complaints });
    }
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error fetching complaints', error: error.message });
  }
});

// 🔄 3. STATUS UPDATE ENDPOINTS (Handles BOTH direct id routing and /update/:id pathways)
router.put(['/:id', '/update/:id'], async (req, res) => {
  try {
    const { status, agentMessage } = req.body;
    
    const updatedComplaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { status, agentMessage },
      { new: true } 
    );

    if (!updatedComplaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    res.status(200).json({ success: true, message: 'Status updated successfully!', data: updatedComplaint });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error updating status', error: error.message });
  }
});

// 💬 4. AGENT MESSAGE BLOCK (Handles custom message routing loops safely)
router.put('/message/:id', async (req, res) => {
  try {
    const { agentMessage } = req.body;
    const updatedComplaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      { agentMessage },
      { new: true }
    );
    res.status(200).json({ success: true, data: updatedComplaint });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
