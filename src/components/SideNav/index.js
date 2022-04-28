// Core
import { useState } from 'react';
// Styles
import { Button } from '@mui/material';
import Styles from './styles.module.scss';

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdown = isOpen ? Styles.side_nav_menu_open : Styles.side_nav_menu;
    const shadow = isOpen ? Styles.side_nav_shadow : Styles.side_nav_shadow_hide;
    const { height } = getComputedStyle(document.body);
    const h = parseFloat(height) - 80;

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
                <div className = { Styles.auth }>
                    <Button
                        variant = { 'text' }
                        className = { Styles.auth_login_btn }>{ 'Login' }</Button>
                    <Button
                        variant = { 'contained' }
                        className = { Styles.auth_reg_btn }>{ 'Register' }</Button>
                </div>
                <div className = { Styles.footer_contacts }>
                    <div className = { Styles.contacts_phone }>
                        <div>
                            <span />
                            <span>{ '+16479280691' }</span>
                        </div>
                        <div>
                            <span />
                            <span>{ '+49 1575 2083098' }</span>
                        </div>
                    </div>
                    <div className = { Styles.contacts_email }>
                        <span />
                        <span>{ 'info@uaithub.com' }</span>
                    </div>
                </div>
                <ul className = { Styles.socials }>
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
            </div>
        </section>
    );
};

export default SideNav;
