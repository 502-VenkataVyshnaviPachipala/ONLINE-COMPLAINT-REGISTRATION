const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  pincode: {
    type: String,
    required: true,
    trim: true
  },
  // FIXED: Realigned property key from 'description' to 'comment' to perfectly accept your React input payload
  comment: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Pending', 
    enum: ['Pending', 'In Progress', 'Resolved']
  },
  agentMessage: {
    type: String,
    default: ''
  }
}, { 
  // ENTERPRISE HIGHLIGHT: Automatically adds createdAt and updatedAt fields for perfect timeline tracking
  timestamps: true 
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
