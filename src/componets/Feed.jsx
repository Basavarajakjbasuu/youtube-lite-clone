import React from 'react';

import { Context } from '../context/contextApi';
import Sidebar from './Sidebar';

const Feed = () => {
	return (
		<div className="flex h-[calc(100%-56px)] ">
			<Sidebar />
		</div>
	);
};

export default Feed;
