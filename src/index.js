import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideosList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY= 'AIzaSyC8iXhaLUjphItM01aL8oLSXb0nLBeJ7Vc';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term : 'lord of botato'}, (videos)=>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideosList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
};

ReactDOM.render(<App />,document.querySelector('.container'));