/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import _ from 'lodash'
import cn from 'classnames'
import Input from 'components/input'
import { Search, PlusSquare } from 'react-feather'
import Button from 'components/buttom'
import { useTheme } from 'next-themes'
import { GlobalScrollbar } from 'mac-scrollbar'
import Styles from './index.module.scss'

interface TreasureType {
  currSize: string
}
const Treasure = ({ currSize = '' }: TreasureType): JSX.Element => {
  const { theme } = useTheme()
  // const dataList = (localStorage && localStorage.getItem('linkArr')) || []
  const [addObj, setAdd] = useState({
    name: '',
    note: '',
  })
  const [currentSearch, setCurrInputVal] = useState('')
  const isLarge = currSize === 'large'
  const chestUrl = '/images/box.png'
  // const trackSearch = useCallback(
  //   _.debounce((value: string) => dataList.search(value), 500),
  //   [],
  // )
  const handleInputChange = (e: { target: { value: any }; keyCode: number }) => {
    const searchString = e.target.value
    if (e.keyCode === 13) {
      console.log(e.keyCode, searchString)
      return setCurrInputVal(searchString)
    }
    if (searchString !== '') {
      // trackSearch(searchString) // Save what people are interested in reading
    }
    return setCurrInputVal(searchString)
  }
  const addLink = () => {}

  return (
    <motion.div layout className={cn(Styles.DemoBox, isLarge ? Styles.flexLarge : Styles.flexSmall)}>
      <motion.div layout className={Styles.imgBox}>
        <Image src={chestUrl} alt="Snail Run" width={isLarge ? 30 : 50} height={isLarge ? 30 : 50} priority />
      </motion.div>
      <motion.div layout className={Styles.flexBox}>
        <div className={Styles.desc}>快速找到你遗忘的</div>
      </motion.div>
      {isLarge && (
        <div className={Styles.content}>
          <div className={Styles.inputWrapper}>
            <Input className={Styles.input} value={currentSearch} onChange={handleInputChange} placeholder="输入你的备注" type="search" />
            <Search className={Styles.inputIcon} />
          </div>
          {/* <div className={Styles.list}>
            <div className={Styles.add}>
              <Input
                className={Styles.input}
                value={addObj.name}
                onChange={handleInputChange}
                placeholder="你会遗忘的，例如：一个链接"
                type="text"
              />
              <Input className={Styles.input} value={addObj.name} onChange={handleInputChange} placeholder="一个备注" type="text" />
              <Button type="submit" onClick={() => addLink()}>
                提交
              </Button>
            </div>
          </div> */}
          <div className={Styles.list}>
            <GlobalScrollbar skin={theme as undefined} />
            <div className={Styles.itemCard}>
              <PlusSquare className={Styles.minimize} />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}
export default Treasure
