import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FAC extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            input: ''}

        this.collectInput = this.collectInput.bind(this)
    }

    collectInput(event){
       this.setState({input: event.target.value})
    }

  render () {
        const filteredArtists = this.props.artists.filter(artist => {
            return artist.name.toLowerCase().includes(this.state.input)
        })

    return (

        <div>
          <FilterInput collectInput = {this.collectInput}  />
          <Artists artists={filteredArtists} />
        </div>
    )
  }
}

export default FAC;
