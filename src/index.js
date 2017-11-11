import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'; 

//const API_KEY = 'AIzaSyAx8_7aPRG3KY6Hc-X4SxL0VZ1UA2uRRsE';
// Create a new conponent that produces some HTML.
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}
// Take this component and put it on the page(DOM).
ReactDOM.render(<App />, document.querySelector('.container') );
