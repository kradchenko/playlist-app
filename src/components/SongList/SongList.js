import React from 'react';

import Song from './Song/Song';
import classes from './SongList.module.css'

const songList = (props) => {
    const songList = props.songList.map((song, index) =>
            <Song key={index}
                  name={song.name}
                  clicked={() => props.showSongDetail(index)}
                  removed={() => props.removeSong(index)}/>
    );

    return (
        <div className={classes.SongList}>
            <div className={classes.ListHeader}>
                <p>Title</p>
            </div>
            {songList}
        </div>
    );
};

export default songList;