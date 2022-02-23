import React from 'react'
import styles from './crew.module.css'
import { motion }  from 'framer-motion'
import { NavLink, Outlet } from "react-router-dom";
import { pageTransition } from './../homeComponent/homeComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


export function deleteNameSpaces(name) {
  return name.replace(/\s+/g, '')
}

function Crew({data}) {


  return (
    <motion.div 
     initial='in'
     animate='on'
     transition='del'
     id='landing'
     variants={pageTransition} 
     className={styles.crew}
    >
       <section>
        <h1 className='page-title'><span>02</span>MEET YOUR CREW</h1>

        <div className={styles.contentCont}>
          <div className={styles.dotsNav}>
            <ul>
            {data.map( e => (<li key={e.name}><NavLink className={({isActive}) => isActive ? styles.selectedDot : styles.nonSelected} to={deleteNameSpaces(e.name)}><FontAwesomeIcon icon={faCircle} /></NavLink></li>))}
            </ul>
              
          </div>
          <div className={styles.outlet}>
            <Outlet/>
          </div>
        </div>
      </section>
      
    </motion.div>
  )
}

export default Crew