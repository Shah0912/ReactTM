import React from 'react';
import './App.css';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject';

function App() {

  const projects = [
    {
      title: "Business Website",
      category: "Fintech"
    },
    {
      title: "Social App",
      category: "Web Development"
    },
    {
      title: "Ecommerce Shopping Cart",
      category: "Android Development"
    }
  ];
  return (
    <div className="App">
      <AddProject />
      <Projects projects = {projects} />
    </div>
  );
}

export default App;
