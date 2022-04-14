// Styles
import Styles from './styles.module.scss';

const Footer = () => {
    return (
        <footer className = { Styles.footer }>
            <ul className = { Styles.footer_socials }>
                <li className = { Styles.socials_fb }>
                    <a
                        href = { 'https://www.facebook.com/UAITHUB' } target = { '_blank' }
                        rel = 'noreferrer' />
                </li>
                <li className = { Styles.socials_tg }>
                    <a
                        href = { 'https://t.me/ithub_ua' } target = { '_blank' }
                        rel = 'noreferrer' />
                </li>
                <li className = { Styles.socials_in }>
                    <a
                        href = { 'https://www.linkedin.com/company/ukraine-it-hub' } target = { '_blank' }
                        rel = 'noreferrer' />
                </li>
            </ul>
            <div className = { Styles.footer_contacts }>
                <div className = { Styles.contacts_phone }>
                    <span />
                    <div>
                        <span>{ '+16479280691' }</span>
                        <span>{ '+49 1575 2083098' }</span>
                    </div>
                </div>
                <div className = { Styles.contacts_email }>
                    <span />
                    <span>{ 'info@uaithub.com' }</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
