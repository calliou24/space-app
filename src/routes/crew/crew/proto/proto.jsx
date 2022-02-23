import React from 'react'
import {motion} from 'framer-motion'
import styles from './proto.module.css'

const conponentTransition = {
  in : { 
    y : -100,
    opacity : 0
  },
  on : {
    y : 0,
    opacity : 1
  },
  out : {
    y : 500
  }
}


function Proto({data, img}) {
  return (
    <motion.div 
    initial='in'
    animate='on' 
    variants={conponentTransition} 
    className={styles.proto}>
        <div className={styles.info}> 
          <span className={styles.role}>{data.role.toUpperCase()}</span>
          <h2 className={styles.name}>{data.name.toUpperCase()}</h2>
          <p className={styles.bio}>{data.bio}</p>
        </div>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{default : {delay: .2}}}
        className={styles.imageCont}>
            <img src={img} alt={data.name}></img>
        </motion.div>
    </motion.div>
  )
}

export default Proto