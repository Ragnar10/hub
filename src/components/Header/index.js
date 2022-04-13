// Mui
import { Button } from '@mui/material';
// Styles
import Styles from './styles.module.scss';
// Images
import logo from '../../theme/assets/icons/logo.svg';
// Components
import Nav from '../Nav';
import SideNav from '../SideNav';

const Header = () => {
    return (
        <header className = { Styles.header }>
            <SideNav />
            <div className = { Styles.header_logo }>
                <a href = { '' }>
                    <img src = { logo } alt = { 'logo image' } />
                </a>
            </div>
            <Nav />
            <Button
                variant = { 'contained' }
                className = { Styles.header_btn }>{ 'Contact' }</Button>
        </header>
    );
};

export default Header;
