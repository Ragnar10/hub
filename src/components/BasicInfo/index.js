// Mui
import { Button } from '@mui/material';
// Styles
import Styles from './styles.module.scss';

const BasicInfo = () => {
    return (
        <section className = { Styles.wrapper }>
            <div>
                <div className = { Styles.info }>
                    <div className = { Styles.info_emergency }>
                        <span />
                        <span>{ 'Emergency opportunity – get in touch, hire today' }</span>
                    </div>
                    <h1 className = { Styles.info_title }>
                        { 'Ukrainian Developers are Open for Work' }
                    </h1>
                    <p className = { Styles.info_descr }>
                        <span>{ 'Over 1,200 experts in machine learning, cybersecurity,' }</span>
                        <span>{ 'web, and app development are ready to work' }</span>
                    </p>
                    <Button
                        href = { '#contact' }
                        variant = { 'contained' }
                        className = { Styles.contact_btn }>{ 'Contact' }</Button>
                </div>
                <div className = { Styles.bg_img } />
            </div>
        </section>
    );
};

export default BasicInfo;
