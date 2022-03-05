import React, { useState } from 'react';
import './AddFolderPopup.scss';

import { useDispatch } from 'react-redux'
import { addFolderAction } from '../../redux/actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const AddFolderPopup = ({changeFolderPopup}) => {

	const dispatch = useDispatch()

	const [val, setValue] = useState('')
	const [colors, setColors] = useState([
		{_id: 1,
			color: '#C9D1D3', select: true},
		{_id: 2,
			color: '#42B883', select: false},
		{_id: 3,
			color: '#64C4ED', select: false},
		{_id: 4,
			color: '#FFBBCC', select: false},
		{_id: 5,
			color: '#B6E6BD', select: false},
		{_id: 6,
			color: '#C355F5', select: false},
		{_id: 7,
			color: '#090119', select: false},
		{_id: 8,
			color: '#FF6464', select: false},
	])

	const selectedColor = (id) => {
		const selected = colors.map(col => {
			if (col._id === id) {
				col.select = true
			} else {
				col.select = false
			}
			return col
		})
		setColors([...selected])
	}

	const addFolder = () => {
		const color = colors.filter(col => col.select)[0].color;
		if (val.length) {
			dispatch(addFolderAction({id: uuidv4(), val, color}));
			setValue('');
			changeFolderPopup()
		}	
	}

	const addFolderKeydown = (e) => {
		if (e.code === 'Enter') {
			addFolder()
		}
	}


	return (
		<div className="add-folder-popup-wrap">
			<div className="add-folder-popup-table">
				<div className="folder-popup-close" onClick={changeFolderPopup}>
					<FontAwesomeIcon className='folder-close-icon' icon={faCircleXmark} />
				</div>

				<div className="add-folder-popup-input">
					<input type="text" placeholder='Название папки' value={val} onKeyDown={(e) => addFolderKeydown(e)} onInput={(e) => setValue(e.target.value)}/>
				</div>

				<div className="select-folder-color">
					{colors.map(item => {
						return (
							<div className={item.select ? 'folder-color selected-color' : 'folder-color'} key={item._id} style={{backgroundColor: `${item.color}`}} onClick={(e) => selectedColor(item._id)}>
							</div>
						)
					})}
				</div>

				<div className="add-folder-btn">
					<button onClick={addFolder}>Добавить</button>
				</div>
			</div>
		</div>
	)
};

export default AddFolderPopup;