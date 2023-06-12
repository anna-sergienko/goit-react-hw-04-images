import {Puff} from "react-loader-spinner";
import {LoaderWrapper} from  './Loader.styled.js';

export default function Loader(){
    return (
        <LoaderWrapper>
        <Puff color="#E6E6FA" height={80} width={80} />
        </LoaderWrapper>
    )
}