import React, { Component } from 'react';
import axios from '../../axios-orders';

import Aux from '../../hoc/Auxiliary/Auxiliary';

class SongDetails extends Component {
    state = {
        name: null,
        author: null,
        songLength: null,
        loading: true,
    };

    componentDidMount() {
        axios.get('/playlist?id=' + this.props.history.songId)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
    }

    goBackHandler = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <Aux>

            </Aux>
        )
    }
}

export default SongDetails;