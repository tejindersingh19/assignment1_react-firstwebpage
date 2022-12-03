import {
  Link
} from "react-router-dom";

function Navitems({props}){
    return(
        <>
            <Link to={props.link}>{props.title}</Link>
            {/* <a href={props.link}>{props.title}</a> */}
        </>
    );
}

export default Navitems;