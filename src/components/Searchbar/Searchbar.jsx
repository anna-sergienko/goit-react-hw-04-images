import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import {FormHeader, SearchForm, SearchFormButton, FormInput} from './Searchbar.styled';


const Searchbar = ({onSubmit}) => {

const [searchingName, setSearchingName] = useState('');


const handleNameChange = evt =>{
  setSearchingName(evt.target.value.toLowerCase());
}


const handleSubmit = evt =>{
evt.preventDefault();
if(searchingName.trim() === ""){
  return toast.warn('Enter some staff to search, please!');
}

   onSubmit(searchingName);
   setSearchingName("");
};


return (
<FormHeader>
  <SearchForm onSubmit={handleSubmit}>
    <SearchFormButton type="submit" >
     Search
    </SearchFormButton>

    <FormInput
      type="text"
      autoComplete="off"
      value={searchingName}
      onChange={handleNameChange}
      autoFocus
      placeholder="Search images and photos"
    />
  </SearchForm>
</FormHeader>
        )
    }

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}