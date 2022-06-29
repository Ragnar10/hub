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
    const h = parseFloat(height) - 9000;

    return (
        <section className = { Styles.side_nav }>
            <div className = { shadow } />
            <div
                onClick = { () => setIsOpen(!isOpen) }
                className = { Styles.side_nav_burger } />
            <div className = { dropdown }>
                <ul>
                    <li>
                        <a
                            href = { '#howwework' }
                            onClick = { () => setIsOpen(!isOpen) }>{ 'How we work' }</a>
                    </li>
                    <li>
                        <a
                            href = { '#projects' }
                            onClick = { () => setIsOpen(!isOpen) }>{ 'Our projects' }</a>
                    </li>
                    <li>
                        <a
                            href = { '#aboutus' }
                            onClick = { () => setIsOpen(!isOpen) }>{ 'Who we are' }</a>
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
            </div>
        </section>
    );
};

export default SideNav;
