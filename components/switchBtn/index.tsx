/**
 * 切换按钮
 */
import Switch from 'rc-switch'
import React from 'react'
import Style from './index.module.scss'

interface SwitchProps {
  label?: string
  checked: boolean // 是否选中
  // eslint-disable-next-line no-unused-vars
  onChange: (c: boolean) => void
}
// eslint-disable-next-line react/function-component-definition
const SwitchBtn: React.FC<SwitchProps> = ({ label, checked = false, onChange }) => {
  // console.log(label, checked, 'checked')
  return (
    <div className={Style.switch}>
      <span className={Style.tip}>{label}</span>
      <Switch checked={checked} onChange={v => onChange(v)} checkedChildren="显示封面" unCheckedChildren="隐藏封面" />
    </div>
  )
}
export default SwitchBtn
