import Layout from 'components/layout'
import PageHeader from 'components/pageHeader'
import { NextSeo } from 'next-seo'
import Styles from './index.module.scss'

const Blog = (): JSX.Element => {
  const seoTitle = 'About SnailRun'
  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        openGraph={{
          title: seoTitle,
          url: `https://zhaoguilv.fun/about/`,
          site_name: 'zhaoguilv.fun',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <div className={Styles.contentBox}>
        <PageHeader title="Blog" description="学习过程中，值得分享的技术，包含但不限于JavaScript，Vue，React" />
      </div>
    </Layout>
  )
}
export default Blog
