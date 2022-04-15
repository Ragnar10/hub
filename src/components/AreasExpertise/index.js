// Styles
import Styles from './styles.module.scss';

const Card = ({ item, onDown }) => {
    return (
        <div className = { Styles.expertise_card } onClick = { () => onDown() }>
            <div>
                <span className = { item.class } />
            </div>
            <h4>{ item.title }</h4>
        </div>
    );
};

const expertise = [
    {
        id: 1, title: 'Web', class: Styles.card_icon_web,
    },
    {
        id: 2, title: 'Apps', class: Styles.card_icon_apps,
    },
    {
        id: 3, title: 'DeFi', class: Styles.card_icon_defi,
    },
    {
        id: 4, title: 'ML', class: Styles.card_icon_ml,
    },
    {
        id: 5, title: 'Visual', class: Styles.card_icon_art,
    },
];

const AreasExpertise = () => {
    const onDown = () => {
        const service = document.getElementById('service');
        const coords = service.getBoundingClientRect();
        const scroll = window.scrollY;
        const result = coords.top + scroll - 80;
        window.scrollTo(0, result);
    };

    return (
        <section className = { Styles.wrapper }>
            <h2 className = { Styles.title }>{ 'Areas of expertise' }</h2>
            <div className = { Styles.descr }>
                <p>{ 'There is nothing a volunteer can’t do, find, arrange or deliver with a deadline “expired yesterday” in a high-paced environment with working conditions changing every day and every minute. ' }</p>
                <p>{ 'This is the value we can provide — a quickly released MVP that can be transformed and modified as we go, aiming to achieve your objectives and ambitions. Depending on the flow of the project and the workload we can move team members around in a moment to offer you the best solutions quickly.' }</p>
                <p>{ 'Being a community of more than 1,200 people willing to make the world a better place, we are ready to offer you a range of services to help your business grow.' }</p>
            </div>
            <div className = { Styles.expertise }>
                {
                    expertise.map((item) => {
                        return <Card
                            key = { item.id } item = { item }
                            onDown = { onDown } />;
                    })
                }
            </div>
        </section>
    );
};

export default AreasExpertise;
