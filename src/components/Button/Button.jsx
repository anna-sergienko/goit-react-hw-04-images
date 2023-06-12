import { LoadMore } from "./Button.styled";
import PropTypes from 'prop-types';



export default function Button({onLoadMore}){
    return (
<LoadMore type="button" onClick={onLoadMore}>
Load more
</LoadMore>
    )
}

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
};


