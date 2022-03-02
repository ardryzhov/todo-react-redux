import React from 'react';
import './LeftPanelItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteFolderAction, selectFolderAction } from '../../redux/actions';
import { useSelector } from 'react-redux';

const LeftPanelItem = ({item, color, title}) => {

	const dispatch = useDispatch();
	// const store = useSelector(state => state.todo);
	// const selected = useSelector(state => state.todo)[0].select;

	// const state = useSelector(state => state.todo)[0].select;

	const deleteItem = (idx) => {
		dispatch(deleteFolderAction(idx))
	}

	const selectItem = (idx) => {
		dispatch(selectFolderAction(idx))
	}

	const shortTitle = title.length > 7 ? `${title.slice(0, 7)}...` : title;

	return (
		<div className="left-panel-item">
			<div className="color-circle" style={{backgroundColor: `${color}`}}>
			</div>

			<div className="panel-item-title" onClick={() => selectItem(item.idx)}>
				<span>{shortTitle}</span>
			</div>

			<div className="panel-item-close">
				<FontAwesomeIcon className='panel-close-icon' icon={faXmark} onClick={() => deleteItem(item.idx)}/>
			</div>
		</div>
	)
};

export default LeftPanelItem;