import { Variants } from 'framer-motion'

const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
}

export const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: customEase } }
}

export const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: customEase } }
}

export const floatContinuous = (delay: number = 0): Variants => ({
  animate: {
    y: [0, -10, 0, 10, 0],
    transition: { duration: 6, ease: 'easeInOut', repeat: Infinity, delay }
  }
})
