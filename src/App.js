import  {useState} from 'react';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';



const  App = () => {
const [searchingName, setSearchingName] = useState('');
const [showModal, setShowModal] = useState(false);
const [imgModal, setImgModal] = useState({});
const [page, setPage] = useState(1);


const handleFormSubmit = searchingName =>{
  setSearchingName(searchingName);
  setPage(1);
  }



const  toggleModal = () =>{
  setShowModal(!showModal);
  }


const openModal = evt =>{
  toggleModal();
  const imgModal ={
    largeImageURL: evt.currentTarget.dataset.url,
    alt: evt.currentTarget.alt,
  }
  setImgModal(imgModal);
}


  return(
    <>
  {!showModal &&  <Searchbar onSubmit={handleFormSubmit}/>}
    <ImageGallery searchingName={searchingName} openModal={openModal} page={page} setPage={setPage}/>
  
  {showModal && 
  <Modal onClose={toggleModal}>
    <img  src={imgModal.largeImageURL} alt={imgModal.alt}/>
    </Modal>}
    </>
  )
}


export default App;
