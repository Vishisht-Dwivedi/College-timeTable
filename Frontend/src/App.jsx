import { useState } from 'react'
import Navbar from './components/Navbar.jsx';
import SearchForm from './components/SearchForm.jsx';
import React from 'react';
import Footer from './components/Footer';
import './App.css';


function App() {
 

  return (
    <>
      <div className="App">
      <Navbar />
      <main>
        <SearchForm />
       
      </main>
      <Footer />
      
    </div>
       
    </>
  );
}

export default App
