/**
 * 可副标题的图片加载组件
 */
import Image from 'next/image'
import React from 'react'
import styles from './index.module.scss'

interface ImageSelfProps {
  src: string
  width: number
  height: number
  alt: string
  caption?: string
}

const ImageSelf = ({ src, width, height, alt, caption }: ImageSelfProps): JSX.Element => {
  return (
    <figure className={styles.wrapper}>
      <Image src={src} width={width} height={height} alt={alt} priority />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}
export default ImageSelf
