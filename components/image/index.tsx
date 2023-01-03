/**
 * 可副标题的图片加载组件
 */
import Image from 'next/image'
import React from 'react'
import { PhotoView } from 'react-photo-view'
import styles from './index.module.scss'

interface arrImage {
  srcUrl: string
  index: number
}
interface ImageSelfProps {
  srcArr: arrImage[]
  width: number
  height: number
  alt: string
  caption?: string
}

const ImageSelf = ({ srcArr, width, height, alt, caption }: ImageSelfProps): JSX.Element => {
  return (
    <figure className={styles.wrapper}>
      <div>
        {srcArr.map(({ srcUrl, index }) => (
          <PhotoView width={width} height={height} src={srcUrl} key={index}>
            <Image role="img" src={srcUrl} width={width} height={height} alt={alt} priority />
          </PhotoView>
        ))}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}
export default ImageSelf
