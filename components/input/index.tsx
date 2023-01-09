import { ChangeEvent } from 'react'
import cn from 'classnames'
import Styles from './index.module.scss'

type InputProps = {
  type: string
  placeholder?: string
  disabled?: boolean
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement> | any) => void // eslint-disable-line
  className?: string
}

const Input = ({ type = 'text', placeholder, disabled, value, onChange, className }: InputProps): JSX.Element => (
  <input
    value={value}
    type={type}
    placeholder={placeholder}
    className={cn(Styles.input, className)}
    disabled={disabled}
    onChange={onChange}
    onKeyUp={onChange}
  />
)

export default Input
