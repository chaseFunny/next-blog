/**
 * 布局 - 头部组件
 */
import Link from 'next/link'
import { useRouter } from 'next/router'
import ThemeChange from 'components/themeChange'
import Styles from './index.module.scss'
import Logo from '../logo/index'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Tools', path: '/tools', target: '_self' },
  // 前端技术地图，需要整理好后，实现
]
const Header = (): JSX.Element => {
  const router = useRouter()
  const pathname = router.pathname.split('/[')[0] // active paths on dynamic subpages
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.container}>
          {/* 左侧logo */}
          <Logo />
          {/* 右侧nav */}
          <nav className={Styles.nav}>
            <ul className={Styles.links}>
              {links.map(({ name, path, target }) => {
                if (target === '_blank') {
                  return (
                    <li key={path} className={pathname === path ? Styles.linkActive : Styles.link}>
                      <a href={path} target="_blank" rel="noopener noreferrer">
                        {name}
                      </a>
                    </li>
                  )
                }
                return (
                  <li key={path} className={pathname === path ? Styles.linkActive : Styles.link}>
                    <Link href={path}>{name}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          {/* 主题切换按钮 */}
          <ThemeChange />
        </div>
      </header>
      <div className={Styles.spacer} />
    </>
  )
}
export default Header
