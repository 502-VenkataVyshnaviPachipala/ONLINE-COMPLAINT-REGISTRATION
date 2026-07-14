import React, { useState, useEffect } from 'react';

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Synchronizes your beautiful dark mesh gradient background layer seamlessly
  useEffect(() => {
    document.body.style.background = `
      radial-gradient(at 80% 10%, rgba(26, 15, 64, 0.9) 0px, transparent 50%),
      radial-gradient(at 20% 80%, rgba(162, 17, 107, 0.4) 0px, transparent 50%),
      radial-gradient(at 50% 90%, rgba(219, 39, 119, 0.45) 0px, transparent 44%),
      radial-gradient(at 40% 40%, rgba(15, 32, 99, 0.6) 0px, transparent 50%),
      #09090e
    `;
    document.body.style.backgroundAttachment = "fixed"; 
    document.body.style.backgroundSize = "cover";

    return () => { document.body.style.background = ""; };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();

    const existingMails = JSON.parse(localStorage.getItem("contactMessagesVault") || "[]");

    const newMailPayload = {
      id: Date.now(),
      name: name,
      email: email,
      msg: message
    };

    existingMails.unshift(newMailPayload);
    localStorage.setItem("contactMessagesVault", JSON.stringify(existingMails));

    alert("Your support request message has been transmitted successfully! 🎉");
    
    setName("");
    setEmail("");
    setMessage("");
    
    window.location.pathname = '/admin-dashboard';
  };
  return (
    <div style={styles.pageWrapper}>
      
      {/* 🎬 HIGH-TECH NEON BUTTON SHINE PULSE KEYFRAMES */}
      <style>{`
        @keyframes containerReveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes neonPulseGlow {
          0% { box-shadow: 0 0 15px rgba(0, 210, 255, 0.5), 0 0 30px rgba(0, 210, 255, 0.2); }
          50% { box-shadow: 0 0 25px rgba(0, 210, 255, 0.9), 0 0 50px rgba(0, 210, 255, 0.4); transform: scale(1.01); }
          100% { box-shadow: 0 0 15px rgba(0, 210, 255, 0.5), 0 0 30px rgba(0, 210, 255, 0.2); }
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
          <span style={styles.navItemActive} onClick={() => window.location.href = '/contact'}>Contact Us</span>
        </div>
      </nav>

      {/* 📝 CORE SCREEN SPLIT GRID */}
      <div style={styles.container}>
        <div style={styles.splitLayout}>
          
          {/* Left Column Section: Contact Details Card Info */}
          <div style={styles.leftColumn}>
            <h1 style={styles.mainTitle}>Get In Touch</h1>
            <p style={styles.subtext}>Have questions about system approvals or registration steps? Connect with our helpdesk team.</p>
            
            {/* 📍 RE-DESIGNED CORE: Updated address mapping variables applied smoothly */}
            <div style={styles.contactDetailsStack}>
              <p style={styles.detailText}>📍 <strong>Central Head Office:</strong> Govt.MCP-Office, line 7, Kadapa, Andhra Pradesh, India</p>
              <p style={styles.detailText}>📞 <strong>Helpline:</strong> +1 555-0199 (Mon-Fri, 9AM - 6PM)</p>
              <p style={styles.detailText}>✉️ <strong>Email:</strong> support@complaintcare.org</p>
            </div>
          </div>
                    {/* Right Column Section: Frosted Glass Message Box Card Panel */}
          <div style={styles.rightColumn}>
            <div style={styles.messageCard}>
              <h3 style={styles.cardTitle}>Send a Quick Message</h3>
              <form onSubmit={handleSendMessage} style={styles.formStack}>
                <input type="text" placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)} style={styles.inputElement} required />
                <input type="email" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.inputElement} required />
                <textarea placeholder="Type your message here..." value={message} onChange={(e) => setMessage(e.target.value)} style={styles.textareaElement} required />
                <button type="submit" style={styles.glowingBlueButton}>Send Message</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: { display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', fontFamily: 'sans-serif', margin: 0, padding: 0, boxSizing: 'border-box', overflowX: 'hidden' },
  navbar: { backgroundColor: 'rgba(9, 9, 14, 0.4)', height: '65px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 40px', width: '100%', boxSizing: 'border-box', borderBottom: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)' },
  logo: { color: '#ffffff', fontSize: '18px', fontWeight: 'bold', margin: 0, cursor: 'pointer' },
  navLinks: { display: 'flex', gap: '22px' },
  navItem: { color: '#94a3b8', fontSize: '14px', cursor: 'pointer', fontWeight: '500' },
  navItemActive: { color: '#ffffff', fontSize: '14px', cursor: 'pointer', fontWeight: 'bold', borderBottom: '2px solid #ffffff', paddingBottom: '4px' },
  
  container: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 60px', boxSizing: 'border-box', width: '100%' },
  splitLayout: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1100px', gap: '50px', flexWrap: 'wrap' },
  
  leftColumn: { flex: 1, textAlign: 'left', minWidth: '320px' },
  mainTitle: { color: '#ffffff', fontSize: '48px', fontWeight: '800', margin: '0 0 15px 0' },
  subtext: { color: '#cbd5e1', fontSize: '15px', lineHeight: '1.5', margin: '0 0 30px 0', opacity: 0.85 },
  contactDetailsStack: { display: 'flex', flexDirection: 'column', gap: '15px' },
  detailText: { color: '#ffffff', fontSize: '14px', margin: 0, opacity: 0.9 },
  
  rightColumn: { flex: 1, display: 'flex', justifyContent: 'center', minWidth: '320px' },
  messageCard: { background: 'rgba(27, 38, 59, 0.45)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '40px 30px', borderRadius: '20px', boxShadow: '0 25px 50px rgba(0,0,0,0.4)', width: '100%', maxWidth: '460px', boxSizing: 'border-box', animation: 'containerReveal 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards' },
  
  cardTitle: { color: '#ffffff', fontSize: '20px', margin: '0 0 25px 0', fontWeight: '700', textAlign: 'center' },
  formStack: { display: 'flex', flexDirection: 'column', gap: '18px' },
  inputElement: { width: '100%', padding: '12px 14px', fontSize: '14px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.03)', outline: 'none', boxSizing: 'border-box', color: '#ffffff' },
  textareaElement: { width: '100%', height: '110px', padding: '12px 14px', fontSize: '14px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.03)', outline: 'none', resize: 'none', boxSizing: 'border-box', fontFamily: 'sans-serif', color: '#ffffff' },
  glowingBlueButton: { backgroundColor: '#00d2ff', color: '#09090e', border: 'none', padding: '14px', fontSize: '14px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', width: '100%', marginTop: '10px', transition: 'all 0.2s', animation: 'neonPulseGlow 3s infinite ease-in-out' }
};

export default ContactUs;

