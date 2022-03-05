import React from 'react';
import './TodoPageItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { changeDoneTodoAction } from '../../redux/actions';

const TodoPageItem = ({title, id, todo, todoListId, setTodo, todos, setTodos}) => {

	const store = useSelector(state => state.todo);
	const dispatch = useDispatch();

	const isDoneTodo = (e) => {
		// const done = todos.filter(todo => todo.id === id)[0];
		// const idx = todos.findIndex(todo => todo.id === id);
		// done.isDone = !done.isDone;
		// const newArr = [...todos.slice(0, idx), {...done}, ...todos.slice(idx + 1)];
		// setTodos(newArr);
		// console.log(store.val)

		if (todo.id !== id) return;

		const todoItem = store.filter(item => item.id === todoListId);
		const todoList = todoItem[0].todos.filter(item => item.id === id);
		const idx = todoItem[0].todos.findIndex(item => item.id === id);
		todoList[0].isDone = !todoList[0].isDone;
		const newArr = [...todoItem[0].todos.slice(0, idx), {...todoList[0]}, ...todoItem[0].todos.slice(idx + 1)];


		dispatch(changeDoneTodoAction({newArr, todoListId}))
		console.log('store: ', store)


		// !!
		// if (todo.id === id) {
		// 	// todo:  Менять isDone при нажатии. Посмотреть как это сделано в вверхнем зачёркнутом коменте
		// 	const todoItem = store.filter(item => item.id === todoListId);
		// 	const todoList = todoItem[0].todos.filter(item => item.id === id);
		// 	const idx = todoItem[0].todos.findIndex(item => item.id === id);
		// 	todoList[0].isDone = !todoList[0].isDone;
		// 	const newArr = [...todoItem[0].todos.slice(0, idx), {...todoList[0]}, ...todoItem[0].todos.slice(idx + 1)];


		// 	console.log('newArr: ', newArr);
		// 	console.log('todoListId: ', todoListId);
		// 	// console.log('store: ', store)

			// dispatch(changeDoneTodoAction({newArr, todoListId}))
		// }
		//!!

	}

	const deleteTodo = () => {
		const idx = todos.findIndex(todo => todo.id === id);
		const newArr = [...todos.slice(0, idx), ...todos.slice(idx + 1)];
	}

	return (
		<div className="todo-page-item-wrap">
			<div className="todo-item-input">
				<input type="checkbox" id={`${id}`}/>
				<span className='fake-ckeckbox'></span>
				<label htmlFor={`${id}`} onClick={isDoneTodo}>{title}</label>
				{/* <label htmlFor={`${id}`} onClick={isDoneTodo}>{todo.title}</label> */}
			</div>
			<div className="todo-item-delete">
				<FontAwesomeIcon className='todo-item-delete-icon' icon={faXmark} onClick={deleteTodo}/>
			</div>
		</div>
	)
};

export default TodoPageItem;