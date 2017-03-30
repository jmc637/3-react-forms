import React from 'react'
import NewPlaylist from '../components/NewPlaylist'

class PlayListContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            playListName: '',
            finalPlayListName:''
        }
        this.getPlayListName = this.getPlayListName.bind(this)
        this.getChangingName = this.getChangingName.bind(this)
    }

    getPlayListName(event) {
        console.log('i was called')
        this.setState({finalPlayListName: this.state.playListName, playListName: ''})
        // event.preventDefault()
    }

    getChangingName(event) {
        this.setState({playListName: event.target.value})

    }

    render() {
        console.log(this.state)
        console.log(this.state.playListName)
        return <NewPlaylist getPlayListName={this.getPlayListName} getChangingName={this.getChangingName} value={this.state.playListName} />
    }
}

export default PlayListContainer