// Core
import { useState } from 'react';
// Styles
import Styles from './styles.module.scss';

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdown = isOpen ? Styles.side_nav_menu_open : Styles.side_nav_menu;
    const shadow = isOpen ? Styles.side_nav_shadow : Styles.side_nav_shadow_hide;
    const { height } = getComputedStyle(document.body);
    const h = parseFloat(height) - 136;

    return (
        <section className = { Styles.side_nav }>
            <div className = { shadow } style = { { height: h } } />
            <div
                onClick = { () => setIsOpen(!isOpen) }
                className = { Styles.side_nav_burger } />
            <div className = { dropdown }>
                <ul>
                    <li>
                        <a
                            href = { '#aboutus' }
                            onClick = { () => setIsOpen(!isOpen) }>{ 'Who we are' }</a>
                    </li>
                    <li>
                        <a
                            href = { '#projects' }
                            onClick = { () => setIsOpen(!isOpen) }>{ 'Projects' }</a>
                    </li>
                    <li>
                        <a
                            href = { '#donate' }
                            onClick = { () => setIsOpen(!isOpen) }>{ 'Donate' }</a>
                    </li>
                    <li>
                        <a
                            href = { '#contact' }
                            onClick = { () => setIsOpen(!isOpen) }>{ 'Contact' }</a>
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
                <ul className = { Styles.socials }>
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
            </div>
        </section>
    );
};

export default SideNav;
