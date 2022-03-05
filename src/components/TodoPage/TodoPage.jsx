import React, { useEffect, useRef, useState } from 'react';
import './TodoPage.scss';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

import TodoPageItem from '../TodoPageItem';
import MainPage from '../MainPage';
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

	const inputRef = useRef()

	const [title, setTitle] = useState(opened !== undefined ? opened.val : '')
	const [todo, setTodo] = useState({})
	const [val, setVal] = useState('');

	const unlockUpadeteTitle = () => {
		inputRef.current.classList.toggle('change-input')
		inputRef.current.disabled = !inputRef.current.disabled
	}

	useEffect(() => {
		setTitle(opened !== undefined ? opened.val : '')
	}, [store])

	useEffect(() => {
		if (todo.hasOwnProperty('title')) dispatch(addTodoAction({todo, id}))
	}, [todo])

	useEffect(() => {
		dispatch(updateTitleFolderAction({title, id}))
	}, [title])

	const addTodo = () => {
		setTodo({
			title: val,
			id: uuidv4(),
			isDone: false
		})
		setVal('')
	}

	const addTodoKeydown = (e) => {
		if (e.code === 'Enter') {
			addTodo()
		}
	}

	if (opened === undefined) {
		return (<MainPage/>)
	}

	return (
		<div className="todo-page-wrap">
			<div>
				<div className="todo-page-title">
				<input type="text" value={title} style={{color: `${color}`}} onInput={() => setTitle(inputRef.current.value)} ref={inputRef} disabled/>
				<FontAwesomeIcon className='todo-page-pen' onClick={unlockUpadeteTitle} icon={faPen} />
			</div>

			<div className="todo-page-items">
				{opened.todos.map(todo => (<TodoPageItem title={todo.title} key={`${todo.id}`} todoListId={id} todo={todo} id={todo.id}/>))}
			</div>

			<div className="todo-page-add-item">
				<div className="todo-add-item-plus">
					<FontAwesomeIcon className='todo-add-plus-icon' icon={faPlus} onClick={addTodo}/>
				</div>
				<div className="todo-add-item-input">
					<input type="text" placeholder='Новая задача' value={val} onKeyDown={(e) => addTodoKeydown(e)} onInput={(e) => setVal(e.target.value)}/>
				</div>
			</div>
			</div>
		</div>
	);
};

export default TodoPage;