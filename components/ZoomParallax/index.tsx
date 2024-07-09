import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react'
import styles from './syles.module.scss'

import Picture1 from '@/public/next.svg';

function ZoomParallax() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);

  return (
    <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                <motion.div style={{scale}} className={styles.el}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={Picture1}
                            alt="Next logo"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
  )
}

export default ZoomParallax