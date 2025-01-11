import countriesData from '@/assets/countries.json'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CountiesState } from './countryTypes'

const initialState: CountiesState = {
	countries: countriesData,
}

const countriesSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {
		removeCountry(state, action: PayloadAction<string>) {
			state.countries = state.countries.filter(country => country.name_ru !== action.payload)
		},
	},
	selectors: {
		selectCounties: state => state.countries,
	},
})

export const { removeCountry } = countriesSlice.actions
export const { selectCounties } = countriesSlice.selectors
export default countriesSlice.reducer
