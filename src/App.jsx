import React from 'react'
//Components
import Nav from './components/navComponent'
import { Outlet } from "react-router-dom";

export function App() {
  
  
  
  return (
    <div className="App">
        <Nav/>
        <section>
          <Outlet/>
        </section> 
    </div>
  )
}
