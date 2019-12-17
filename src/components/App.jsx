import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import youtube, { baseParams } from '../apis/youtube';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.getData = this.getData.bind(this);
    this.onVidSelect = this.onVidSelect.bind(this);
  }

  onVidSelect(video) {
    this.setState({ selectedVideo: video });
    console.log(video);
  }

  async getData(term) {
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term,
      },
    });
    console.log(response.data.items);
    this.setState({ videos: response.data.items });
  }

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <div className="ui container">
        <SearchBar getDataOnSubmit={this.getData} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVidSelect={this.onVidSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
