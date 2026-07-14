import React, { useState, useEffect, useMemo } from 'react';
import homeImg from '../assets/home.webp';

function Home() {
  // ⚡ IMMUTABLE DYNAMIC TYPING STRINGS ARRAY
  const wordsToType = useMemo(() => ["Raise Your Concern,", "File Your Grievance,", "Register Your Issue,"], []);
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // 📡 BACKGROUND MESH GRADIENT EFFECT
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
      document.body.style.backgroundAttachment = "";
      document.body.style.backgroundSize = "";
    };
  }, []);

  // 📝 ACTIVE TYPEWRITER STATE CONTROLLER LOOP
  useEffect(() => {
    const activeFullWord = wordsToType[currentWordIndex];
    
    const handleTypingTick = () => {
      if (!isDeleting) {
        setCurrentText(activeFullWord.substring(0, currentText.length + 1));
        if (currentText === activeFullWord) {
          setTypingSpeed(2000); 
          setIsDeleting(true);
        } else {
          setTypingSpeed(100);
        }
      } else {
        setCurrentText(activeFullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordsToType.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const typingTimerHook = setTimeout(handleTypingTick, typingSpeed);
    return () => clearTimeout(typingTimerHook);
  }, [currentText, isDeleting, typingSpeed, currentWordIndex, wordsToType]);

  return (
    <div style={styles.pageWrapper}>
      
      {/* 🎬 MOTION TRANSITION KEYFRAMES AND FLASHING CURSOR STRIPS */}
      <style>{`
        @keyframes navDrop {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes blinkCursorMark {
          50% { border-color: transparent; }
        }

        @keyframes neonGlow {
          0% { box-shadow: 0 0 15px rgba(0, 210, 255, 0.5), 0 0 30px rgba(0, 210, 255, 0.2); }
          50% { box-shadow: 0 0 25px rgba(0, 210, 255, 0.8), 0 0 50px rgba(0, 210, 255, 0.4); transform: scale(1.02); }
          100% { box-shadow: 0 0 15px rgba(0, 210, 255, 0.5), 0 0 30px rgba(0, 210, 255, 0.2); }
        }
      `}</style>

      {/* 🧭 NAVIGATION BAR */}
      <nav style={{...styles.navbar, animation: 'navDrop 0.6s ease-out forwards'}}>
        <h2 style={styles.logo} onClick={() => window.location.href = '/'}>
          Online Complaint Registration
        </h2>
        <div style={styles.navLinks}>
          <span style={styles.navItemActive} onClick={() => window.location.href = '/'}>Home</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/register-complaint'}>Register Complaint</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/track-complaint'}>Track Complaint</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/admin-dashboard'}>Admin</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/contact'}>Contact Us</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/signup'}>Sign Up</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/login'}>Login</span>
          <button onClick={() => window.location.href = '/login'} style={styles.logoutButton}>Logout</button>
        </div>
      </nav>

      {/* 🚀 HERO CONTAINER BODY */}
      <div style={styles.container}>
        <div style={styles.heroSection}>
          
          {/* Left Column: Graphic Illustration Card */}
          <div style={{...styles.leftColumn, animation: 'slideUpFade 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.2s forwards'}}>
            <div style={styles.imageContainerCard}>
              <img 
                src={homeImg} 
                alt="Online Complaint Registration Support" 
                style={styles.imageAsset}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Right Column: Title Text with Typewriter Typing Heading Loop */}
          <div style={{...styles.rightColumn, animation: 'slideUpFade 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.4s forwards'}}>
            <h1 style={styles.heading}>
              <span style={styles.typewriterTextSpan}>{currentText}</span>
              <br />We Are Here to Help
            </h1>
            <p style={styles.subheading}>
              Register your complaint online easily and get it resolved as soon as possible.
            </p>
            
            {/* BLUE SHINING GLOWING BUTTONS LINK CLUSTER */}
            <div style={styles.buttonGroup}>
              <button onClick={() => window.location.href = '/register-complaint'} style={styles.primaryGlowButton}>
                Register a Complaint
              </button>
              <button onClick={() => window.location.href = '/track-complaint'} style={styles.secondaryGlowButton}>
                Track Status
              </button>
            </div>
          </div>

        </div>
      </div>
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
  logoutButton: { backgroundColor: '#ef4444', color: '#ffffff', border: 'none', padding: '6px 14px', fontSize: '13px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontFamily: 'sans-serif' },
  
  container: { background: 'transparent', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 60px', boxSizing: 'border-box', width: '100%' },
  heroSection: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1350px', width: '100%', gap: '60px', flexWrap: 'wrap-reverse' },
  
  leftColumn: { opacity: 0, flex: 1.2, display: 'flex', justifyContent: 'center', minWidth: '350px' }, 
  imageContainerCard: { backgroundColor: '#ffffff', borderRadius: '16px', padding: '16px', width: '100%', maxWidth: '620px', boxSizing: 'border-box', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' },
  imageAsset: { width: '100%', height: 'auto', display: 'block', borderRadius: '8px' },
  
  rightColumn: { opacity: 0, flex: 1, textAlign: 'left', minWidth: '350px' }, 
  heading: { fontSize: '50px', color: '#ffffff', margin: '0 0 16px 0', fontWeight: '800', fontFamily: 'sans-serif', lineHeight: '1.25', letterSpacing: '-0.5px' },
  typewriterTextSpan: { borderRight: '3px solid #00d2ff', paddingRight: '4px', whiteSpace: 'nowrap', animation: 'blinkCursorMark 0.75s step-end infinite' },
  subheading: { fontSize: '18px', color: '#cbd5e1', opacity: '0.85', lineHeight: '1.6', margin: '0 0 35px 0', fontFamily: 'sans-serif' },
  buttonGroup: { display: 'flex', gap: '20px' },
  
  primaryGlowButton: { backgroundColor: '#00d2ff', color: '#09090e', border: 'none', padding: '14px 28px', fontSize: '15px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', animation: 'neonGlow 3s infinite ease-in-out', transition: 'transform 0.2s ease-in-out' },
  secondaryGlowButton: { backgroundColor: '#00d2ff', color: '#09090e', border: 'none', padding: '14px 28px', fontSize: '15px', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold', animation: 'neonGlow 3s infinite ease-in-out', transition: 'transform 0.2s ease-in-out' }
};

export default Home;
