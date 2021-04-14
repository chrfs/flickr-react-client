import React from 'react';
import { connect } from 'react-redux'
import ImageBox from '../components/ImageBox';
import './imageGrid.scss';

const FeedImages = ({ feedImages, favoriteImages }) => {
  const checkIfFavorite = (image) => {
    return favoriteImages.some((favoriteImage) =>
      // Unfortunately the API does not add IDs to images
      JSON.stringify(favoriteImage) === JSON.stringify(image));
  }

  return (
    <main className="image-feed">
      {feedImages.map((image) => (
        <ImageBox key={image.media.m} image={image} isFavorite={checkIfFavorite(image)} />
      ))}
    </main>
  )
}

const mapStateToProp = ({feedImages, favoriteImages}) => ({
  feedImages,
  favoriteImages
});

export default connect(mapStateToProp)(FeedImages);
