import * as types from './actionTypes';

export const addToFavorites = (image) => ({
  type: types.ADD_TO_FAVORITES,
  image
});

export const removeFromFavorites = (image) => ({
  type: types.REMOVE_FROM_FAVORITES,
  image
});

export const appendFeedImages = (images) => ({
  type: types.APPEND_FEED_IMAGES,
  images
});