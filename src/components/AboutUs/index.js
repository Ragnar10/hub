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
        id: 1, name: 'Ivan Kosyuk', position: 'CEO', descr: 'Development of the vision and architecture of the organization', class: Styles.card_avatar_ik,
    },
    {
        id: 2, name: 'Pavlo Parkhomenko', position: 'President', descr: 'Client communication and partnership development', class: Styles.card_avatar_pp,
    },
    {
        id: 3, name: 'Oleksandr Cheberiak', position: 'Chief R&D', descr: 'Problem analysis and development of new solutions', class: Styles.card_avatar_oc,
    },
    {
        id: 4, name: 'Dmitry Bagow', position: 'CTO', descr: 'Technical planning and execution', class: Styles.card_avatar_db,
    },
    {
        id: 5, name: 'Andrey Paios', position: 'Head PM', descr: 'Task management', class: Styles.card_avatar_ap,
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
                    { 'Our community is engaged in volunteer work in different areas all around Ukraine. Each of our teammates has gained tons of valuable IT experience throughout the years of working in different companies, both small start-ups and big corporations. They have now faced a job loss due to the war and are looking for your projects to put into action' }
                </p>
                <p>
                    { 'We can both continue contributing to volunteer work in Ukraine and financially support those in need by working on your projects and delivering products. You are guaranteed to receive a high-quality result in a short period of time' }
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
