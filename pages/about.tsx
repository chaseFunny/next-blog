import Layout from 'components/layout'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Button from 'components/buttom'
import { YUQUE_BASE_URL } from 'lib/constant'
import Quote from 'components/quote'
import Styles from './about.module.scss'

const defaultLogo = '/logo.png'
const About = (): JSX.Element => {
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
      <div className={Styles.AboutBox}>
        <Image src={defaultLogo} alt="Snail Run" width={450} height={600} className={Styles.image} priority />
      </div>
      <div className={Styles.disc}>
        <p>21年偶然接触前端，被吸引，了解后便希望自己成为一个前端开发工程师，22年毕业顺利成为一名前端开发，</p>
        <p>喜欢好的设计和优雅的交互，熟练使用vue，react框架；熟悉小程序开发并由实践，成为一名前端开发不难，但是成为优秀的，不简单，</p>
        <Quote
          words="重重的壳裹着轻轻的仰望"
          from="《蜗牛》"
          onClick={() => window.open('https://y.qq.com/n/ryqq/search?w=%E8%9C%97%E7%89%9B&t=song&remoteplace=txt.yqq.top')}
        />
      </div>
      <div className={Styles.resume}>
        <Button href={YUQUE_BASE_URL}>我的简历</Button>
      </div>
    </Layout>
  )
}
export default About
