/**
 * 页面nav + footer,布局
 */
import React from 'react'
import Transition from 'components/transition/index'
import { GlobalScrollbar } from 'mac-scrollbar'
import { PhotoProvider } from 'react-photo-view'
import { useTheme } from 'next-themes'
import Footer from 'components/footer'
import Header from '../header/index'
import Styles from './index.module.scss'

interface LayoutProps {
  children: JSX.Element | JSX.Element[] | string
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { theme } = useTheme()
  return (
    <PhotoProvider maskOpacity={0.5}>
      <div className={Styles.container}>
        <GlobalScrollbar skin={theme as undefined} />
        {/* nav */}
        <Header />
        <main className={Styles.main}>
          <Transition>{children}</Transition>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </PhotoProvider>
  )
}
export default Layout
