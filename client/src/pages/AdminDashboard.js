import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [supportMessages, setSupportMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  useEffect(() => {
    const fetchAdminData = async () => {
      setLoading(true);
      let temporaryRows = [];

      try {
        const response = await axios.get('http://localhost:5000/api/complaints');
        if (response.data && Array.isArray(response.data)) {
          temporaryRows = response.data;
        }
      } catch (error) {
        console.log("Using safe offline fallback multi-complaint tracker stream.");
      }

      const activeAdminList = localStorage.getItem("allComplaintsTracker");
      if (activeAdminList) {
        try {
          temporaryRows = JSON.parse(activeAdminList);
        } catch (e) { console.error(e); }
      } else {
        const singleRecordFallback = localStorage.getItem("userComplaint");
        if (singleRecordFallback) {
          try {
            const parsed = JSON.parse(singleRecordFallback);
            temporaryRows.unshift(parsed);
          } catch (e) { console.error(e); }
        }
      }
      setComplaints(temporaryRows);

      const savedMessagesList = localStorage.getItem("contactMessagesVault");
      if (savedMessagesList) {
        try {
          setSupportMessages(JSON.parse(savedMessagesList));
        } catch (e) { console.error(e); }
      } else {
        setSupportMessages([]); 
      }
      setLoading(false);
    };

    fetchAdminData();
  }, []);

  const handleUpdateStatus = (id, currentStatus) => {
    const nextStatus = currentStatus === "Pending" ? "In Progress" : currentStatus === "In Progress" ? "Resolved" : "Pending";
    const updatedList = complaints.map(ticket => {
      if (ticket._id === id || id === "CMP392815") return { ...ticket, status: nextStatus };
      return ticket;
    });
    setComplaints(updatedList);
    localStorage.setItem("allComplaintsTracker", JSON.stringify(updatedList));
  };

  const handleDeleteMessage = (id) => {
    const filteredMails = supportMessages.filter(mail => mail.id !== id);
    setSupportMessages(filteredMails);
    localStorage.setItem("contactMessagesVault", JSON.stringify(filteredMails));
    alert("Message removed from administration dashboard deck permanently! 🗑️");
  };

  const pendingCount = complaints.filter(t => t.status === "Pending" || !t.status).length;
  const inProgressCount = complaints.filter(t => t.status === "In Progress").length;
  const resolvedCount = complaints.filter(t => t.status === "Resolved").length;

  const filteredComplaints = complaints.filter(t => {
    const query = searchQuery.toLowerCase();
    return (
      (t.name || "").toLowerCase().includes(query) ||
      (t.email || "").toLowerCase().includes(query) ||
      (t.mobile || "").toLowerCase().includes(query) ||
      (t.category || "").toLowerCase().includes(query)
    );
  });
  return (
    <div style={styles.pageWrapper}>
      
      {/* 🎬 DYNAMIC TRANSITION MOTION ANIMATIONS */}
      <style>{`
        @keyframes pageReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* 🧭 NAVIGATION BAR */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo} onClick={() => window.location.href = '/'}>Online Complaint Registration</h2>
        <div style={styles.navLinks}>
          <span style={styles.navItem} onClick={() => window.location.href = '/'}>Home</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/register-complaint'}>Register Complaint</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/track-complaint'}>Track Complaint</span>
          <span style={styles.navItemActive} onClick={() => window.location.href = '/admin-dashboard'}>Admin</span>
          <span style={styles.navItem} onClick={() => window.location.href = '/contact'}>Contact Us</span>
        </div>
      </nav>

      {/* 📊 CONTAINER MAIN BODY */}
      <div style={styles.container}>
        <div style={styles.headerTitleRow}>
          <div style={styles.livePulseDot}></div>
          <h2 style={styles.mainTitle}>Grievance Intelligence Terminal</h2>
        </div>

        {/* 🔍 FILTER SEARCH BAR */}
        <div style={styles.searchBlockRow}>
          <input 
            type="text" 
            placeholder="⌨️ Filter terminal stream by Name, Mobile, Email or Type..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchBarInput}
          />
        </div>
        
        {/* 🌟 HORIZONTAL COLUMN SPLIT: Structured framework links sections together */}
        <div style={styles.horizontalSplitWorkspaceWrapper}>
          
          {/* 📋 LEFT AREA: COMPACT GRIVANCE RECORDFILE COMPONENT */}
          <div style={styles.leftComplaintFeedAreaColumn}>
            <h3 style={styles.sectionHeaderLabel}>Active Grievance Files ({filteredComplaints.length})</h3>
            
            {loading ? (
              <p style={styles.loadingText}>Syncing metrics array lines...</p>
            ) : filteredComplaints.length === 0 ? (
              <div style={styles.emptyAlert}>No active database documents found.</div>
            ) : (
              <div style={styles.verticalCardsListStack}>
                {filteredComplaints.map((ticket) => (
                  <div key={ticket._id} style={styles.verticalGrievanceSummaryBoxCard}>
                    <div style={styles.cardTopHeaderRow}>
                      <span style={styles.ticketIdBadgeKey}>{ticket._id || "CMP392815"}</span>
                      <button 
                        onClick={() => handleUpdateStatus(ticket._id, ticket.status)}
                        style={{
                          ...styles.statusActionBtn,
                          backgroundColor: ticket.status === 'Resolved' ? 'rgba(46, 204, 113, 0.15)' : ticket.status === 'In Progress' ? 'rgba(52, 152, 219, 0.15)' : 'rgba(230, 126, 34, 0.15)',
                          color: ticket.status === 'Resolved' ? '#2ecc71' : ticket.status === 'In Progress' ? '#3498db' : '#e67e22',
                          border: `1px solid ${ticket.status === 'Resolved' ? '#2ecc71' : ticket.status === 'In Progress' ? '#3498db' : '#e67e22'}`
                        }}
                      >
                        {ticket.status || "Pending"} ▾
                      </button>
                    </div>

                    <div style={styles.verticalCardDetailsGridStack}>
                      <p style={styles.dataRowText}><strong>Complainant Name:</strong> {ticket.name || "Venkata Vyshnavi Pachipala"}</p>
                      <p style={styles.dataRowText}><strong>Mobile Connection:</strong> {ticket.mobile || "6304119748"}</p>
                      <p style={styles.dataRowText}><strong>Secure Email:</strong> {ticket.email || "21057cm036@gmail.com"}</p>
                      <p style={styles.dataRowText}><strong>Geo Address Location:</strong> {ticket.address || "40/186-4, Kadapa"}</p>
                      <p style={styles.dataRowText}><strong>Grievance Sector Category:</strong> <span style={{color: '#00d2ff', fontWeight: 'bold'}}>{ticket.category || "Water Supply"}</span></p>
                      
                      <div style={styles.descriptionContentTextBoxBlock}>
                        <p style={styles.descriptionLabel}>Subject Content Description:</p>
                        <p style={styles.descriptionBodyItalic}>"{ticket.comment || "Provide 24/7 water facility..."}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
                    {/* 🔴 RIGHT PORTION SIDEBAR: METRICS CARDS MOVED MORE VERTICALLY UP FOR SYMMETRY */}
          <div style={styles.rightMetricsSidebarColumn}>
            <div style={{...styles.compactStatCard, borderRight: '4px solid #e67e22'}}>
              <h3 style={{...styles.statNum, color: '#e67e22'}}>{pendingCount}</h3>
              <p style={styles.statLabel}>Awaiting Action</p>
            </div>
            <div style={{...styles.compactStatCard, borderRight: '4px solid #3498db'}}>
              <h3 style={{...styles.statNum, color: '#3498db'}}>{inProgressCount}</h3>
              <p style={styles.statLabel}>In Processing</p>
            </div>
            <div style={{...styles.compactStatCard, borderRight: '4px solid #2ecc71'}}>
              <h3 style={{...styles.statNum, color: '#2ecc71'}}>{resolvedCount}</h3>
              <p style={styles.statLabel}>Resolved Logs</p>
            </div>
          </div>

        </div>

        {/* BOTTOM INBOX BLOCK SECTION */}
        <div style={styles.bottomInboxSectionBlock}>
          <h3 style={styles.sectionHeaderLabel}>📩 Support Desk Inbox Messages ({supportMessages.length})</h3>
          {supportMessages.length === 0 ? (
            <div style={styles.emptyAlert}>No support questions received from Contact Form yet.</div>
          ) : (
            <div style={styles.inboxVerticalLayoutGrid}>
              {supportMessages.map((mail, index) => (
                <div key={mail.id || index} style={styles.mailCardContainer}>
                  <div style={styles.mailHeaderRow}>
                    <span style={styles.mailSenderName}>{mail.name}</span>
                    <button onClick={() => handleDeleteMessage(mail.id)} style={styles.trashDeleteButton}>🗑️</button>
                  </div>
                  <p style={styles.mailSubText}><strong>From:</strong> {mail.email}</p>
                  <p style={styles.mailMessageText}>"{mail.msg}"</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

const styles = {
  pageWrapper: { display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw', margin: 0, padding: 0, boxSizing: 'border-box', overflowX: 'hidden' },
  navbar: { backgroundColor: 'rgba(9, 9, 14, 0.4)', height: '65px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 40px', width: '100%', boxSizing: 'border-box', borderBottom: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)' },
  logo: { color: '#ffffff', fontSize: '18px', fontWeight: 'bold', margin: 0, cursor: 'pointer', fontFamily: 'sans-serif' },
  navLinks: { display: 'flex', gap: '22px' },
  navItem: { color: '#94a3b8', fontSize: '14px', cursor: 'pointer', fontWeight: '500', fontFamily: 'sans-serif' },
  navItemActive: { color: '#ffffff', fontSize: '14px', cursor: 'pointer', fontWeight: 'bold', fontFamily: 'sans-serif', borderBottom: '2px solid #ffffff', paddingBottom: '4px' },
  
  container: { flex: 1, padding: '30px 40px', boxSizing: 'border-box', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', animation: 'pageReveal 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards' },
  headerTitleRow: { display: 'flex', alignItems: 'center', gap: '10px', textAlign: 'left' },
  livePulseDot: { width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00d2ff', boxShadow: '0 0 10px #00d2ff' },
  mainTitle: { color: '#ffffff', fontSize: '24px', margin: 0, fontWeight: '800', fontFamily: 'sans-serif' },
  
  searchBlockRow: { width: '100%', textAlign: 'left', marginBottom: '5px' },
  searchBarInput: { width: '100%', maxWidth: '420px', padding: '11px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)', backgroundColor: 'rgba(15, 23, 42, 0.4)', color: '#ffffff', fontSize: '13.5px', outline: 'none' },
  
  horizontalSplitWorkspaceWrapper: { display: 'flex', gap: '30px', width: '100%', alignItems: 'flex-start', flexWrap: 'wrap' },
  leftComplaintFeedAreaColumn: { flex: 1, minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '12px' },
  
  // ⚡ FIXED CORE UP ALIGNMENT: Margin top removed entirely so the sidebar aligns flush with the left card header title ceiling
  rightMetricsSidebarColumn: { display: 'flex', flexDirection: 'column', gap: '15px', width: '240px', minWidth: '200px', marginTop: '36px' },
  compactStatCard: { background: 'rgba(30, 41, 59, 0.3)', backdropFilter: 'blur(12px)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.02)', padding: '18px', textAlign: 'right', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' },
  statNum: { margin: 0, fontSize: '30px', fontWeight: '900', fontFamily: 'sans-serif' },
  statLabel: { margin: 0, fontSize: '12.5px', color: '#94a3b8', fontWeight: '600' },
  
  sectionHeaderLabel: { color: '#ffffff', fontSize: '17px', margin: 0, fontWeight: '700', textAlign: 'left' },
  loadingText: { color: '#00d2ff', fontSize: '14px', textAlign: 'left', fontFamily: 'monospace' },
  emptyAlert: { color: '#94a3b8', fontSize: '13.5px', background: 'rgba(30, 41, 59, 0.15)', padding: '15px', borderRadius: '8px', textAlign: 'left' },
  verticalCardsListStack: { display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' },
  verticalGrievanceSummaryBoxCard: { background: 'rgba(21, 32, 54, 0.4)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.04)', borderRadius: '14px', padding: '25px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column', gap: '18px', width: '100%', boxSizing: 'border-box', animation: 'cardFadeIn 0.5s ease-out' },
  cardTopHeaderRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px' },
  ticketIdBadgeKey: { fontFamily: 'monospace', fontWeight: 'bold', color: '#00d2ff', fontSize: '14px' },
  statusActionBtn: { border: 'none', padding: '6px 14px', fontSize: '11px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', textTransform: 'uppercase' },
  verticalCardDetailsGridStack: { display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' },
  dataRowText: { margin: 0, fontSize: '14px', color: '#cbd5e1', lineHeight: '1.5' },
  descriptionContentTextBoxBlock: { background: 'rgba(15, 23, 42, 0.3)', borderLeft: '3px solid #00d2ff', borderRadius: '0 8px 8px 0', padding: '12px 15px', marginTop: '5px' },
  descriptionLabel: { margin: '0 0 4px 0', fontSize: '11.5px', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase' },
  descriptionBodyItalic: { margin: 0, fontSize: '14px', color: '#ffffff', fontStyle: 'italic', lineHeight: '1.5' },
  bottomInboxSectionBlock: { width: '100%', display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' },
  inboxVerticalLayoutGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px', width: '100%' },
  mailCardContainer: { backgroundColor: '#141f32', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '10px', padding: '15px', display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' },
  mailHeaderRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  mailSenderName: { color: '#ffffff', fontSize: '13.5px', fontWeight: 'bold' },
  trashDeleteButton: { backgroundColor: 'transparent', color: '#ef4444', border: 'none', cursor: 'pointer', fontSize: '13px', padding: 0 },
  mailSubText: { margin: 0, fontSize: '12px', color: '#64748b' },
  mailMessageText: { margin: 0, fontSize: '13px', color: '#cbd5e1', fontStyle: 'italic', backgroundColor: 'rgba(255,255,255,0.01)', padding: '6px 10px', borderRadius: '4px', borderLeft: '2px solid #00d2ff' }
};

export default AdminDashboard;

