import React from 'react';
import './AddNewFolder.scss';
import AddFolderPopup from '../AddFolderPopup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddNewFolder = () => {
	return (
		<div className="add-new-folder-wrap">
			<div className="add-folder-btn">
				<div className="add-new-folder-icon">
					<FontAwesomeIcon icon={faPlus} />
				</div>

				<div className="add-new-folder-title">
					<span>Добавить папку</span>
				</div>
			</div>

			<AddFolderPopup/>
		</div>
	);
};

export default AddNewFolder;