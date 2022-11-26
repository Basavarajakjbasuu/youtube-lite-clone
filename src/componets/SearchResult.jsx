import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchDataFromApi } from '../utils/api';
import { Context } from '../context/contextApi';
import SideBar from './Sidebar';
import SearchResultVideoCard from './SearchResultVideoCard';

const SearchResult = () => {
	const [results, setResults] = useState();
	const { searchQuery } = useParams();
	const { setLoading } = useContext(Context);

	useEffect(() => {
		document.getElementById('root').classList.remove('custom-h');
		fetchSearchResult();
	}, [searchQuery]);

	const fetchSearchResult = () => {
		setLoading(true);
		fetchDataFromApi(`search/?q=${searchQuery}`).then(res => {
			setResults(res?.contents);
			setLoading(false);
		});
	};
	return (
		<div className="flex flex-row h-[calc(100%-56px)]">
			<SideBar />
			<div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
				<div className="grid grid-cols-1 gap-2 p-5">
					{results?.map(item => {
						if (item?.type !== 'video') return false;
						return (
							<SearchResultVideoCard key={item?.videoId} video={item?.video} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default SearchResult;
