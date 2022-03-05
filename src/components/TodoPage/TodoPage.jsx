import React, { useEffect, useRef, useState } from 'react';
import './TodoPage.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import TodoPageItem from '../TodoPageItem';
import MainPage from '../MainPage';

import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { updateTitleFolderAction, addTodoAction } from '../../redux/actions';

const TodoPage = () => {

	const store = useSelector(state => state.todo);
	const dispatch = useDispatch();
	let id, color;


	const opened = store.filter(item => {
		if (item.isOpen) {
			color = item.color;
			id = item.id;
			return item
		}
	})[0]


	// console.log('title: ', titleA);
	// console.log('id: ', id);
	// console.log('color: ', color);

	// if (openFolder.length !== 0) {
	// 	title = openFolder[0].val;
	// 	id = openFolder[0].id;
	// 	color = openFolder[0].color;
	// }



	const inputRef = useRef()


	const [title, setTitle] = useState(opened !== undefined ? opened.val : '')


	const [todo, setTodo] = useState({})
	// const [todos, setTodos] = useState(opened.todos)
	const [val, setVal] = useState('');



	const unlockUpadeteTitle = () => {
		inputRef.current.classList.toggle('change-input')
		inputRef.current.disabled = !inputRef.current.disabled
	}

	useEffect(() => {
		setTitle(opened !== undefined ? opened.val : '')
	}, [store])

	// useEffect(() => {
	// 	dispatch(addTodoAction({todos, id}))
	// }, [todos])

	useEffect(() => {
		if (todo.hasOwnProperty('title')) dispatch(addTodoAction({todo, id}))
	}, [todo])

	useEffect(() => {
		dispatch(updateTitleFolderAction({title, id}))
	}, [title])


	if (opened === undefined) {
		return (<MainPage/>)
	}

	const addTodo = () => {
		// setTodos([...todos, {title: val, isDone: false, id: uuidv4()}])
		// setVal('')
		setTodo({
			title: val,
			id: uuidv4(),
			isDone: false
		})
		setVal('')
		// dispatch(addTodoAction({val, id}))
	}




	return (
		<div className="todo-page-wrap">
			<div>
				<div className="todo-page-title">
				<input type="text" value={title} style={{color: `${color}`}} onInput={() => setTitle(inputRef.current.value)} ref={inputRef} disabled/>
				<FontAwesomeIcon className='todo-page-pen' onClick={unlockUpadeteTitle} icon={faPen} />
			</div>

			<div className="todo-page-items">
				{opened.todos.map(todo => (<TodoPageItem title={todo.title} key={`${todo.id}`} todoListId={id} todo={todo} setTodo={setTodo} id={todo.id}/>))}
			</div>

			<div className="todo-page-add-item">
				<div className="todo-add-item-plus">
					<FontAwesomeIcon className='todo-add-plus-icon' icon={faPlus} onClick={addTodo}/>
				</div>
				<div className="todo-add-item-input">
					<input type="text" placeholder='Новая задача' value={val} onInput={(e) => setVal(e.target.value)}/>
				</div>
			</div>
			</div>
		</div>
	);
};

export default TodoPage;