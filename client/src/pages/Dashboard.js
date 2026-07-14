import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [formData, setFormData] = useState({
    name: localStorage.getItem("userName") || "",
    email: localStorage.getItem("userEmail") || "",
    mobile: localStorage.getItem("userMobile") || "",
    address: '',
    city: '',
    state: '',
    pincode: '',
    description: ''
  });

  const [category, setCategory] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // Synchronizes your beautiful dark mesh gradient background layer seamlessly
  useEffect(() => {
    document.body.style.background = `
      radial-gradient(at 80% 10%, rgba(26, 15, 64, 0.9) 0px, transparent 50%),
      radial-gradient(at 20% 80%, rgba(162, 17, 107, 0.4) 0px, transparent 50%),
      radial-gradient(at 50% 90%, rgba(219, 39, 119, 0.45) 0px, transparent 45%),
      radial-gradient(at 40% 40%, rgba(15, 32, 99, 0.6) 0px, transparent 50%),
      #09090e
    `;
    document.body.style.backgroundAttachment = "fixed"; 
    document.body.style.backgroundSize = "cover";

    return () => {
      document.body.style.background = "";
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      alert("Please select a complaint category!");
      return;
    }

    // ⚡ FIX: Unique tracking token ID auto-generated right here
    const randomTicketId = "CMP" + Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("lastGeneratedId", randomTicketId);

    const payload = {
      _id: randomTicketId,
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode,
      category: category,
      comment: formData.description,
      attachmentName: selectedFile ? selectedFile.name : "No file attached",
      status: "Pending"
    };

    // 🌟 THE MULTI-COMPLAINT TRACKER PILE REPAIR RULE:
    // Download any existing data history arrays, or open a fresh blank collection list
    const currentTrackerStream = JSON.parse(localStorage.getItem("allComplaintsTracker") || "[]");
    
    // Inject the new payload ticket block directly onto the front index row of our collection stream
    currentTrackerStream.unshift(payload);
    
    // Lock the updated pile array permanently back into your browser cache history vault
    localStorage.setItem("allComplaintsTracker", JSON.stringify(currentTrackerStream));
    localStorage.setItem("userComplaint", JSON.stringify(payload));

    // Prepare Multipart Form Data stream payload
    const submissionData = new FormData();
    submissionData.append("_id", randomTicketId);
    submissionData.append("name", formData.name);
    submissionData.append("address", formData.address);
    submissionData.append("city", formData.city);
    submissionData.append("state", formData.state);
    submissionData.append("pincode", formData.pincode);
    submissionData.append("category", category);
    submissionData.append("comment", payload.comment);
    if (selectedFile) {
      submissionData.append("file", selectedFile);
    }

    try {
      await axios.post('http://localhost:5000/api/complaints', submissionData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    } catch (error) {
      console.log("Database connection failure fallback logging initialized.");
    }

    // Direct routing flow straight onto the Success Token Card view
    window.location.pathname = '/success';
  };
  return (
    <div style={styles.pageWrapper}>
      
      {/* 🎬 MOTION MOVEMENTS KEYFRAMES */}
      <style>{`
        @keyframes formSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rowFadeIn {
          from { opacity: 0; transform: translateX(-15px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes neonPulseGlow {
          0% { box-shadow: 0 0 15px rgba(0, 210, 255, 0.5), 0 0 30px rgba(0, 210, 255, 0.2); }
          50% { box-shadow: 0 0 25px rgba(0, 210, 255, 0.8), 0 0 50px rgba(0, 210, 255, 0.4); transform: scale(1.01); }
          100% { box-shadow: 0 0 15px rgba(0, 210, 255, 0.5), 0 0 30px rgba(0, 210, 255, 0.2); }
        }
      `}</style>

      {/* 🧭 NAVIGATION BAR */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo} onClick={() => window.location.href = '/'}>Online Complaint Registration</h2>
        <div style={styles.navLinks}>
          <span style={styles.navItem} onClick={() => window.location.href = '/'}>Home</span>
          <span style={styles.navItemActive} onClick={() => window.location.href = '/register-complaint'}>Register Complaint</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/track-complaint'}>Track Complaint</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/admin-dashboard'}>Admin</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/contact'}>Contact Us</span>
        </div>
      </nav>

      {/* 📝 SCREEN MAIN BODY */}
      <main style={styles.mainContent}>
        <div style={styles.detailsCard}>
          <h3 style={styles.cardHeading}>Register Complaint Form</h3>
          <form onSubmit={handleSubmit} style={styles.formElement}>
            
            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.formLabel}>Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" style={styles.inputField} required />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.formLabel}>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email address" style={styles.inputField} required />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.formLabel}>Mobile Number</label>
                <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter mobile number" style={styles.inputField} required />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.formLabel}>Street Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter flat/street address" style={styles.inputField} required />
              </div>
            </div>

            <div style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.formLabel}>City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City (e.g. Kadapa)" style={styles.inputField} required />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.formLabel}>State</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State (e.g. Andhra Pradesh)" style={styles.inputField} required />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.formLabel}>Pincode</label>
                <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" style={styles.inputField} required />
              </div>
            </div>

            <hr style={styles.dividerLine} />

            <div style={styles.dropdownGroup}>
              <label style={styles.dropdownLabel}>Category</label>
              <div style={styles.selectWrapper}>
                <select value={category} onChange={(e) => setCategory(e.target.value)} style={styles.selectInput} required>
                  <option value="" disabled>Select Category</option>
                  <option value="Street Lights">Street Lights</option>
                  <option value="Water Supply">Water Supply</option>
                  <option value="Road Damage">Road Damage</option>
                  <option value="Garbage Collection">Garbage Collection</option>
                  <option value="Drainage">Drainage</option>
                  <option value="Electricity">Electricity</option>
                  <option value="Public Transport">Public Transport</option>
                  <option value="Others">Others</option>
                </select>
                <span style={styles.dropdownArrow}>▾</span>
              </div>
            </div>

            <div style={styles.dropdownGroup}>
              <label style={styles.dropdownLabel}>Complaint Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Provide explicit details about the issue here..." style={styles.textareaInput} required />
            </div>

            <div style={styles.dropdownGroup}>
              <label style={styles.dropdownLabel}>Attach Proof (Photos / Files Optional)</label>
              <div style={styles.fileInputCustomWrapper}>
                <input type="file" id="fileAttachment" accept="image/*,application/pdf" onChange={handleFileChange} style={styles.hiddenFileInput} />
                <label htmlFor="fileAttachment" style={styles.fileLabelBtn}>
                  📁 {selectedFile ? "Change Selected File" : "Choose Photo or File"}
                </label>
                {selectedFile && (
                  <span style={styles.fileNameBadge}>
                    Selected: <strong>{selectedFile.name}</strong> ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                  </span>
                )}
              </div>
            </div>

            <button type="submit" style={styles.glowingButton}>Submit To Database</button>
          </form>
        </div>
      </main>
    </div>
  );
}

