import React, { useEffect } from 'react';

function Success() {
  // Pull out the freshly generated random ticket code from local storage or make a test one
  const complaintId = localStorage.getItem("lastGeneratedId") || "CMP" + Math.floor(100000 + Math.random() * 900000);

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

  return (
    <div style={styles.pageWrapper}>
      {/* 🧭 NAVIGATION BAR */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo} onClick={() => window.location.href = '/'}>Online Complaint Registration</h2>
        <div style={styles.navLinks}>
          <span style={styles.navItem} onClick={() => window.location.href = '/'}>Home</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/register-complaint'}>Register Complaint</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/track-complaint'}>Track Complaint</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/admin-dashboard'}>Admin</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/contact'}>Contact Us</span>
        </div>
      </nav>

      {/* 🚀 CENTERED CARD VIEWPORT */}
      <div style={styles.container}>
        <div style={styles.successCard}>
          
          {/* Big Green Success Check Circle Icon */}
          <div style={styles.checkCircle}>✓</div>
          
          <h2 style={styles.mainTitle}>Complaint Registered<br />Successfully</h2>
          <p style={styles.subtitle}>Your complaint has been submitted successfully.</p>
          
          {/* Highlight Badge container for the Ticket code string box */}
          <div style={styles.idBoxContainer}>
            <p style={styles.idLabel}>Your Complaint ID</p>
            <div style={styles.idDisplayField}>{complaintId}</div>
          </div>

          {/* Action Navigation Button Groups */}
          <div style={styles.btnRow}>
            <button onClick={() => window.location.href = '/track-complaint'} style={styles.trackBtn}>
              Track Complaint
            </button>
            <button onClick={() => window.location.href = '/'} style={styles.homeBtn}>
              Go Home ➔
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: { display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', fontFamily: 'sans-serif', margin: 0, padding: 0, boxSizing: 'border-box' },
  navbar: { backgroundColor: 'rgba(9, 9, 14, 0.4)', height: '65px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 40px', width: '100%', boxSizing: 'border-box', borderBottom: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)' },
  logo: { color: '#ffffff', fontSize: '18px', fontWeight: 'bold', margin: 0, cursor: 'pointer' },
  navLinks: { display: 'flex', gap: '22px' },
  navItem: { color: '#94a3b8', fontSize: '14px', cursor: 'pointer', fontWeight: '500' },
  
  container: { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', boxSizing: 'border-box' },
  successCard: { backgroundColor: '#f8fafc', width: '100%', maxWidth: '520px', padding: '45px 35px', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', textAlign: 'center', boxSizing: 'border-box' },
  
  checkCircle: { width: '70px', height: '70px', backgroundColor: '#22c55e', color: '#ffffff', fontSize: '36px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', margin: '0 auto 25px auto', boxShadow: '0 4px 15px rgba(34,197,94,0.3)' },
  mainTitle: { fontSize: '26px', color: '#0f172a', margin: '0 0 10px 0', fontWeight: '800', lineHeight: '1.3' },
  subtitle: { fontSize: '14px', color: '#475569', margin: '0 0 35px 0', fontWeight: '500' },
  
  idBoxContainer: { backgroundColor: '#fef08a', border: '1px dashed #eab308', borderRadius: '8px', padding: '20px', marginBottom: '35px' },
  idLabel: { margin: '0 0 6px 0', fontSize: '13px', color: '#854d0e', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' },
  idDisplayField: { fontSize: '32px', color: '#1e3a8a', fontWeight: '900', letterSpacing: '1px' },
  
  btnRow: { display: 'flex', gap: '15px', justifyContent: 'center', width: '100%' },
  trackBtn: { flex: 1, backgroundColor: '#00d2ff', color: '#09090e', border: 'none', padding: '14px', fontSize: '14px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,210,255,0.3)' },
  homeBtn: { flex: 1, backgroundColor: 'rgba(15,23,42,0.05)', color: '#0f172a', border: '1px solid #cbd5e1', padding: '14px', fontSize: '14px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold' }
};

export default Success;
