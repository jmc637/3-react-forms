import React from 'react';

const NewPlaylist = (prop) => {
    return (
        <form onSubmit={prop.getPlayListName}>
    <input onChange={prop.getChangingName} value={prop.value}/>
    <button type="submit">Submit</button>
        </form>
    )
}


export default NewPlaylist