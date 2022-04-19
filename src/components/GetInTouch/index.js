// Core
import { useState } from 'react';
// Instruments
// import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
// Mui
import { Button, Alert, Snackbar } from '@mui/material';
// Styles
import Styles from './styles.module.scss';
// Images
import btnSend from '../../theme/assets/icons/btn_send.svg';

const GetInTouch = () => {
    const [open, setOpen] = useState(false);
    const [answer, setAnswer] = useState({});

    const alertSettings = {
        vertical:   'bottom',
        horizontal: 'right',
    };

    // const { register, handleSubmit, reset } = useForm({
    //     mode:          'onSubmit',
    //     defaultValues: {
    //         name:    '',
    //         email:   '',
    //         message: '',
    //     },
    // });

    const submitForm = (event) => {
        event.preventDefault();
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                event.target,
                process.env.REACT_APP_USER_ID,
            )
            .then((result) => {
                if (result.status === 200) {
                    setAnswer({ status: result.status, text: 'Message Sent, We will get back to you shortly' });
                    setOpen(true);
                    event.target.reset();
                }

                return result.status;
            })
            .catch((error) => {
                if (error.status === 400) {
                    setAnswer({ status: error.status, text: 'An error occurred, Please try again' });
                    setOpen(true);
                    event.target.reset();
                }
            });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

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
                        name = { 'name' }
                        placeholder = { 'Your name' }
                        required
                        className = { Styles.form_field } />
                    <input
                        name = { 'email' }
                        placeholder = { 'Your email' }
                        pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                        required
                        className = { Styles.form_field } />
                    <input
                        name = { 'message' }
                        placeholder = { 'Your message' }
                        required
                        className = { Styles.form_field } />
                    <Button
                        type = { 'submit' }
                        variant = { 'contained' }
                        className = { Styles.form_btn }>
                        { 'Send' } <span><img src = { btnSend } alt = '' /></span>
                    </Button>
                </form>
            </div>
            <Snackbar
                anchorOrigin = { alertSettings }
                open = { open }
                autoHideDuration = { 5000 }
                onClose = { handleClose }>
                <Alert
                    onClose = { handleClose } severity = { answer.status === 200 ? 'success' : 'error' }
                    sx = { { width: '100%' } }>
                    { answer.text }
                </Alert>
            </Snackbar>
        </section>
    );
};

export default GetInTouch;
