'use client'
import ZoomParallax from "@/components/ZoomParallax";
import styles from './page.module.scss'
import GalleryMouseHover from "@/components/GalleryMouseHover";
import SmoothParallaxScroll from "@/components/SmoothParallaxScroll";
export default function Home({ children }: any) {
  return (
    <div className={styles.container}>
      <GalleryMouseHover />
      <SmoothParallaxScroll />
      
    </div>
  );
}
