import './App.css';
import LeftPanel from './components/LeftPanel';
import MainPage from './components/MainPage';

import { Routes, Route, Link } from 'react-router-dom';
import Notfoundpage from './components/Notfoundpage';
import TodoPage from './components/TodoPage/TodoPage';

function App() {
	return (
		<div className="App">
			<div className="left-panel">
				<LeftPanel/>
			</div>

			<div className="rigth-panel">
				<Routes>
					{/* <Route path='/' element={<MainPage/>}/> */}
					<Route path='/' element={<TodoPage/>}/>
					<Route path='*' element={<Notfoundpage/>}/>
				</Routes>
			</div>
		</div>
	)
}

export default App;
