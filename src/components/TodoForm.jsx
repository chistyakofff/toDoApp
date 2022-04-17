import React, { useState } from 'react'

const TodoForm = ({ create }) => {
	const [item, setItem] = useState({ value: '' })

	const addNewItem = (e) => {
		e.preventDefault()
		if (item.value !== '') {
			const newItem = {
				...item,
				id: Date.now(),
				key: Date.now(),
			}
			setItem({ value: '' })
			create(newItem)
		}
	}

	return (
		<form onSubmit={addNewItem}>
			<div className='toDo-header'>What are we doing today?</div>
			<input
				value={item.value}
				onChange={(e) => setItem({ ...item, value: e.target.value })}
				className='toDoInput'
				type='text'
			/>
			<hr className='under-line under-line_toDo' />
		</form>
	)
}

export default TodoForm
