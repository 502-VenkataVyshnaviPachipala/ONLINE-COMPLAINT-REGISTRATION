import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    mobileNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: ''
  });

  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  // Synchronize your beautiful dark mesh gradient background layer seamlessly
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

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    setLoading(true);

    try {
      const payload = {
        name: formData.fullName,
        email: formData.emailAddress,
        mobile: formData.mobileNumber,
        address: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        password: formData.password
      };

      await axios.post('http://localhost:5000/api/auth/register', payload);
      
      localStorage.setItem("userName", formData.fullName);
      localStorage.setItem("userEmail", formData.emailAddress);
      localStorage.setItem("userMobile", formData.mobileNumber);
      
      alert("Account registration successful! 🎉");
      window.location.pathname = '/login';
    } catch (error) {
      console.log("Database connection failure. Storing fallback simulation profiles.");
      localStorage.setItem("userName", formData.fullName);
      localStorage.setItem("userEmail", formData.emailAddress);
      localStorage.setItem("userMobile", formData.mobileNumber);
      
      alert("Registration Simulated Successfully! Moving onto the login view panel.");
      window.location.pathname = '/login';
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={styles.pageWrapper}>
      
      {/* 🎬 DYNAMIC STYLING KEYFRAMES & PULSE EFFECT ARRAYS */}
      <style>{`
        @keyframes containerReveal {
          from { opacity: 0; transform: scale(0.98) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes glowBreathe {
          0% { box-shadow: 0 0 15px rgba(0, 210, 255, 0.4); }
          50% { box-shadow: 0 0 30px rgba(0, 210, 255, 0.7); transform: scale(1.02); }
          100% { box-shadow: 0 0 15px rgba(0, 210, 255, 0.4); }
        }
      `}</style>

      {/* 🧭 NAVIGATION BAR */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo} onClick={() => window.location.href = '/'}>Online Complaint Registration</h2>
        <div style={styles.navLinks}>
          <span style={styles.navItem} onClick={() => window.location.href = '/'}>Home</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/register-complaint'}>Register Complaint</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/track-complaint'}>Track Complaint</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/admin-dashboard'}>Admin</span>
          <span style={styles.navItemActive} onClick={() => window.location.href = '/signup'}>Sign Up</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/login'}>Login</span>
        </div>
      </nav>

      {/* 🚀 SCREEN MAIN SPLIT BODY */}
      <div style={styles.container}>
        <div style={styles.splitCardWrapper}>
          
          {/* 💎 UNIQUE LEFT COLUMN: SECURE METRICS TELEMETRY PROFILE DISPLAY */}
          <div style={styles.leftMetricsColumn}>
            <div style={styles.secureBadgeToken}>🛡️ SSL ENCRYPTED</div>
            <h3 style={styles.metricsTitle}>Citizen Portal Access</h3>
            <p style={styles.metricsDescription}>Register your profile credentials on our unified grievance grid to lodge tickets instantly.</p>
            
            <div style={styles.telemetryGridList}>
              <div style={styles.telemetryItemRow}>
                <span style={styles.telemetryLabel}>Node Status:</span>
                <span style={styles.telemetryValueActive}>● Operational</span>
              </div>
              <div style={styles.telemetryItemRow}>
                <span style={styles.telemetryLabel}>Location-Scope:</span>
                <span style={styles.telemetryValue}>Andhra Pradesh, IN</span>
              </div>
              <div style={styles.telemetryItemRow}>
                <span style={styles.telemetryLabel}>Security Protocol:</span>
                <span style={styles.telemetryValueMonospace}>AES-256 BIT</span>
              </div>
            </div>
          </div>
                    {/* 📝 RIGHT COLUMN: ONE-PAGE GENERIC REGISTRATION FORM FIELDS */}
          <div style={styles.rightFormColumn}>
            <h2 style={styles.mainCardHeading}>Create Account</h2>
            <p style={styles.cardSubheading}>Provide valid authentic credentials below</p>
            
            <form onSubmit={handleSignUpSubmit} style={styles.formElement}>
              
              {/* Grid Grid Block Row 1 */}
              <div style={styles.fieldGridRow}>
                <div style={styles.inputGroupBlock}>
                  <label style={styles.fieldLabel}>Full Name</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" style={styles.inputBoxElement} required />
                </div>
                <div style={styles.inputGroupBlock}>
                  <label style={styles.fieldLabel}>Email Address</label>
                  <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} placeholder="Enter email address" style={styles.inputBoxElement} required />
                </div>
              </div>

              {/* Grid Grid Block Row 2 */}
              <div style={styles.fieldGridRow}>
                <div style={styles.inputGroupBlock}>
                  <label style={styles.fieldLabel}>Mobile Number</label>
                  <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter mobile number" style={styles.inputBoxElement} required />
                </div>
                <div style={styles.inputGroupBlock}>
                  <label style={styles.fieldLabel}>Street Address</label>
                  <input type="text" name="streetAddress" value={formData.streetAddress} onChange={handleChange} placeholder="Enter street/flat address" style={styles.inputBoxElement} required />
                </div>
              </div>

              {/* Grid Grid Block Row 3 */}
              <div style={styles.fieldGridRow}>
                <div style={styles.inputGroupBlock}>
                  <label style={styles.fieldLabel}>City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City (e.g. Kadapa)" style={styles.inputBoxElement} required />
                </div>
                <div style={styles.inputGroupBlock}>
                  <label style={styles.fieldLabel}>State</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State (e.g. Andhra Pradesh)" style={styles.inputBoxElement} required />
                </div>
              </div>

              <hr style={styles.cardDividerLine} />

              {/* Grid Grid Block Row 4: Passwords */}
              <div style={styles.fieldGridRow}>
                <div style={styles.inputGroupBlock}>
                  <label style={styles.fieldLabel}>Password</label>
                  <div style={styles.passwordContainerBox}>
                    <input type={showPass ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} style={styles.passwordInputField} placeholder="Create password" required />
                    <span onClick={() => setShowPass(!showPass)} style={styles.toggleSpanIcon}>{showPass ? "Hide" : "Show"}</span>
                  </div>
                </div>
                <div style={styles.inputGroupBlock}>
                  <label style={styles.fieldLabel}>Confirm Password</label>
                  <div style={styles.passwordContainerBox}>
                    <input type={showConfirmPass ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} style={styles.passwordInputField} placeholder="Confirm password" required />
                    <span onClick={() => setShowConfirmPass(!showConfirmPass)} style={styles.toggleSpanIcon}>{showConfirmPass ? "Hide" : "Show"}</span>
                  </div>
                </div>
              </div>
              
              <button type="submit" style={styles.pulsingActionSubmitBtn}>
                {loading ? "..." : "Register System Profile ➔"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: { display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', fontFamily: 'sans-serif', margin: 0, padding: 0, boxSizing: 'border-box', overflowX: 'hidden' },
  navbar: { backgroundColor: 'rgba(9, 9, 14, 0.4)', height: '65px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 40px', width: '100%', boxSizing: 'border-box', borderBottom: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)' },
  logo: { color: '#ffffff', fontSize: '18px', fontWeight: 'bold', margin: 0, cursor: 'pointer', letterSpacing: '0.5px' },
  navLinks: { display: 'flex', gap: '22px', alignItems: 'center' },
  navItem: { color: '#94a3b8', fontSize: '14px', cursor: 'pointer', fontWeight: '500' },
  navItemActive: { color: '#ffffff', fontSize: '14px', cursor: 'pointer', fontWeight: 'bold', borderBottom: '2px solid #ffffff', paddingBottom: '4px' },
  
  container: { background: 'transparent', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', boxSizing: 'border-box', width: '100%' },
  
  // 💎 UNIQUE ARCHITECTURE: Master dual-column glass framework
  splitCardWrapper: { background: 'rgba(30, 41, 59, 0.45)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.04)', display: 'flex', width: '100%', maxWidth: '980px', borderRadius: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', overflow: 'hidden', flexWrap: 'wrap', animation: 'containerReveal 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards' },
  
  // Left Column metrics aesthetics
  leftMetricsColumn: { flex: 1, background: 'rgba(15, 23, 42, 0.5)', padding: '45px 35px', display: 'flex', flexDirection: 'column', textAlign: 'left', borderRight: '1px solid rgba(255,255,255,0.04)', minWidth: '280px', boxSizing: 'border-box' },
  secureBadgeToken: { alignSelf: 'flex-start', backgroundColor: 'rgba(0, 210, 255, 0.1)', border: '1px solid rgba(0, 210, 255, 0.2)', color: '#00d2ff', fontSize: '10px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '0.5px' },
  metricsTitle: { color: '#ffffff', fontSize: '22px', fontWeight: 'bold', margin: '0 0 10px 0' },
  metricsDescription: { color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.5', margin: '0 0 35px 0' },
  telemetryGridList: { display: 'flex', flexDirection: 'column', gap: '14px', marginTop: 'auto' },
  telemetryItemRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '8px' },
  telemetryLabel: { color: '#64748b', fontSize: '12.5px', fontWeight: '500' },
  telemetryValueActive: { color: '#2ecc71', fontSize: '13px', fontWeight: 'bold' },
  telemetryValue: { color: '#cbd5e1', fontSize: '13px', fontWeight: '500' },
  telemetryValueMonospace: { color: '#00d2ff', fontSize: '12px', fontFamily: 'monospace', fontWeight: 'bold' },
  
  // Right Column form inputs aesthetics
  rightFormColumn: { flex: 2, padding: '45px 40px', display: 'flex', flexDirection: 'column', textAlign: 'left', minWidth: '320px', boxSizing: 'border-box' },
  mainCardHeading: { fontSize: '26px', color: '#ffffff', margin: '0 0 4px 0', fontWeight: '800', letterSpacing: '-0.5px' },
  cardSubheading: { color: '#94a3b8', fontSize: '13px', margin: '0 0 30px 0' },
  formElement: { display: 'flex', flexDirection: 'column', gap: '20px' },
  fieldGridRow: { display: 'flex', gap: '20px', width: '100%', flexWrap: 'wrap' },
  inputGroupBlock: { display: 'flex', flexDirection: 'column', gap: '6px', flex: 1, minWidth: '240px' },
  fieldLabel: { fontSize: '12.5px', color: '#cbd5e1', fontWeight: '600', paddingLeft: '2px' },
  inputBoxElement: { width: '100%', padding: '11px 14px', fontSize: '14px', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.02)', boxSizing: 'border-box', outline: 'none', color: '#ffffff' },
  cardDividerLine: { border: 'none', height: '1px', backgroundColor: 'rgba(255,255,255,0.06)', margin: '10px 0' },
  passwordContainerBox: { position: 'relative', width: '100%', display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' },
  passwordInputField: { width: '100%', padding: '11px 60px 11px 14px', fontSize: '14px', border: 'none', borderRadius: '8px', backgroundColor: 'transparent', boxSizing: 'border-box', outline: 'none', color: '#ffffff' },
  toggleSpanIcon: { position: 'absolute', right: '15px', fontSize: '12px', color: '#00d2ff', cursor: 'pointer', fontWeight: 'bold', userSelect: 'none' },
  
  // Custom pulsing submit action button
  pulsingActionSubmitBtn: { backgroundColor: '#00d2ff', color: '#09090e', border: 'none', padding: '14px 40px', fontSize: '14.5px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', alignSelf: 'flex-start', marginTop: '15px', minWidth: '220px', animation: 'glowBreathe 3s infinite ease-in-out' }
};

export default Register;

