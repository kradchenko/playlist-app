import React, { Component } from 'react';

import SongDetail from '../../components/SongDetail/SongDetail';
import Button from '../../components/UI/Button/Button';

import classes from "./SongDetails.module.css";

class SongDetails extends Component {
    state = {
        songDetails: {
            name: null,
            author: null,
            songLength: null,
        },
        loading: true,
    };

    componentDidMount() {
        const updatedSongDetails = {
            ...this.state.songDetails,
        };

        console.log(this.props);

        updatedSongDetails.name = this.props.location.song.name;
        updatedSongDetails.author = this.props.location.song.author;
        updatedSongDetails.songLength = this.props.location.song.songLength;

        this.setState({songDetails: updatedSongDetails});
    }

    goBackHandler = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <div className={classes.SongDetails}>
                <SongDetail labelDetail="Name" detail={this.state.songDetails.name}/>
                <SongDetail labelDetail="Artist" detail={this.state.songDetails.author}/>
                <SongDetail labelDetail="Song Length" detail={this.state.songDetails.songLength}/>
                <div className={classes.button} >
                    <Button btnType="Neutral" fontSize="14px" padding="10px 15px" clicked={this.goBackHandler}>Back To Playlist</Button>
                </div>
            </div>
        )
    }
}

export default SongDetails;