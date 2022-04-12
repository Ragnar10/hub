// Mui
import { Button } from '@mui/material';
// Styles
import Styles from './styles.module.scss';
// Images
import logo from '../../theme/assets/icons/logo.svg';
// Components
import Nav from '../Nav';

const Header = () => {
    return (
        <header className = { Styles.header }>
            <div className = { Styles.logo }>
                <a href = { '' }>
                    <img src = { logo } alt = { 'logo image' } />
                </a>
            </div>
            <Nav />
            <Button
                variant = { 'contained' }
                className = { Styles.btn_contact }>{ 'Contact' }</Button>
        </header>
    );
};

export default Header;
