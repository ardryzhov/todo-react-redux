import React from 'react';
import './TodoPageItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const TodoPageItem = () => {
	return (
		<div className="todo-page-item-wrap">
			<div className="todo-item-input">
				<input type="checkbox" id='title'/>
				<span className='fake-ckeckbox'></span>
				<label htmlFor="title">Выучить Redux</label>
			</div>
			<div className="todo-item-delete">
				<FontAwesomeIcon className='todo-item-delete-icon' icon={faXmark}/>
			</div>
		</div>
	)
};

export default TodoPageItem;