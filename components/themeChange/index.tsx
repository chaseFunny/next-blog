import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import cn from 'classnames'
import Styles from './index.module.scss'

/**
 * This is an example of layout animations in Framer Motion 2.
 *
 * It's as simple as adding a `layout` prop to the `motion.div`. When
 * the flexbox changes, the handle smoothly animates between layouts.
 *
 * Try adding whileHover={{ scale: 1.2 }} to the handle - the layout
 * animation is now fully compatible with user-set transforms.
 */

const ThemeChange = () => {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  }
  // , 'system'
  const variants = ['light', 'dark']
  const { theme, setTheme } = useTheme()
  // const [isOn, setIsOn] = useState(theme)
  const toggleSwitch = () => {
    // setIsOn(!isOn)
    const currTheme = theme === 'light' ? 1 : 0
    setTheme(variants[currTheme])
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={cn(Styles.switch, theme === 'dark' && Styles.switch1)}
      onClick={() => {
        toggleSwitch()
      }}
    >
      <motion.div className={Styles.handle} layout transition={spring} />
    </div>
  )
}
export default ThemeChange
