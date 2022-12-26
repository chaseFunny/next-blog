/**
 * 头像组件
 * placeholder： 加载时模糊处理，priority： 提高优先级
 */
import Link from 'next/link'
import Image from 'next/image'
import styles from './index.module.scss'

interface logoProps {
  avatarUrl?: string
  width?: number
  height?: number
}
// digital art,A snail that keeps going, because it sees the colorful world ahead
// https://labs.openai.com/s/1EDtzYQupLvVTgfdGLyKk8yv
const defaultLogo = '/logo.png'
const Logo = ({ avatarUrl = defaultLogo, width = 45, height = 45 }: logoProps) => {
  return (
    <Link href="/">
      <div className={styles.logo}>
        <Image src={avatarUrl} alt="Snail Run" width={width} height={height} priority />
      </div>
    </Link>
  )
}
export default Logo
