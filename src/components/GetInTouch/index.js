// Instruments
import { useForm } from 'react-hook-form';
// Mui
import { Button } from '@mui/material';
// Styles
import Styles from './styles.module.scss';
// Images
import btnSend from '../../theme/assets/icons/btn_send.svg';

const GetInTouch = () => {
    const { register, handleSubmit, reset } = useForm({
        mode:          'onSubmit',
        defaultValues: {
            email: '',
        },
    });
    const submitForm = handleSubmit((values) => {
        reset();
    });

    return (
        <section id = { 'contact' } className = { Styles.wrapper }>
            <div className = { Styles.form_item }>
                <h2 className = { Styles.title }>{ 'Get in touch' }</h2>
                <p className = { Styles.info_question }>
                    { ' Not sure where to start? ' }
                </p>
                <p className = { Styles.info_message }>
                    { 'Tell us about your product, your timeline and where you\'re located. We read and reply to every message' }
                </p>
            </div>
            <div className = { Styles.form_item }>
                <form onSubmit = { submitForm } className = { Styles.form }>
                    <input
                        { ...register('firstName') }
                        placeholder = { 'Your name' }
                        className = { Styles.form_field } />
                    <input
                        { ...register('email') }
                        placeholder = { 'Your email' }
                        className = { Styles.form_field } />
                    <input
                        { ...register('message') }
                        placeholder = { 'Your message' }
                        className = { Styles.form_field } />
                    <Button
                        type = { 'submit' }
                        variant = { 'contained' }
                        className = { Styles.form_btn }>
                        { 'Send' } <span><img src = { btnSend } alt = '' /></span>
                    </Button>
                </form>
            </div>

        </section>
    );
};

export default GetInTouch;
