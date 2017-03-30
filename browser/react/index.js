import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import FAC from './containers/FAC';
import PlayListContainer from './containers/PlayListContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import NewPlaylist from './components/NewPlaylist';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Songs from './components/Songs';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer} foo={'foo'}>
      <Route path="/albums" component={Albums} />
      <Route path="/albums/:albumId" component={Album} />
      <Route path="/artists" component={FAC} />
      <Route path="/artists/:artistId" component={Artist}>
        <Route path="/artists/:artistId/albums" component={Albums} />
        <Route path="/artists/:artistId/songs" component={Songs} />
      </Route>
      <Route path="/NewPlaylist" component={PlayListContainer}/>
      <IndexRedirect to='/albums' />
    </Route>
  </Router>,
  document.getElementById('app')
);
