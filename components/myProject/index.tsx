/**
 * 实用的小工具
 */
import Card from 'components/card'
import { useState } from 'react'
import Styles from './index.module.scss'
import Treasure from './treasure'

const MyProject = (): JSX.Element => {
  const [currSize, setSize] = useState('')
  const getSizeVal = (str: string) => {
    console.log(str, 'gggg')
    setSize(str)
  }
  return (
    <div className={Styles.projectBox}>
      <div className={Styles.borderB}>百宝箱</div>
      <div className={Styles.desc}>不能把时间浪费在无聊和重复的事情上</div>
      <div className={Styles.cardBox}>
        <Card currSizeFn={str => getSizeVal(str)} type="transparent">
          <Treasure currSize={currSize} />
        </Card>
      </div>
    </div>
  )
}
export default MyProject
