/* eslint-disable react/button-has-type */
/**
 * 按钮组件
 */
import Link from 'next/link'
import cn from 'classnames'
import styles from './index.module.scss'

interface ButtonProps {
  children: JSX.Element | JSX.Element[] | string
  type?: 'button' | 'submit' | 'reset'
  href?: string
  onClick?: () => void
  variant?: 'transparent' | 'like'
  disabled?: boolean
}

const Button = ({ children, type = 'button', href, onClick, variant, disabled }: ButtonProps): JSX.Element => {
  const classes = cn(styles.button, variant && styles[variant])
  // like Button
  if (onClick && !href) {
    ;<button onClick={onClick} type={type} className={cn(classes)} disabled={disabled}>
      {children}
    </button>
  }
  // 路由跳转按钮
  if (href?.startsWith('/')) {
    return (
      <Link href={href} passHref>
        <button className={classes} type={type} disabled={disabled}>
          {children}
        </button>
      </Link>
    )
  }
  // 跳转第三方外部按钮
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {children}
    </a>
  )
}
export default Button
