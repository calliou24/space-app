import React, {useState} from 'react';
import styles from './technology.module.css'
import {motion} from 'framer-motion'
import { NavLink, Outlet } from "react-router-dom";
import { pageTransition } from './../homeComponent/homeComponent'

import { deleteNameSpaces } from './../crew/crew'

function Technology({data}) {

  const [selected, setSelected] = useState(false)

  console.log(data.map(e => deleteNameSpaces(e.name)))
  return (
    <motion.div 
     initial='in'
     animate='on'
     transition='del'
     variants={pageTransition} 
     className={styles.technology}
     id='landing'  
    >
     <div className={styles.cont}>
      <h1  className='page-title'><span>03</span>SPACE LAUNCH 101</h1>
       
       <div className={styles.circleNav}>
          <ul>
            {data.map( e => <li  key={e.id}><NavLink className={({isActive}) => isActive ? styles.selected : undefined} to={deleteNameSpaces(e.name)}>{e.id}</NavLink></li>)}
          </ul>
       </div>
       <div className={styles.outlet}>
         <Outlet/>
       </div>
     </div>
    </motion.div>
  )
}

export default Technology;