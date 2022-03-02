import React from 'react';
import './TodoPage.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import TodoPageItem from '../TodoPageItem/TodoPageItem';

const TodoPage = () => {
	return (
		<div className="todo-page-wrap">
			<div className="todo-page-title">
				<input type="text" value='Hello from TodoPage.jsx' disabled/>
				<FontAwesomeIcon className='todo-page-pen' icon={faPen} />
			</div>

			<div className="todo-page-items">
				<TodoPageItem/>
			</div>

			<div className="todo-page-add-item">
				<div className="todo-add-item-plus">
					<FontAwesomeIcon className='todo-add-plus-icon' icon={faPlus} />
				</div>
				<div className="todo-add-item-input">
					<input type="text" placeholder='Новая задача' />
				</div>
			</div>
		</div>
	);
};

export default TodoPage;