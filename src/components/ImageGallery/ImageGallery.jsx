import PropTypes from "prop-types"
import { nanoid } from 'nanoid';
import {ImageGalleryList} from './ImageGallery.styled';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

 const  ImageGallery = ({pictures, openModal}) => {
return (
  <>
  {pictures &&
  <ImageGalleryList>
    {pictures.map(picItem =>
      <ImageGalleryItem 
      onClick={openModal}
      data = {picItem}
      key = {nanoid()}
      />
    )}
  </ImageGalleryList>
  }
  </>
)
    
  }
  

 
export default ImageGallery;

ImageGallery.propTypes = {
openModal: PropTypes.func.isRequired,
pictures: PropTypes.array.isRequired,
}


