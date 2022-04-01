import { useState } from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';

import TodoPage from './components/TodoPage/TodoPage';


function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='App'>
			<div className={isOpen ? 'left-panel panel-close' : 'left-panel panel-open'}>
				<LeftPanel isOpen={isOpen} setIsOpen={setIsOpen}/>
			</div>

			<div className='right-panel'>
				<TodoPage />
			</div>
		</div>

	)
	
}

export default App;
