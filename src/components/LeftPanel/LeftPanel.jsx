import React, { useState } from 'react';
import './LeftPanel.scss';

import LeftPanelItem from '../LeftPanelItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AddNewFolder from '../AddNewFolder/AddNewFolder';
import { useSelector } from 'react-redux';

const LeftPanel = () => {
	const store = useSelector(state => state.todo);
	console.log(store)


	return (
		<div className="left-panel-wrap">
			<div className="panel-info">
				<div className="panel-info-title">
					<FontAwesomeIcon className='panel-title-icon' icon={faBars}/>
					<span>Все задачи</span>
				</div>

				{store.length === 0 ? false : store.map(item => <LeftPanelItem key={`${item.idx}_${item.selectedColor}`} color={item.selectedColor} title={item.val}/>)}

				<AddNewFolder/>
			</div>
		</div>
	)
};

export default LeftPanel;