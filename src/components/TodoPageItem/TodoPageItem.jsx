import React from 'react';
import './TodoPageItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { changeDoneTodoAction, deleteTodoAction } from '../../redux/actions';

const TodoPageItem = ({title, id, todo, todoListId}) => {

	const store = useSelector(state => state.todo);
	const dispatch = useDispatch();

	const isDoneTodo = (e) => {
		if (todo.id !== id) return;

		const todoItem = store.filter(item => item.id === todoListId);
		const todoList = todoItem[0].todos.filter(item => item.id === id);
		const idx = todoItem[0].todos.findIndex(item => item.id === id);
		todoList[0].isDone = !todoList[0].isDone;
		const newArr = [...todoItem[0].todos.slice(0, idx), {...todoList[0]}, ...todoItem[0].todos.slice(idx + 1)];

		dispatch(changeDoneTodoAction({newArr, todoListId}))
	}

	const deleteTodo = () => {
		const todoItem = store.filter(item => item.id === todoListId);
		const idx = todoItem[0].todos.findIndex(item => item.id === id);
		const newArr = [...todoItem[0].todos.slice(0, idx), ...todoItem[0].todos.slice(idx + 1)];
		dispatch(deleteTodoAction({newArr, todoListId}))
	}

	return (
		<div className="todo-page-item-wrap">
			<div className="todo-item-input">
				<input type="checkbox" id={`${id}`}/>
				<span className='fake-ckeckbox'></span>
				<label htmlFor={`${id}`} onClick={isDoneTodo}>{title}</label>
			</div>
			<div className="todo-item-delete">
				<FontAwesomeIcon className='todo-item-delete-icon' icon={faXmark} onClick={deleteTodo}/>
			</div>
		</div>
	)
};

export default TodoPageItem;