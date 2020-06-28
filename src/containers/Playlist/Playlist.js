import React, { Component } from 'react';
import axios from '../../axios-orders';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import SongList from '../../components/SongList/SongList';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import RemoveConfirmation from '../../components/RemoveConfirmation/RemoveConfirmation';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Playlist extends Component {
    state = {
        songList: null,
        loading: false,
        confirmation: false,
        songId: '',
    };

    componentDidMount() {
        this.fetchPlaylist();
    }

    fetchPlaylist = () => {
        this.setState({loading: true});

        axios.get('playlist.json')
            .then(response => {
                this.setState({songList: response.data, loading: false});
            })
            .catch(error => {});
    };

    showSongDetailHandler = (songId) => {
        const song = { ...this.state.songList[songId]};

        this.props.history.push({
                pathname: '/song-details/' + songId,
                song: song,
            },
        );
    };

    removeSongHandler = () => {
        axios.delete('playlist/' + this.state.songId + '.json')
            .then(response => {
                this.cancelRemoveSongConfirmation();
                this.fetchPlaylist();
            })
            .catch(error => {
                console.log('[Remove Song Error] : ', error.response.data);
            });
    };

    openRemoveSongConfirmation = (songId) => {
        this.setState({confirmation: true, songId: songId});
    };

    cancelRemoveSongConfirmation = () => {
        this.setState({confirmation: false, songId: ''});
    };


    render() {
        let removeConfirmation = null;
        let songListArray = [];
        for(let key in this.state.songList) {
            songListArray.push({
                    id: key,
                    details: this.state.songList[key],
                }
            );
        }

        let songList = <SongList songList={songListArray}
                                 showSongDetail={this.showSongDetailHandler}
                                 removeSong={this.openRemoveSongConfirmation}/>;

        removeConfirmation = <RemoveConfirmation
                songId={this.state.songId}
                songList={this.state.songList}
                cancelRemoving={this.cancelRemoveSongConfirmation}
                removeSong={this.removeSongHandler}/>;

        if (this.state.loading) {
            songList = <Spinner/>;
        }

        return (
            <Aux>
                <Modal show={this.state.confirmation}
                       modalClosed={this.cancelRemoveSongConfirmation} >
                    {removeConfirmation}
                </Modal>
                {songList}
            </Aux>
        );
    }
}

export default withErrorHandler(Playlist, axios);

