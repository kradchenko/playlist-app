import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/Header';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Header/>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;