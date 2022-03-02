import React, { useState } from 'react';
import './LeftPanel.scss';

import LeftPanelItem from '../LeftPanelItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AddNewFolder from '../AddNewFolder/AddNewFolder';
import { useSelector } from 'react-redux';

const LeftPanel = () => {
	const fold = useSelector(state => state.todo)[1].folders;

	return (
		<div className="left-panel-wrap">
			<div className="panel-info">
				<div className="panel-info-title">
					<FontAwesomeIcon className='panel-title-icon' icon={faBars}/>
					<span>Все задачи</span>
				</div>

				{fold.length === 0 ? false : fold.map(item => <LeftPanelItem key={`${item.idx}`} item={item} color={item.selectedColor} title={item.val}/>)}

				<AddNewFolder/>
			</div>
		</div>
	)
};

export default LeftPanel;