import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate(); 
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeMessageCardId, setActiveMessageCardId] = useState(null);
  const [typedMessage, setTypedMessage] = useState("");

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await fetch("http://10.2.0");
      if (response.ok) {
        const data = await response.json();
        setComplaints(data);
      }
    } catch (err) {
      console.error("Failed to fetch complaints:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusToggle = async (id, currentStatus) => {
    const nextStatus = currentStatus === 'Pending' ? 'In Progress' : 'Resolved';
    try {
      const response = await fetch(`http://10.2.0/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus })
      });
      if (response.ok) {
        alert(`Status updated to ${nextStatus}!`);
        fetchComplaints(); 
      }
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  const handleSendMessage = async (id) => {
    if (!typedMessage.trim()) return;
    try {
      const response = await fetch(`http://10.2.0/message/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ agentMessage: typedMessage })
      });
      if (response.ok) {
        alert("Message updated successfully! 🎉");
        setTypedMessage("");
        setActiveMessageCardId(null);
        fetchComplaints();
      }
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <h2 onClick={() => navigate('/')} style={styles.logo}>ComplaintCare</h2>
        <div>
          <button onClick={() => navigate('/')} style={styles.navBtn}>Home</button>
          <button onClick={() => navigate('/login')} style={styles.navBtn}>Log out</button>
        </div>
      </div>

      <div style={styles.content}>
        <h3 style={styles.welcome}>
          Hi Admin {localStorage.getItem("userName") || "Admin"} <span style={styles.subText}>view complaints</span>
        </h3>

        {loading ? (
          <p style={{color: '#fff'}}>Loading live complaints...</p>
        ) : complaints.length === 0 ? (
          <p style={{color: '#2c3e50', fontSize: '15px'}}>No active database complaints found.</p>
        ) : (
          <div style={styles.grid}>
            {complaints.map((item) => (
              <div key={item._id} style={styles.card}>
                <p style={styles.cardText}><strong>Name:</strong> {item.name}</p>
                <p style={styles.cardText}><strong>Address:</strong> {item.address}</p>
                <p style={styles.cardText}><strong>City:</strong> {item.city}</p>
                <p style={styles.cardText}><strong>State:</strong> {item.state}</p>
                <p style={styles.cardText}><strong>Pincode:</strong> {item.pincode}</p>
                <p style={styles.cardText}><strong>Comment:</strong> {item.comment || item.description}</p>
                <p style={styles.cardText}><strong>Status:</strong> {item.status || 'Pending'}</p>

                <div style={styles.actionsRow}>
                  <button onClick={() => handleStatusToggle(item._id, item.status || 'Pending')} style={styles.blueBtn}>Status Change</button>
                  <button 
                    onClick={() => setActiveMessageCardId(activeMessageCardId === item._id ? null : item._id)} 
                    style={styles.blueBtn}
                  >
                    Message
                  </button>
                </div>

                {activeMessageCardId === item._id && (
                  <div style={styles.messageBoxContainer}>
                    <p style={styles.boxTitle}>Message Box</p>
                    <div style={styles.inputWrapper}>
                      <input type="text" placeholder="Message" value={typedMessage} onChange={(e) => setTypedMessage(e.target.value)} style={styles.messageInput} />
                      <button onClick={() => handleSendMessage(item._id)} style={styles.greenSendBtn}>Send</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { backgroundColor: '#a3b1c1', minHeight: '100vh', fontFamily: 'sans-serif' },
  navbar: { backgroundColor: '#1b2631', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff' },
  logo: { margin: 0, fontSize: '20px', cursor: 'pointer' },
  navBtn: { background: 'none', border: 'none', color: '#fff', marginLeft: '15px', cursor: 'pointer', fontWeight: 'bold' },
  content: { padding: '30px' },
  welcome: { color: '#000000', fontSize: '18px', fontWeight: 'normal', marginBottom: '25px' },
  subText: { fontSize: '13px', marginLeft: '8px', color: '#555' },
  grid: { display: 'flex', flexWrap: 'wrap', gap: '20px' },
  card: { backgroundColor: '#ffffff', border: '1px solid #dcdde1', borderRadius: '4px', padding: '20px 25px', width: '220px', textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' },
  cardText: { fontSize: '13px', margin: '0 0 10px 0', color: '#2c3e50', lineHeight: '1.4' },
  actionsRow: { display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '15px' },
  blueBtn: { backgroundColor: '#007bff', color: '#ffffff', border: 'none', padding: '6px 10px', fontSize: '12px', borderRadius: '4px', cursor: 'pointer', fontWeight: '500' },
  messageBoxContainer: { marginTop: '15px', border: '1px solid #ccc', borderRadius: '4px', padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: '8px' },
  boxTitle: { margin: 0, fontSize: '14px', color: '#333', textAlign: 'center' },
  inputWrapper: { display: 'flex', gap: '6px', alignItems: 'center' },
  messageInput: { flex: 1, padding: '4px 8px', fontSize: '12px', border: '1px solid #ccc', borderRadius: '4px', outline: 'none' },
  greenSendBtn: { backgroundColor: '#28a745', color: '#ffffff', border: 'none', padding: '4px 10px', fontSize: '12px', borderRadius: '4px', cursor: 'pointer' }
};

export default AdminDashboard;
