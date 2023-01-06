// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { motion, useScroll, useSpring } from 'framer-motion'
import Styles from './index.module.scss'

// interface ScrollTopProps {
//   children: JSX.Element | JSX.Element[] | string
// }
const ScrollTop = (): JSX.Element => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return <motion.div className={Styles.progressBar} style={{ scaleX }} />
}
export default ScrollTop
