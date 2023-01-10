/**
 * 页面过渡
 */
import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'linear',
    },
  },
}

const PageTransition = ({ children }: { children: ReactNode }): JSX.Element => (
  <motion.div initial="initial" animate="enter" variants={variants}>
    {children}
  </motion.div>
)

export default PageTransition
