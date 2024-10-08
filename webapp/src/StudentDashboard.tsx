import React from 'react';
import './tad.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <div className="logo">University of Minnesota Office Hours</div>
        <nav>
          <div className="settings-account">
            <span className="settings">Settings</span>
            <span className="user-info">User Name</span>
          </div>
        </nav>
      </header>

      <div className="class-list">
        <div className="class-container">
          <div className="class csci2011">WRIT1301W</div>
          <button className="edit-hours">Edit Hours</button>
        </div>
        <div className="class-container">
          <div className="class writ1301w">WRIT1301W</div>
          <button className="edit-hours">Edit Hours</button>
        </div>
        <div className="class-container">
          <div className="class phys1302w">WRIT1301W</div>
          <button className="edit-hours">Edit Hours</button>
        </div>
        <div className="class-container">
          <div className="class csci1933">CSCI1933</div>
          <button className="edit-hours">Edit Hours</button>
        </div>
        <button className="add-class">Add Class +</button>
      </div>
    </div>
  );
}

export default App;
