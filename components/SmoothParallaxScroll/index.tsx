'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './syles.module.scss'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis'

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
]

const SmoothParallaxScroll = () => {

  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();
    return () => {
      window.removeEventListener('resize', resize);
      lenis.destroy(); // Clean up Lenis instance if needed
    };
  }, []);
  return (
    <main className={styles.main}>
    <div className={styles.spacer}></div>
    <div className={styles.gallery}>
      <div className={styles.galleryWrapper}>
        <Column y={y} images={[images[0], images[1], images[2]]}/>
        <Column y={y2} images={[images[3], images[4], images[5]]}/>
        <Column y={y3} images={[images[6], images[7], images[8]]}/>
        <Column y={y4} images={[images[9], images[10], images[11]]}/>
      </div>
    </div>
    <div className={styles.spacer}></div>
  </main>
  )
}

const Column = ({images, y}: {images: string[], y: any}) => {
  return (
    <motion.div
    className={styles.column}
    style={{y}}
    >
    {
      images.map( (src, i) => {
        return <div key={i} className={styles.imageContainer}>
          <Image
            src={`/images-scroll/${src}`}
            alt='image'
            fill
          />
        </div>
      })
    }
  </motion.div>
  )
}

export default SmoothParallaxScroll