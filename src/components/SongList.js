import React from 'react'

const SongList = ({songs}) => {

    const songsItems = songs.map((song, index) => {
        return (
            <ul>
                <li>{index + 1}</li>
                <li>{song["im:name"].label}</li>
                <li>{song["im:artist"].label}</li>
            </ul>
        )
    })


    return (
        <div>
            <ul>
                {songsItems}
            </ul>
        </div>
    )
}

export default SongList
