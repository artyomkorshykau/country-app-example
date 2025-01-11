import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

type Props = {

} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ ...restProps }: Props) => {
  return (
    <button className={styles.button}
      {...restProps}>
      Remove
    </button>
  )
}