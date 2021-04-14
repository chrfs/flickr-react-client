import React from 'react';
import { connect } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../store/actions';
import './imageBox.scss';
 
const FeedImage = ({ dispatch, image, isFavorite }) => {
  // Usernames are surroundes with nonsense i.e.
  // 'nobody@flickr.com (\"ncsmsky\")' where 'ncsmsky' is the actual username.
  const getUsernameFromAuthor = (author) => {
    const regex = new RegExp('"(.*)"\\)');
    return regex.exec(author)[1];
  }

  // Image fields unpredictable and break the UI, therefore I created a function to shorten strings.
  const shortenStringAtN = (tag, n) => tag.length > n ? tag.substr(0, n-1) + '...' : tag;
  
  // Some images have too many tags, there I only take up to 4.
  const renderTags = (tags) => {
    const tagsArray = tags.split(' ').splice(0, 4);
    return tagsArray.map(
      tag => (<span key={`${image.title}-${tag}`} className="image-box__tag">{shortenStringAtN(tag, 10)}</span>)
    );
  }

  const handleFavoriteOnClick = (image) => dispatch(isFavorite ? removeFromFavorites(image) : addToFavorites(image));

  const renderFavoriteButton = () => (
      <div className="image-box__favorite-toggle" onClick={() => { handleFavoriteOnClick(image); }}>
        {isFavorite ? <span>&#9733;</span> : <span>&#9734;</span>}
      </div>
    )

  return (
    <article className="image-box">
      <img className="image-box__image" src={image.media.m} alt={image.title} />
      {renderFavoriteButton()}
      <div className="image-box__info-box">
        <p>
          <a target="_blank" href={image.link} rel="noreferrer">{shortenStringAtN(image.title, 30)}</a>
          &ensp;by&ensp;
          <a target="_blank" href={`https://www.flickr.com/photos/${image.author_id}/`} rel="noreferrer">{getUsernameFromAuthor(image.author)}</a>
        </p>
        <div className="image-box__tags">
          {image.tags && renderTags(image.tags)}
        </div>
      </div>
    </article>
  )
}
 
export default connect()(FeedImage);
