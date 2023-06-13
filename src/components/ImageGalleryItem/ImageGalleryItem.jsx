import PropTypes from 'prop-types';
import {GalleryItem, GalleryItemImage} from './ImageGalleryItem.styled.js';


export default function ImageGalleryItem ({data, onClick}){

return(
  <>
  {data &&
  
    <GalleryItem>
      <GalleryItemImage
      src={data.webformatURL} 
      alt={`pic ${data.id}`} 
      onClick={() => onClick(data)}
      />
    </GalleryItem>
  }
  </>
)
}

ImageGalleryItem.propTypes = {
data: PropTypes.object.isRequired,
onClick: PropTypes.func.isRequired,
};
