
import { NavLink } from 'react-router-dom';
import vector from "../../assets/vector.svg"
import './header.scss'

const Header = () => {
    
    return (
        <header className='header container'>
            <div className="header__favorites">
                <NavLink to='/favorites'>Избранное</NavLink>
                <img src={vector} className="header__favorites-image" alt="star" />
            </div>
        </header>
    );
};

export default Header;