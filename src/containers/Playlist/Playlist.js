import React, { Component } from 'react';
import axios from '../../axios-orders';

import SongList from '../../components/SongList/SongList';

import classes from './Playlist.module.css';

class Playlist extends Component {
    state = {
        songList: [],
    };

    showSongDetailHandler = (songId) => {
        this.props.history.push({
                pathname: '/song-details/' + songId,
            },
            songId,
        );
    };

    // Method in case song were stored in state.
    // removeSongHandler = (index) => {
    //     const updatedSongList = [
    //         ...this.state.songList,
    //     ];
    //     updatedSongList.splice(index, 1);
    //
    //     this.setState({songList: updatedSongList});
    // };

    removeSongHandler = (songId) => {
        axios.delete('playlist?id=' + songId)
            .then(response => {
                console.log('[Remove Song] : ', response.data);
            })
            .catch(error => {
                console.log('[Remove Song Error] : ', error.response.data)
            });
    };

    render() {
        return (
            <div className={classes.marginTop}>
                <SongList songList={this.state.songList} showSongDetail={this.showSongDetailHandler} removeSong={this.removeSongHandler}/>
            </div>
        );
    }
}

export default Playlist;

