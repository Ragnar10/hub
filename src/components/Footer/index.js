// Styles
import Styles from './styles.module.scss';

const Footer = () => {
    return (
        <footer className = { Styles.footer }>
            <ul className = { Styles.footer_socials }>
                <li className = { Styles.socials_fb }>
                    <a href = { '' } />
                </li>
                <li className = { Styles.socials_tg }>
                    <a href = { '' } />
                </li>
                <li className = { Styles.socials_in }>
                    <a href = { '' } />
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
        </footer>
    );
};

export default Footer;
