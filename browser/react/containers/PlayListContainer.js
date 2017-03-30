import React from 'react'
import NewPlaylist from '../components/NewPlaylist'
import axios from 'axios'

class PlayListContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playListName: '',
            disabled: true,
            lengthWarning: false, 
        }
        this.getPlayListName = this.getPlayListName.bind(this)
        this.getChangingName = this.getChangingName.bind(this)
    }

    getPlayListName(event) {
        console.log('i was called')
        axios.post('/api/playlists', { name: this.state.playListName })
        .then(res => res.data)
        .then(result => {
            console.log(result) // response json from the server!
        });
    }

    getChangingName(event) {
        let disabled;
        let value = event.target.value;
        let lengthWarning = false;
        // disabled or not
        if(value.length === 0 || value.length > 16){
            disabled = true;
        }
        else{
            disabled = false;
        }
        // length lengthWarning
        if(value.length === 0){
            lengthWarning = true;
        }
        this.setState({
            playListName: value,
            disabled: disabled,
            lengthWarning: lengthWarning,
        });

    }

    render() {
        // console.log(this.state)
        // console.log(this.state.playListName)
        return <NewPlaylist getPlayListName={this.getPlayListName} getChangingName={this.getChangingName} value={this.state.playListName} disabled={this.state.disabled} lengthWarning={this.state.lengthWarning}/>
    }
}

export default PlayListContainer