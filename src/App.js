import React, { useState } from 'react'
import Container from './components/Container'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Weather from './components/Weather'
import './styles/App.css'
const _ = require('lodash')

const randomImg = _.random(1, 7)

function App() {
	const imageName = require(`./img/background/${randomImg}.jpg`)
	const [name = '', setName] = useState('')
	const [items, setItems] = useState([])

	const createItem = (newItem) => {
		setItems([...items, newItem])
	}

	return (
		<div className='container'>
			<Weather />
			<img
				className='background-img'
				src={imageName}
				alt='background img'
			/>
			<Container name={name} setName={setName} />
			<div className='toDo-container'>
				<TodoForm create={createItem} />
				<TodoList items={items} />
			</div>
		</div>
	)
}

export default App
