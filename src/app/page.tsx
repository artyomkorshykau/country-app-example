
import { CountryList } from '@/features/countyList/countryList'
import styles from './page.module.scss'


export default function Home() {
  return (
    <main className={styles.page}>
      <CountryList />
    </main>
  )
}
