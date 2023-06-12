
const API_KEY = "24347539-7a784c76778ec6b315780761f";

export const  fetchPictures = (name, page = 1) => {
return (
  fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
.then(res => res.json())
)};
  