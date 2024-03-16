// Main.js
import React from 'react';
import './Styles/MainStyles/Main.css'

function MainSection({ children }) {
  return (
    <main className='main-content'>
      {children}
    </main>
  );
}

export default MainSection;