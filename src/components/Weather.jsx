import React, { useState } from 'react'
import styles from '../styles/Weather.module.css'

function Weather() {
	const API_KEY = 'bf4c7061aaececa409309e24b5debd80'
	const [weatherArr, setWeatherArr] = useState([]) //данные о погоде
	let description = ''

	const getWeather = (e) => {
		const { weather, main, name } = JSON.parse(e)
		setWeatherArr([weather[0].description, Math.round(main.temp), name])
	}

	function getPos(requestURL) {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', requestURL)
		xhr.onload = () => getWeather(xhr.response)
		xhr.send()
	}
	// отправка GET-запроса и получение данных с openWeatherMap

	function runXHR(geo) {
		const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${geo.coords.latitude}&lon=${geo.coords.longitude}&appid=${API_KEY}&lang=ru&units=metric`
		return getPos(requestURL)
	}

	if (weatherArr.length === 0) {
		navigator.geolocation.getCurrentPosition(runXHR)
	} else {
		description = weatherArr[0]
		description = description[0].toUpperCase() + description.substring(1)
	}
	console.log(weatherArr)

	return (
		<div className={styles.weatherContainer}>
			<p> {description} </p>
			<p> {weatherArr[1]} ℃</p>
			<p> {weatherArr[2]} </p>
		</div>
	)
}

export default Weather
