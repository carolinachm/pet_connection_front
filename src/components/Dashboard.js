import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



function Dashboard() {
  const [ setShow] = useState(false);

  const handleShow = () => setShow(true);


  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
      <ul className="nav">
        <li className="nav-item">
          <Link to="#" className="nav-link" onClick={handleShow}>#</Link>
        </li>
        <li className="nav-item">
          <Link to="/usuarios" className="nav-link">Usuarios</Link>
        </li>
      </ul>


    </div>
  );
}

export default Dashboard;
