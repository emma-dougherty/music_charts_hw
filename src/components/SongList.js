import React from 'react'

const SongList = ({songs}) => {

    const songsItems = songs.map((song, index) => {
        return (
            // <ul>
            //     <li id='position'>{index + 1}</li>
            //     <li id='title'>{song["im:name"].label}</li>
            //     <li id='artist'>{song["im:artist"].label}</li>
            // </ul>
            <>
        
            <div class='song-list'>
                <div class='position'>{index + 1}</div>
                <div class='title'>{song["im:name"].label}</div>
                <div class='artist'>{song["im:artist"].label}</div>
                </div>
            </>
        )
    })


    return (

        
                {songsItems}
    
    )
}

export default SongList
