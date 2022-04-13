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
                <p>
                    {
                        item.position.split('_').map((text, idx) => <span key = { idx }>{ text }</span>)
                    }
                </p>
                <p>{ item.descr }</p>
            </div>
        </div>
    );
};

const team = [
    {
        id: 1, name: 'Ivan Kosyuk', position: 'CEO_FinTech Startup_Entrepreneur', descr: 'UA IT HUB is more than a company - it is a community that grows, adapts and learns', class: Styles.card_avatar_ik,
    },
    {
        id: 2, name: 'Pavlo Parkhomenko', position: 'President_ML Engineer, R&D_Specialist, IB Analyst', descr: 'Wizard of external communications and building meaningful partnerships with the world', class: Styles.card_avatar_pp,
    },
    {
        id: 3, name: 'Oleksandr Cheberiak', position: 'Head of R&D_Startup founder,_entrepreneur', descr: 'Our experience has shown that we love to create products that make the world better.', class: Styles.card_avatar_oc,
    },
    {
        id: 4, name: 'Dmirty Bagow', position: 'Experienced CTO_Project manager,_delivery manager,_product owner', descr: 'Plans are nothing, planning is everything', class: Styles.card_avatar_db,
    },
    {
        id: 5, name: 'Andrey Paios', position: 'Head of PMO', descr: 'Founder of Defi development specialization company IT startups founder Full stack developer', class: Styles.card_avatar_ap,
    },
];

const AboutUs = () => {
    return (
        <section id = { 'aboutus' } className = { Styles.wrapper }>
            <h2 className = { Styles.title }>{ 'Who we are' }</h2>
            <div className = { Styles.descr }>
                <p>
                    { 'Our community is engaged in volunteer work in different areas all around Ukraine. Each of our teammates has gained tons of valuable IT experience throughout the years of working in different companies, both small start-ups and big corporations. They have now faced a job loss due to the war and are looking for your projects to put into action.' }
                </p>
                <p>
                    { 'We can both continue contributing to volunteer work in Ukraine and financially support those in need by working on your projects and delivering products. You are guaranteed to receive a high-quality result in a short period of time.' }
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
                variant = { 'contained' }
                className = { Styles.btn_contact }>{ 'Contact' }</Button>
        </section>
    );
};

export default AboutUs;
