import { GetStaticProps } from 'next'
import Layout from 'components/layout'
import Button from 'components/buttom'
import PageHeader from 'components/pageHeader'
import MyProject from 'components/myProject'
import Styles from './index.module.scss'

const Home = () => {
  return (
    <Layout>
      <PageHeader title="hello，很高兴遇见你！" description="我是蜗牛快跑，告诉自己慢一点没事，但不能止步不前；路虽远，行则将至">
        <Button href="/about">关于我</Button>
      </PageHeader>
      <MyProject />
      <div className={Styles.heibox} />
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
