import * as actionTypes from '../actions/actionTypes'

const initalState = {
  favoriteImages: [],
  feedImages: [],
}

const reducer = (state = initalState, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteImages: [...state.favoriteImages, action.image]
      }
    case actionTypes.REMOVE_FROM_FAVORITES:
      // Same as FeedImages - unfortunately the API does not add IDs to images
      const filteredImages = [...state.favoriteImages].filter((favoriteImage) =>
        JSON.stringify(favoriteImage) !== JSON.stringify(action.image));
      return {
        ...state,
        favoriteImages: filteredImages
      }
    case actionTypes.APPEND_FEED_IMAGES:
      return {
        ...state,
        feedImages: [...state.feedImages, ...action.images]
      }
    default: return state;
  }
}

export default reducer;