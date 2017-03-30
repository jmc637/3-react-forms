import React from 'react';

const NewPlaylist = (prop) => {
    return (
        <form onSubmit={prop.getPlayListName}>
            <input onChange={prop.getChangingName} value={prop.value}/>
            <button type="submit" disabled={prop.disabled}>Submit</button>
            <div className="alert alert-warning" hidden={!prop.lengthWarning}>Please enter a name</div>
        </form>
        
    )
}


export default NewPlaylist