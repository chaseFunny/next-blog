import Layout from 'components/layout'
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
      <div className={Styles.contentBox}>11</div>
    </Layout>
  )
}
export default Blog
