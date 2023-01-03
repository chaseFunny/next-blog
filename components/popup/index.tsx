/**
 * 弹出层
 */
import { motion } from 'framer-motion'
import React from 'react'
import Styles from './index.module.scss'

interface LayoutProps {
  children: JSX.Element | JSX.Element[] | string
  onClose: () => void
}

const Popup = ({ children, onClose }: LayoutProps): JSX.Element => {
  return (
    <motion.div className={Styles.bg} layout onClick={() => onClose()}>
      {/* <div className={Styles.close} onClick={() => onClose()}>
        关闭
      </div> */}
      <motion.div
        onClick={() => onClose()}
        className={Styles.box}
        layout
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: 'linear',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Popup
