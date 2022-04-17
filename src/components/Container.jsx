import React from 'react'
import MyName from './MyName'

const Container = ({ name, setName }) => {
	let dynamicName = ''

	const submitForm = (e) => {
		e.preventDefault()
		setName(dynamicName)
	}

	if (name === '') {
		return (
			<form onSubmit={submitForm}>
				<input
					onChange={(e) => (dynamicName = e.target.value)}
					className='nameInput'
					type='text'
					placeholder='What is your name?'
				/>
				<hr className='under-line under-line_name' />
			</form>
		)
	} else {
		return <MyName name={name} />
	}
}

export default Container
