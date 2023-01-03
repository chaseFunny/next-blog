import { BASE_COS_URL } from 'lib/constant'
import Styles from './index.module.scss'

const Footer = (): JSX.Element => {
  const footerLinks = {
    other: [
      { name: '语雀', url: 'https://www.yuque.com/chumingyaochenzao/uxwbme', target: '_blank', type: 1 },
      { name: '知乎', url: 'https://www.yuque.com/chumingyaochenzao', target: '_blank', type: 1 },
      { name: 'bilibili', url: 'https://space.bilibili.com/1695997565?spm_id_from=333.1007.0.0', target: '_blank', type: 1 },
      { name: '微信公众号', img: `${BASE_COS_URL}/blog/AAOE58C.png`, type: 1 },
    ],
    connect: [
      { name: 'QQ：3074994545', img: `${BASE_COS_URL}/blog/AAOE58C.png`, type: 2 },
      { name: 'WeChat：RELEASE500', img: `${BASE_COS_URL}/blog/AAOE58C.png`, type: 2 },
    ],
  }
  return (
    <div className={Styles.footer}>
      <div className={Styles.other}>
        <span>其他：</span>
        {footerLinks.other.map(item => {
          if (item.type === 1) {
            return (
              <li key={item.name}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            )
          }
          return (
            <li key={item.name}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </li>
          )
        })}
      </div>
      <div className={Styles.connect}>
        <span>联系我：</span>
        {footerLinks.connect.map(item => {
          if (item.type === 1) {
            return (
              <li key={item.name}>
                <a href={item.img} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            )
          }
          return (
            <li key={item.name}>
              <a href={item.img} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </li>
          )
        })}
      </div>
    </div>
  )
}
export default Footer