const styles = {
  pageWrapper: { display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', margin: 0, padding: 0, boxSizing: 'border-box', overflowX: 'hidden' },
  navbar: { backgroundColor: 'rgba(9, 9, 14, 0.4)', height: '65px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 40px', width: '100%', boxSizing: 'border-box', borderBottom: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)' },
  logo: { color: '#ffffff', fontSize: '18px', fontWeight: 'bold', margin: 0, cursor: 'pointer', fontFamily: 'sans-serif', letterSpacing: '0.5px' },
  navLinks: { display: 'flex', gap: '22px', alignItems: 'center' },
  navItem: { color: '#94a3b8', fontSize: '14px', cursor: 'pointer', fontWeight: '500', fontFamily: 'sans-serif' },
  navItemActive: { color: '#ffffff', fontSize: '14px', cursor: 'pointer', fontWeight: 'bold', fontFamily: 'sans-serif', borderBottom: '2px solid #ffffff', paddingBottom: '4px' },
  mainContent: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', boxSizing: 'border-box', width: '100%' },
  detailsCard: { background: 'rgba(27, 38, 59, 0.45)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.05)', width: '100%', maxWidth: '720px', padding: '45px 40px', borderRadius: '20px', boxShadow: '0 25px 50px rgba(0,0,0,0.4)', boxSizing: 'border-box', animation: 'formSlideUp 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards' },
  cardHeading: { fontSize: '24px', color: '#ffffff', margin: '0 0 30px 0', fontWeight: '800', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', fontFamily: 'sans-serif', letterSpacing: '-0.5px' },
  formElement: { display: 'flex', flexDirection: 'column', gap: '22px' },
  row: { display: 'flex', gap: '20px', width: '100%', flexWrap: 'wrap' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, minWidth: '220px' },
  formLabel: { fontSize: '13px', color: '#cbd5e1', fontWeight: '600', textAlign: 'left', opacity: '0.9', paddingLeft: '2px' },
  inputField: { width: '100%', padding: '12px 14px', fontSize: '14px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.03)', outline: 'none', boxSizing: 'border-box', color: '#ffffff' },
  dividerLine: { border: 'none', height: '1px', backgroundColor: 'rgba(255,255,255,0.08)', margin: '15px 0' },
  dropdownGroup: { display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left', width: '100%' },
  dropdownLabel: { fontSize: '14px', fontWeight: 'bold', color: '#ffffff', opacity: '0.95', paddingLeft: '2px' },
  selectWrapper: { position: 'relative', width: '100%' },
  selectInput: { width: '100%', padding: '12px 15px', fontSize: '14px', color: '#ffffff', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', backgroundColor: '#1e293b', outline: 'none', appearance: 'none', cursor: 'pointer' },
  dropdownArrow: { position: 'absolute', right: '15px', top: '12px', color: '#94a3b8', fontSize: '16px', pointerEvents: 'none' },textareaInput: { width: '100%', height: '90px', padding: '12px 15px', fontSize: '14px', color: '#ffffff', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.03)', outline: 'none', resize: 'none', fontFamily: 'sans-serif', boxSizing: 'border-box' },glowingButton: { backgroundColor: '#00d2ff', color: '#09090e', border: 'none', padding: '15px', fontSize: '15px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', width: '100%', marginTop: '15px', animation: 'neonPulseGlow 3s infinite ease-in-out' },fileInputCustomWrapper: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', width: '100%' },hiddenFileInput: { display: 'none' },fileLabelBtn: { backgroundColor: 'rgba(255,255,255,0.03)', color: '#00d2ff', border: '1px dashed #00d2ff', padding: '12px 20px', borderRadius: '8px', cursor: 'pointer', fontSize: '13.5px', fontWeight: 'bold', display: 'inline-block', width: '100%', boxSizing: 'border-box', textAlign: 'center' },fileNameBadge: { fontSize: '13px', color: '#38bdf8', textAlign: 'left', wordBreak: 'break-all', paddingLeft: '2px' }};export default Dashboard;

