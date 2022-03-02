import React from 'react';
import './MainPage.scss';

const MainPage = () => {
	return (
		<div className="main-page-wrap">
			<h2>Что бы воспользоваться Todo, сделайте следующее:</h2>

			<ol>
				<li>Наведите на кнопку 'Добавить папку'</li>
				<li>В появившемся окне введите название и выберите цвет папки</li>
				<li>Внутри папки мы можете: добавлять новые дела, менять название папки, отмечать выполненные задания</li>
			</ol>
		</div>
	)
};

export default MainPage;