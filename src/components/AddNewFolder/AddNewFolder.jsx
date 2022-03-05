import React, { useState } from 'react';
import './AddNewFolder.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import AddFolderPopup from '../AddFolderPopup';

const AddNewFolder = () => {

	const [isOpen, setIsOpen] = useState(false);

	const changeFolderPopup = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<div className="add-new-folder-wrap">
			<div className="add-folder-btn" onClick={changeFolderPopup}>
				<div className="add-new-folder-icon">
					<FontAwesomeIcon icon={faPlus} />
				</div>

				<div className="add-new-folder-title">
					<span>Добавить папку</span>
				</div>
			</div>

			{isOpen ? <AddFolderPopup changeFolderPopup={changeFolderPopup}/> : false}
		</div>
	);
};

export default AddNewFolder;