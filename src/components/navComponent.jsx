import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import styles from './nav.module.css';
import logo from './../assets/shared/logo.svg'

function Nav() {

  const [menuStatus, setMenuStatus] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.logoCont}>
        <img src={logo} alt='logo'></img>
      </div>
        <div id={menuStatus ? 'active-menu' : 'menu'} className={styles.options}>
          <ul >
            <li><NavLink className={({ isActive }) => isActive ? styles.selected : undefined} to='/'><span>00</span> Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.selected : undefined} to='destination/Moon'><span>01</span> Destination</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.selected : undefined} to='crew/DouglasHurley'><span>02</span> Crew</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.selected : undefined} to='technology/Launchvehicle'><span>03</span> Technology</NavLink></li>
          </ul>
        </div>
        <div id='button-menu' onClick={()=> setMenuStatus(!menuStatus)} className={menuStatus ? 'nav-bar-active' : 'nav-bar'}>
            
        </div>
    </nav>
  )
}

export default Nav