'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react'
import styles from './syles.module.scss'
import Modal from './modal';


const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000"
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C"
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3"
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63"
  }
]

function GalleryMouseHover() {
  const [modal, setModal] = useState({active: false, index: 0})
  return (
    <main className={styles.main}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>
  )
}

function Project({index, title, setModal}: any) {
  return (
    <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
    <h2>{title}</h2>
    <p>Design & Development</p>
    </div>
    )
}

export default GalleryMouseHover