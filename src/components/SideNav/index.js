// Styles
import Styles from './styles.module.scss';
// Images
import logo from '../../theme/assets/icons/logo.svg';

const SideNav = () => {
    return (
        <section className = { Styles.side_nav }>
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
            <div className = { Styles.footer_contacts }>
                <div className = { Styles.contacts_phone }>
                    <span />
                    <span>{ '380 00 000 00 00' }</span>
                </div>
                <div className = { Styles.contacts_email }>
                    <span />
                    <span>{ 'example@mail.com' }</span>
                </div>
            </div>
            <div className = { Styles.footer_socials }>
                <div className = { Styles.socials_fb }>
                    <a href = { '' } />
                </div>
                <div className = { Styles.socials_tg }>
                    <a href = { '' } />
                </div>
                <div className = { Styles.socials_in }>
                    <a href = { '' } />
                </div>
            </div>

        </section>
    );
};

export default SideNav;
