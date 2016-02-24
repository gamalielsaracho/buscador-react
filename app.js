import React from 'react'
import Ajax from 'superagent'

import SearchExample from './components/SearchExample'

Ajax.get('http://jsonplaceholder.typicode.com/posts')
	.end((error, data) => {
		if(!error && data) {
			let url = data.body
			React.render(<SearchExample apiUrl={url}/>, document.getElementById('container'))
		} else {
			console.log(error)
		}
	})
