import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from "./hoc/Layout/Layouts";
import Playlist from "./containers/Playlist/Playlist";
import AddSong from "./containers/AddSong/AddSong";
import SongDetails from './containers/SongDetails/SongDetails';

class App extends Component {
  render() {
      return (
          <Layout>
              <Switch>
                  <Route path="/add-song/" component={AddSong}/>
                  <Route path="/song-details/:id" component={SongDetails}/>
                  <Route path="/" exact component={Playlist}/>
              </Switch>
          </Layout>
      )
  };
}

export default App;
