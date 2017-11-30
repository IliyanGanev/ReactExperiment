import React, { Component } from 'react'

// const SearchBar = () => {
// 	return <input />;
// };

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	render() {
		return (
			<div className="search-bar">
			<h1>YoTube</h1>
				<input
					value={this.state.term}
				 	onChange={event => this.onInputChange(event.target.value)} />
			</div>

		);
	}

	onInputChange(term) {
		console.log(event.target.value);
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;
