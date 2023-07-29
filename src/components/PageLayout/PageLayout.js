import './PageLayout.css';
import NewHeader from '../Header/NewHeader';
import React, { useState, useContext } from 'react';
import GlobalContext from '../../contexts/GlobalContext';
import { HeaderContext } from '../../contexts/HeaderContext';
import { defaultHeaderState } from '../Header/NewHeader';

const PageLayout = ({ children }) => {
	const [pageActive, setPageActive] = useState(true);
	const [headerState, setHeaderState] = useState(defaultHeaderState);

	const inactive = `fixed w-full h-full bg-black opacity-40 z-[999999999]`

	return (
		<GlobalContext.Provider value={[pageActive, setPageActive]}>
		<HeaderContext.Provider value={[headerState, setHeaderState]}>
			<div className='flex flex-col'>
				<NewHeader />
				<div
					onClick={() => {
						setHeaderState({...defaultHeaderState});
					}}
					className={`transition-all ease-in ease-out duration-100 ${pageActive ? 'invisible' : inactive}`}>
				</div>
				<div className='mt-[60px] w-full h-auto p-0'>
					{
						children
					}
				</div>
			</div>
		</HeaderContext.Provider>
		</GlobalContext.Provider>
	)
}

export default PageLayout;
