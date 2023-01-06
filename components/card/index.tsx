import cn from 'classnames'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Minimize } from 'react-feather'
import Styles from './index.module.scss'

interface CardProps {
  type?: 'transparent' | 'default'
  // size?: 'large' | 'small' | 'default'
  children: JSX.Element | JSX.Element[] | string
  // eslint-disable-next-line no-unused-vars
  currSizeFn: (sizeStr: string) => void
}
type sizeType = 'large' | 'small' | 'default'

const Card = ({ type = 'default', children, currSizeFn }: CardProps): JSX.Element => {
  const [currSize, setSize] = useState<sizeType>('default')
  const handleSize = (sizeStr: sizeType) => {
    setSize(sizeStr)
    currSizeFn(sizeStr)
  }

  return (
    <motion.div
      layout
      className={cn(Styles.cardBox, Styles[type], Styles[currSize])}
      // onMouseOver={() => handleSize('small')}
      // onMouseOut={() => handleSize('default')}
      onClick={() => {
        if (currSize === 'small') {
          handleSize('large')
        }
      }}
      whileHover={{ scale: currSize === 'large' ? 1 : 1.1 }}
    >
      {currSize === 'large' && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div onClick={() => handleSize('small')}>
          <Minimize className={Styles.minimize} />
        </div>
      )}
      {children}
    </motion.div>
  )
}
export default Card
