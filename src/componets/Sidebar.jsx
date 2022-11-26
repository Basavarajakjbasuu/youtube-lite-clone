import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { categories } from '../utils/constants';
import { Context } from '../context/contextApi';
import SideBarMenuItems from './SideBarMenuItems';
const Sidebar = () => {
	const { selectedCategory, setSelectedCategory, mobileMenu } =
		useContext(Context);

	const navigate = useNavigate();
	const clickHandler = (name, type) => {
		switch (type) {
			case 'category':
				return setSelectedCategory(name);
			case 'home':
				return setSelectedCategory(name);
			case 'menu':
				return false;
			default:
				break;
		}
	};
	return (
		<div
			className={`md:block h-full w-[240px] overflow-y-auto py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-[0] transition-all ${
				mobileMenu ? 'translate-x-0' : ''
			}`}>
			<div className="flex px-5 flex-col">
				{categories.map(item => (
					<React.Fragment key={item.name}>
						<SideBarMenuItems
							text={item.type === 'home' ? 'Home' : item.name}
							icon={item.icon}
							action={() => {
								clickHandler(item.name, item.type);
								navigate('/');
							}}
							className={`${
								selectedCategory === item.name ? 'bg-white/[0.15]' : ''
							}`}
						/>
						{item.divider && <hr className="my-5 border-white/[0.2]" />}
					</React.Fragment>
				))}
				<hr className="my-5 border-white/[0.2]" />
				<div className="text-white/[0.5] text-sm">Clone by: Basavaraja K J</div>
			</div>
		</div>
	);
};

export default Sidebar;
