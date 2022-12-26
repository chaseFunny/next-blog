import { GetStaticProps } from 'next'
import { useState } from 'react'
import Layout from 'components/layout'
import Switch from '../components/switchBtn/index'
import ImageSelf from '../components/image'
import Logo from '../components/logo'
// import styles from './index.module.scss'

const Home = () => {
  const [btnState, setBtn] = useState(false)
  return (
    <Layout>
      <div>
        <div>
          <h1>
            1
            {/* Welcome to <a href="https://nextjs.org">Next.js!</a>
          <p className={styles.aaa}>这个是得意黑字体吗？ This is a deyihei ？？？</p>
          <p className={styles.bbb}>这个是得意黑字体吗？ This is a deyihei ？？？</p>
          <p>这个是得意黑字体吗？ This is a deyihei ？？？</p>
          <Switch title="哈哈哈哈" onChange={() => setBtn(!btnState)} checked={btnState} /> */}
          </h1>
          <Switch label="展示图片" checked={btnState} onChange={v => setBtn(v)} />
          <ImageSelf src="/logo.png" width={480} height={480} alt="得意" caption="come from network" />
          <Logo />
        </div>
      </div>
    </Layout>
  )
}
export const getStaticProps: GetStaticProps = async context => {
  // console.log(process.env.AAAA, '哈哈哈')

  return {
    // notFound: true,
    props: {
      text: 'look this will log where',
      context: JSON.stringify(context),
    }, // will be passed to the page component as props
  }
}
export default Home
