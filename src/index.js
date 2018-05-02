import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

//package imports
import YTSearch from 'youtube-api-search';

//file imports
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const key = 'AIzaSyBuGnIGhHrw24ceM_VxO4pJWYVVHeIHVxQ';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      videos: [],
      currVideo: "",
    }

    this.searchClick("Surfing");

  };

  searchClick(search){

      YTSearch({key: key, term: search}, (videos) => {
        this.setState({
          videos: videos,
          currVideo: videos[0]
        });
    });
  }

  render(){

    const videoSearch = _.debounce(term => {this.searchClick(term)}, 250);
    return(
      <div>
        <SearchBar
          searchVideo={videoSearch}
        />

        <div className="row">
          <div className="col-md-8">
            <VideoDetail
              current={this.state.currVideo}
            />
          </div>
          <div className="col-md-4">
            <VideoList
              onClick={(currVideo) => this.setState({currVideo})}
              videos={this.state.videos}
            />
          </div>
        </div>

      </div>
    );
  };
};


ReactDOM.render(<App />, document.querySelector('.container'));
