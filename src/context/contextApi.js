import React, { createContext, useState, useEffect } from 'react';

// Function that fecth data
import { fetchDataFromApi } from '../utils/api';

export const Context = createContext();

export const AppContext = props => {
	const [loading, setLoading] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState('New');
	const [mobileMenu, setMobileMenu] = useState(false);
	const [searchResult, setSearchResult] = useState(false);

	useEffect(() => {
		fetchSelecetedData(selectedCategory);
	}, [selectedCategory]);

	const fetchSelecetedData = query => {
		setLoading(true);
		fetchDataFromApi(`search/?q=${query}`).then(res => {
			// console.log(res);
			setLoading(false);
		});
	};

	return (
		<Context.Provider
			value={{
				loading,
				setLoading,
				searchResult,
				selectedCategory,
				setSelectedCategory,
				mobileMenu,
				setMobileMenu
			}}>
			{props.children}
		</Context.Provider>
	);
};
