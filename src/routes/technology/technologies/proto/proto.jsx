import { motion } from 'framer-motion'
import React from 'react'
import styles from './proto.module.css'

const transition = {
    in : { 
        y :200,
        scale : .9

    },
    on : {
        y : 0,
        scale : 1

    }
}

const imageAnimation = {
    in : { 
        opacity : 0,
        scale : .2
        
    },
    on : {
        opacity : 1,
        scale : 1   
    }
}

function Proto({data, img}) {
  return (
    <motion.div 
        initial='in'
        animate='on'
        variants={transition}
        className={styles.proto}
    >
        <div className={styles.infoCont}>
            <h2 className={styles.titile}>THE TECHNOLOGY...</h2>
            <h3 className={styles.name}>{data.name.toUpperCase()}</h3>
            <p className={styles.description}>{data.description}</p>
        </div>
        <motion.div 
        initial='in'
        animate='on'
        variants={imageAnimation}
        transition={{default : {delay : .5}}}
        className={styles.imageCont}>
            <img src={img} alt={data.name}></img>
        </motion.div>  
    </motion.div>
  )
}

export default Proto