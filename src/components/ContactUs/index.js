// Styles
import Styles from './styles.module.scss';

const ContactUs = () => {
    return (
        <section className = { Styles.wrapper }>
            <p className = { Styles.info }>
                <span>{ 'Are you a Ukrainian developer looking for work?' }</span>
                <a href = { '' }>{ 'Contact us here' }</a>
            </p>
        </section>
    );
};

export default ContactUs;
