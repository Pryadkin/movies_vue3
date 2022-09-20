import axios, { Canceler } from 'axios'

export const instance = axios.create({
	// timeout: 100000,
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json',
	},
	// maxContentLength: 10000,
})