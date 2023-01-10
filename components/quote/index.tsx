import Styles from './index.module.scss'

interface QuoteProps {
  words: string
  from: string
  onClick?: () => void
}

const Quote = ({ words, from, onClick }: QuoteProps): JSX.Element => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={Styles.QuoteBox} onClick={onClick}>
      <span className={Styles.words}>“{words}”</span>
      <span className={Styles.from}>--{from}</span>
    </div>
  )
}
export default Quote
