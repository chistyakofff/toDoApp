import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ items }) => {
	return [
		items.map((item, index) => (
			<TodoItem number={index + 1} post={item.value} key={item.id} />
		)),
	]
}

export default TodoList
