// Styles
import Styles from './styles.module.scss';

const Nav = () => {
    return (
        <nav className = { Styles.nav }>
            <ul>
                <li>
                    <a href = { '' }>{ 'Who we are' }</a>
                </li>
                <li>
                    <a href = { '' }>{ 'Projects' }</a>
                </li>
                <li>
                    <a href = { '' }>{ 'Donate' }</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
