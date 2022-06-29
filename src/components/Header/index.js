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
            <div className = { Styles.header_logo }>
                <a href = { '/' }>
                    <img src = { logo } alt = { 'logo image' } />
                </a>
            </div>
            <div className = { Styles.header_interaction }>
                <Nav />
                {/* <div className = { Styles.interaction_auth }>
                    <Button
                        variant = { 'text' }
                        className = { Styles.auth_login_btn }>{ 'Login' }</Button>
                    <Button
                        variant = { 'contained' }
                        className = { Styles.auth_reg_btn }>{ 'Register' }</Button>
                </div> */}
            </div>

            <SideNav />

        </header>
    );
};

export default Header;
