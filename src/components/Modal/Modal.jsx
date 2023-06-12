import { useEffect } from 'react'
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import {Overlay, ModalWrapper} from  "./Modal.styled.js";


const modalRoot = document.querySelector('#modal-root');

const  Modal = ({children, onClose}) => {

useEffect(() =>{
   const onKeydown = evt =>{
        if(evt.code === 'Escape'){
            onClose();
        }
    }

    window.addEventListener('keydown', onKeydown);
   

    return () => {
        window.removeEventListener('keydown', onKeydown);
    }
},[onClose])



const onBackdrop = evt =>{
    if(evt.currentTarget === evt.target){
        onClose();
    }
}


return createPortal(
        <Overlay onClick={onBackdrop}>
        <ModalWrapper>
        {children}
        </ModalWrapper>
      </Overlay>, modalRoot
       )
   } 


export default Modal;


Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
  }