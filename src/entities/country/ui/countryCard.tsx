"use client"

import { Button } from '@/shared/Button/Button'
import { AnimatePresence, motion } from 'framer-motion'

import { useState } from 'react'
import { Country } from '../model/countryTypes'
import styles from './countryCard.module.scss'
import { Flag } from './flag'

type Props = {
  onRemove: (countryName: string) => void
  country: Country
}

export const CountryCard = ({ country, onRemove }: Props) => {
  const [isRemoving, setIsRemoving] = useState(false)

  const handleClick = () => {
    setIsRemoving(true)
  }

  const handleAnimationComplete = () => {
    if (isRemoving) {
      onRemove(country.name_ru)
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className={styles.countryCard}
        key={country.name_ru}
        initial={{ opacity: 1 }}
        animate={{ opacity: isRemoving ? 0 : 1, x: isRemoving ? 1000 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        onAnimationComplete={handleAnimationComplete}
      >
        <Flag imgUrl={country.flag_url} />
        <div>{country.name_ru}</div>
        <Button onClick={handleClick} />
      </motion.div>
    </AnimatePresence>
  )
}
