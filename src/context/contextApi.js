import React, { createContext, useState, useEffect } from 'react';

// Function that fecth data
import { fetchDataFromApi } from '../utils/api';

export const Context = createContext();

export const AppContext = props => {
	const [loading, setLoading] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState('New');
	const [mobileMenu, setMobileMenu] = useState(false);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		fetchSelecetedData(selectedCategory);
	}, [selectedCategory]);

	const fetchSelecetedData = query => {
		setLoading(true);
		fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
			setSearchResults(contents);
			setLoading(false);
		});
	};

	return (
		<Context.Provider
			value={{
				loading,
				setLoading,
				searchResults,
				selectedCategory,
				setSelectedCategory,
				mobileMenu,
				setMobileMenu
			}}>
			{props.children}
		</Context.Provider>
	);
};
