
import { useState, useEffect } from "react";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from "components/ImageGallery/ImageGallery";
import Searchbar from "components/Searchbar/Searchbar";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import { fetchPictures } from "API/pixabayApi";



const  App = () => {
const [searchingName, setSearchingName] = useState('');
const [pictures, setPictures] = useState([]);
const [page, setPage] = useState(1);
const [showModal, setShowModal] = useState(false);
const [pictureURL, setPictureURL] = useState('')
const [pictureALT, setPictureALT] = useState('')
const [loader, setLoader] = useState(false);
const [showLoadMore, setShowLoadMore] = useState(false);
const [error, setError] = useState(null);



useEffect(()=>{
  if(searchingName === ''){
    return
  };
  
  searchingName && setLoader(true);
  searchingName && fetchPictures(searchingName, page)
  .then(pictures => {
    showLoadMoreOption(pictures.hits.length, pictures.total, page);
    if(pictures.total === 0){
      setShowLoadMore(false);
      return toast.warn('Sorry, but we do not have results( Try again!');
    };
    setPictures(prev => {
      return [...prev, ...pictures.hits]
    });

})
.catch(error => {
  setError(error);
})
.finally(
  setLoader(false))
},[page, searchingName])



const showLoadMoreOption = (length, total, page) => {
  const totalPages = Math.floor(total / 12)
  if (length % 12 === 0 && length !== 0 && page <= totalPages) {
    return setShowLoadMore(true)
  }
  return setShowLoadMore(false)
}


const handleFormSubmit = (searchingName) =>{
  setSearchingName(searchingName);
  setPage(1);
  setPictures([]);
  }


const  toggleModal = () =>{
    setShowModal(false);
    }
  
const openModal = ({largeImageURL, tags}) =>{
  setPictureURL(largeImageURL);
  setPictureALT(tags);
  setShowModal(true);
}

const  onLoadMore = () => {
  setPage(prevPage => prevPage + 1);
}

  return(
    <>
    
  {error && (<div>{error}</div>)}
  <Searchbar onSubmit={handleFormSubmit}/>
  {loader && <Loader/>}
  <ImageGallery pictures={pictures} openModal={openModal} />
  {showLoadMore && <Button onClick={onLoadMore} />}
  {showModal && 
  <Modal onClose={toggleModal}>
    <img  src={pictureURL} alt={pictureALT}/>
    </Modal>}
    </>
  )
}


export default App;
