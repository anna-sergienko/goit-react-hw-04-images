import PropTypes from "prop-types"
import { useState, useEffect } from "react";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ImageGalleryList} from './ImageGallery.styled';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";
import { fetchPictures } from "API/pixabayApi";

 const  ImageGallery = ({searchingName, openModal, page, setPage}) => {


const [pictures, setPictures] = useState([]);
const [error, setError] = useState(null);
const [status, setStatus] = useState('idle');



useEffect(()=>{
  if(searchingName === ''){
    return
  };

  setStatus('pending');

  fetchPictures(searchingName, page)
  .then((data) => {
    setPictures(prevData => page > 1 ? [...prevData, ...data.hits] : data.hits );
    setStatus('resolved');
if(data.total === 0){
  return toast.warn('Sorry, but we do not have results( Try again!');
}
})
.catch(error => {
  setError(error);
  setStatus('rejected');
})
},[page, searchingName])
  

  const  onLoadMore = () => {
     setPage(prevPage => prevPage + 1);
   }


    if (status === 'idle') {
       
    }
    
    if (status === 'pending') {
      return <Loader/>
    }

    if (status === 'rejected') {
      return <h2>{error.message}</h2>
    }

    if (status === 'resolved') {
      return (
      <>
      <ToastContainer autoClose={2000}/>
        <ImageGalleryList>
        <ImageGalleryItem pictures={pictures} openModal={openModal}/>
        </ImageGalleryList>
        {/* <Button onLoadMore={() => onLoadMore()}/> */}
{pictures.length >= 12 &&  <Button onLoadMore={() => onLoadMore()}/>}
       
      </> 
      )
    }
    
  }
  

 
export default ImageGallery;

ImageGallery.propTypes = {
openModal: PropTypes.func,
searchingName: PropTypes.string.isRequired,
}


