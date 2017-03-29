import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

class FAC extends React.Component {

  render () {
    return (
        <div>
          <FilterInput/>
          <Artists artists={[]}/>
        </div>
    )
  }
}

export default FAC;
