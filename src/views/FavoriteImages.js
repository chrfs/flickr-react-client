import React from 'react';
import { connect } from 'react-redux'
import ImageBox from '../components/ImageBox';
import './imageGrid.scss';

const favoriteImages = ({ favoriteImages }) => {
  const renderFavoriteImageFeed = () => {
    return (<main className="image-feed">
      {favoriteImages.map((image) => (
        <ImageBox key={image.media.m} image={image} isFavorite={true} />
      ))}
    </main>)
  }

  const renderNoFavoriteFoundMessage = () => {
    return (<main class="image-feed__message">
      <h2>Oh Shoot, looks like the roll is out.</h2>
      <img src="https://media1.giphy.com/media/de9SDw6PGRsubN1o3X/giphy.gif" alt="Jim Carry - looking" />
    </main>)
  }

  return favoriteImages.length ? renderFavoriteImageFeed() : renderNoFavoriteFoundMessage(); 
}

const mapStateToProp = ({favoriteImages}) => ({
  favoriteImages
});

export default connect(mapStateToProp)(favoriteImages);
