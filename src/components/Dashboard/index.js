import React from 'react';
import './index.css';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="dashboard">
      <h1>Welcome, {user ? user.user_firstname : 'Guest'}</h1>
      {user && (
        <div className="profile">
          <p><strong>Email:</strong> {user.user_email}</p>
          <p><strong>Phone:</strong> {user.user_phone}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
