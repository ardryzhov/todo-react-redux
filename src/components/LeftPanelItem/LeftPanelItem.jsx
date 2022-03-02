import React from 'react';
import './LeftPanelItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const LeftPanelItem = ({color, title}) => {

	const shortTitle = title.length > 7 ? `${title.slice(0, 7)}...` : title;

	return (
		<div className="left-panel-item">
			<div className="color-circle" style={{backgroundColor: `${color}`}}>
			</div>

			<div className="panel-item-title">
				<span>{shortTitle}</span>
			</div>

			<div className="panel-item-close">
				<FontAwesomeIcon className='panel-close-icon' icon={faXmark} />
			</div>
		</div>
	)
};

export default LeftPanelItem;