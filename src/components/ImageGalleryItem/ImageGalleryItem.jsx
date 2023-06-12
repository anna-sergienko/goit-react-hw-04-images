import PropTypes from 'prop-types';
import {GalleryItem, GalleryItemImage} from './ImageGalleryItem.styled.js';


export default function ImageGalleryItem ({pictures, openModal}){
    return pictures.map(({id, webformatURL, largeImageURL }) => (
<GalleryItem key={id}>
  <GalleryItemImage
  src={webformatURL} 
  alt={`pic ${id}`} 
  data-url={largeImageURL}
  onClick={openModal}
  />
</GalleryItem>
    ))
}

ImageGalleryItem.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
openModal: PropTypes.func.isRequired,
};
