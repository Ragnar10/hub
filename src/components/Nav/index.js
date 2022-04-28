// Styles
import Styles from './styles.module.scss';

const Nav = () => {
    return (
        <nav className = { Styles.nav }>
            <ul>
                <li>
                    <a href = { '#aboutus' }>{ 'Who we are' }</a>
                </li>
                <li>
                    <a href = { '#projects' }>{ 'Projects' }</a>
                </li>
                <li>
                    <a href = { '#donate' }>{ 'Donate' }</a>
                </li>
                <li>
                    <a href = { '#contact' }>{ 'Contact' }</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
