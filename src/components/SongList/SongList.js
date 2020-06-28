import React from 'react';

import Song from './Song/Song';
import classes from './SongList.module.css'

const songList = (props) => {
    const songList = props.songList.map(song =>
            <Song key={song.id}
                  name={song.details.name}
                  clicked={() => props.showSongDetail(song.id)}
                  removed={() => props.removeSong(song.id)}/>
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