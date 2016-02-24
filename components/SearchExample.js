import React from 'react'

class SearchExample extends React.Component {
	constructor(props) {
		super(props)
		this.state = { searchString:'' }
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState({ searchString: e.target.value })
	}

	render() {
		let posts = this.props.apiUrl
		let searchString = this.state.searchString.trim().toLowerCase()

		if(searchString.length > 0){
			posts = posts.filter((post) => {
				return post.title.toLowerCase().match(searchString)
			})
		}

		return <div className='container'>
			<input type='text' value={this.state.searchString} onChange={this.handleChange}/>
			
			<ul>
				{
					posts.map((post) => {
						return <div>
							<h1>{ post.title }</h1>
							<p>{ post.body }</p>
						</div>
					})
				}
			</ul>
		</div>
	}
}

export default SearchExample