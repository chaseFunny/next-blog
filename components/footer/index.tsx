/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import Popup from 'components/popup'
import Image from 'next/image'
import { BASE_COS_URL } from 'lib/constant'
import { useState } from 'react'
import Styles from './index.module.scss'

const Footer = (): JSX.Element => {
  const [currUrl, setCurrUrl] = useState('')
  const footerLinks = {
    other: [
      { name: '语雀', url: 'https://www.yuque.com/chumingyaochenzao/uxwbme', target: '_blank', type: 1 },
      { name: '知乎', url: 'https://www.zhihu.com/people/jian-zhi-vzhe-bian', target: '_blank', type: 1 },
      { name: 'bilibili', url: 'https://space.bilibili.com/1695997565?spm_id_from=333.1007.0.0', target: '_blank', type: 1 },
      { name: '微信公众号', img: `${BASE_COS_URL}/blog/AAOE58C.png`, type: 2 },
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
            <li key={item.name} onClick={() => setCurrUrl(item.img || '')}>
              {item.name}
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
      {/* 图片预览 */}
      {currUrl && (
        <Popup onClose={() => setCurrUrl('')}>
          <Image src={currUrl} alt="Snail Run" width={200} height={200} priority />
        </Popup>
      )}
    </div>
  )
}
export default Footer
