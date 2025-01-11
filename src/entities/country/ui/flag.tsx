import Image from 'next/image'
import styles from './countryCard.module.scss'

type Props = {
  imgUrl?: string
}

export const Flag = ({ imgUrl }: Props) => {

  const url = `https:${imgUrl}`

  return (
    <div className={styles.countryCard__flag}>
      {imgUrl &&
        <Image
          src={url}
          alt='url'
          width={22}
          height={15}
        />}
    </div>
  )
}