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
        id: 1, name: 'Ivan Kosyuk', position: 'Founder & CEO', descr: 'Architecture and development of the company', class: Styles.card_avatar_ik,
    },
    {
        id: 2, name: 'Pavlo Parkhomenko', position: 'President', descr: 'Client communication and partnership development', class: Styles.card_avatar_pp,
    },
    {
        id: 3, name: 'Oleksandr Cheberiak', position: 'Chief R&D', descr: 'Analysis and development of new solutions', class: Styles.card_avatar_oc,
    },
    {
        id: 4, name: 'Dmitry Bagow', position: 'CTO', descr: 'Technical planning and managing the execution', class: Styles.card_avatar_db,
    },
    {
        id: 5, name: 'Andrey Paios', position: 'Chief PM', descr: 'Composing teams and supervising the development process', class: Styles.card_avatar_ap,
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
                    { 'We are proud members of the Ukrainian tech community who are committed to helping international clients achieve remarkable things with “uniquely Ukrainian” developers, designers, and architects. We need flexibility as we serve our country — on the front lines, as volunteers, and in numerous other ways — and we need income because the invasion has caused widespread unemployment. Many of us are still in-country. Some of us have resettled abroad. But we’re all still in the fight.' }
                </p>
                <p>
                    { 'Our team members are highly-experienced, obsessed with outcomes, and endlessly curious about client problems. We want to get back to what we do best — working for clients like you.' }
                </p>
            </div>
            <div className = { Styles.team }>
                {
                    team.map((item) => {
                        return <Card key = { item.id } item = { item } />;
                    })
                }
            </div>
            {/* <Button
                href = { '#contact' }
                variant = { 'contained' }
                className = { Styles.btn_contact }>{ 'Contact' }</Button> */}
        </section>
    );
};

export default AboutUs;
