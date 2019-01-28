import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube'
import VideoList from './VideoList';

class App extends React.Component{
    
    state = {
        videos: []
    }

    onSearchSubmit = async term => {
        //console.log(term);

        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        this.setState({videos: response.data.items})

    }

    render(){
        return(
            <div className="ui contatiner">
                <SearchBar onAppSubmit={this.onSearchSubmit}/>
                I have {this.state.videos.length} videos

                <VideoList videos={this.state.videos} />

            </div>
        )
    }
}

export default App;