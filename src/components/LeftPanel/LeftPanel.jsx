import React from 'react';
import './LeftPanel.scss';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import LeftPanelItem from '../LeftPanelItem';
import AddNewFolder from '../AddNewFolder/AddNewFolder';

const LeftPanel = ({setIsOpen, isOpen}) => {
	const fold = useSelector(state => state.todo);




	return (

		<>


		<div className="left-panel-wrap">
		<FontAwesomeIcon className='panel-title-icon' icon={faBars} onClick={() => setIsOpen(!isOpen)}/>
			<div className="panel-info">
				<div className="panel-info-menu">
					<div className="menu-burger">
						<span/>
					</div>
				</div>
				<div className="panel-info-title">
					<span>Ваши задачи</span>
				</div>

				{fold.length === 0 ? false : fold.map(item => <LeftPanelItem key={`${item.id}`} item={item} color={item.color} title={item.val}/>)}

				<AddNewFolder/>
			</div>
		</div>
		</>

	)

	// return (
	// 	<div className="left-panel-wrap">
	// 		<div className="panel-info">
	// 			<div className="panel-info-title">
	// 				<FontAwesomeIcon className='panel-title-icon' icon={faBars}/>
	// 				<span>Ваши задачи</span>
	// 			</div>

	// 			{fold.length === 0 ? false : fold.map(item => <LeftPanelItem key={`${item.id}`} item={item} color={item.color} title={item.val}/>)}

	// 			<AddNewFolder/>
	// 		</div>
	// 	</div>
	// )
};

export default LeftPanel;