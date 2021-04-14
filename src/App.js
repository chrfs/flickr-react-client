import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import http from 'jsonp';
import { appendFeedImages } from './store/actions';
import FeedImages from './views/FeedImages';
import FavoriteImages from './views/FavoriteImages';

function App({ dispatch }) {
  const fetchImages = () => {
    // Typical ajax requests with axios are not working due to strict cors restrictions, there I need to use jsonp.
    http('https://api.flickr.com/services/feeds/photos_public.gne?format=json&api_key=78b69e6da533d78b80027f913a96dac0');
    window.jsonFlickrFeed = (data) => dispatch(appendFeedImages(data.items));
  }

  // eslint-disable-next-line
  useEffect(fetchImages, [])

  return (  
    <Switch>
      <Route exact path="/" component={FeedImages} />
      <Route exact path="/favorites" component={FavoriteImages} />
    </Switch>
  )
}

export default connect()(App);