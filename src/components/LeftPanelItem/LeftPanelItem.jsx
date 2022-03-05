import React from 'react';
import './LeftPanelItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import { deleteFolderAction, selectFolderAction } from '../../redux/actions';


const LeftPanelItem = ({item, color, title}) => {

	const dispatch = useDispatch();

	const deleteItem = (id) => {
		dispatch(deleteFolderAction(id))
	}

	const selectItem = (id) => {
		dispatch(selectFolderAction(id))
	}
	
	const shortTitle = title.length > 7 ? `${title.slice(0, 7)}...` : title;

	return (
			<div className="left-panel-item">
				<div className="color-circle" style={{backgroundColor: `${color}`}}>
				</div>

				<div className="panel-item-title" onClick={() => selectItem(item.id)}>
					<span>{shortTitle}</span>
				</div>

				<div className="panel-item-close">
					<FontAwesomeIcon className='panel-close-icon' icon={faXmark} onClick={() => deleteItem(item.id)}/>
				</div>
			</div>
	)
};

export default LeftPanelItem;