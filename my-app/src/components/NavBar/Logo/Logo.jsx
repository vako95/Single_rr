import { Link } from "react-router-dom";
import "./Logo.css"

const Logo = ({logoImg}) => {

    return(

        <figure className="logo">
         <Link className="logo__link">
            <img className="logo__img" src={logoImg} alt="" />
         </Link>
        </figure>
    )
}

export default Logo;