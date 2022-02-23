import React from 'react'
import styles from './proto.module.css'
import { motion } from 'framer-motion'


export const pageTransition ={ 

    in: { 
        x: 200
      
    },
    on : { 
        x: 0
    }
  
  }


function Proto({data, img}) {
  return (
    <motion.div initial='in' animate='on' variants={pageTransition} 
    className={styles.proto}>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{default : {delay: .2}}}
        className={styles.imageCont}>
            <img src={img} alt={data.name}></img>
        </motion.div>
        <div className={styles.infoDestination}> 
            <h2>{data.name}</h2>
            <p>
                {data.description}
            </p>
            <div className={styles.distanceAndTime}>
                <span className={styles.distance}>
                    AVG.DISTANCE
                    <span>
                        {data.distance}
                    </span>
                </span>
                <span className={styles.time}>
                    EST.TRAVEL TIME
                    <span>
                        {data.travel}
                    </span>
                </span>
            </div>
        </div>
    </motion.div>
  )
}

export default Proto