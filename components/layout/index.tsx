/**
 * 页面nav + footer,布局
 */
import React from 'react'
import Transition from 'components/transition/index'

import Footer from 'components/footer'
import Header from '../header/index'
import Styles from './index.module.scss'

interface LayoutProps {
  children: JSX.Element | JSX.Element[] | string
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={Styles.container}>
      {/* nav */}
      <Header />
      <main className={Styles.main}>
        <Transition>{children}</Transition>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default Layout
