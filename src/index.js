import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'; 
import SearchBar from './components/search_bar'; 
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAx8_7aPRG3KY6Hc-X4SxL0VZ1UA2uRRsE';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos:[] };
		 
		YTSearch({key: API_KEY, term: 'snowboards'}, (videos) => {
	 		this.setState({ videos });
	 		// videos: videos
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
} 


ReactDOM.render(<App />, document.querySelector('.container') );
