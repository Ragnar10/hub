// Mui
import { Button } from '@mui/material';
// Styles
import Styles from './styles.module.scss';

const Card = ({ item }) => {
    return (
        <div className = { Styles.team_card }>
            <div className = { item.class } />
            <div className = { Styles.card_info }>
                <h4>{ item.name }</h4>
                <p>{ item.position }</p>
                <p>{ item.descr }</p>
            </div>
        </div>
    );
};

const team = [
    {
        id: 1, name: 'Ivan Kosyuk', position: 'CEO', descr: 'Founder and architect UAIT HUB', class: Styles.card_avatar_ik,
    },
    {
        id: 2, name: 'Pavlo Parkhomenko', position: 'President', descr: 'Client Communication and Partnerships', class: Styles.card_avatar_pp,
    },
    {
        id: 3, name: 'Oleksandr Cheberiak', position: 'Chief R&D', descr: 'Analysis and development of new solutions', class: Styles.card_avatar_oc,
    },
    {
        id: 4, name: 'Dmitry Bagow', position: 'CTO', descr: 'Technical planning and execution', class: Styles.card_avatar_db,
    },
    {
        id: 5, name: 'Andrey Paios', position: 'Head of PM', descr: 'Project management', class: Styles.card_avatar_ap,
    },
    {
        id: 6, name: 'Roman Zakharov', position: 'Advisor', descr: 'Guidance on government work', class: Styles.card_avatar_r,
    },
    {
        id: 7, name: 'Nika Tamayo Flores', position: 'Advisor', descr: 'Guidance on volunteer IT work', class: Styles.card_avatar_n,
    },
];

const AboutUs = () => {
    return (
        <section id = { 'aboutus' } className = { Styles.wrapper }>
            <h2 className = { Styles.title }>{ 'Who we are' }</h2>
            <div className = { Styles.descr }>
                <p>
                    { 'We are a community committed to providing high-quality services for our clients while supporting Ukrainian engineers and developers. Our team members are highly-experienced IT professionals with a successful track record of working with startups and large global companies' }
                </p>
                <p>
                    { 'At the moment, they are facing high unemployment due to the ongoing war. They are all ready, willing, and able to get back to work. Please feel free to reach out to us with any questions or comments' }
                </p>
            </div>
            <div className = { Styles.team }>
                {
                    team.map((item) => {
                        return <Card key = { item.id } item = { item } />;
                    })
                }
            </div>
            <Button
                href = { '#contact' }
                variant = { 'contained' }
                className = { Styles.btn_contact }>{ 'Contact' }</Button>
        </section>
    );
};

export default AboutUs;
