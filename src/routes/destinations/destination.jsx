import React, {useState} from 'react'
import styles from './destination.module.css'
import { NavLink, Outlet } from "react-router-dom";
import { motion } from 'framer-motion'
import { pageTransition } from './../homeComponent/homeComponent'

function Destination({data}) {
  return (
        <motion.div
        initial='in'
        animate='on'
        exit={{y : 100}}
        transition='del'
        variants={pageTransition}
        id='landing'
        className={styles.destination}>
          <section>
            <h1  className='page-title'><span>01</span>PICK YOUR DESTINATION</h1>
            <div className={styles.navCont}>
                <nav className={styles.navDes}>
                  <ul>
                    {data.map( e => <li key={e.name}><NavLink className={({ isActive }) => isActive ? 'selected' : undefined} to={e.name}>{e.name}</NavLink></li> )}
                  </ul>
                </nav>
            </div>
            <div  className={styles.outlet}>
              <Outlet/>
            </div>
          </section>
        </motion.div>
  )
}

export default Destination