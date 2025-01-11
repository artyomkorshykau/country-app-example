"use client"

import { removeCountry, selectCounties } from '@/entities/country/model/countrySlice'
import { CountryCard } from '@/entities/country/ui/countryCard'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import styles from './countryList.module.scss'

export const CountryList = () => {
  const countries = useSelector(selectCounties)
  const dispatch = useDispatch()

  const handleRemove = (countryName: string) => {
    dispatch(removeCountry(countryName))
  }

  return (
    <section className={styles.countryList}>
      <AnimatePresence>
        {countries.map((country) => (
          <motion.div
            key={country.name_ru}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CountryCard
              country={country}
              onRemove={handleRemove}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  )
}
