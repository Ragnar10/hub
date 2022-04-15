// Styles
import Styles from './styles.module.scss';

const Card = ({ item }) => {
    return (
        <div className = { Styles.services_card }>
            <h4>{ item.title }</h4>
            <ul className = { Styles.content_list }>
                { item.content.map((listItem, idx) => <li key = { idx }>{ listItem }</li>) }
            </ul>
        </div>
    );
};

const services = [
    {
        id: 1, title: 'Web', content: ['Simple web sites', 'Corporate web sites and company intranets', 'Custom solutions: portals, games, automatization of management'],
    },
    {
        id: 2, title: 'Apps', content: ['Native android apps', 'Native iOS apps', 'Unity cross platform apps'],
    },
    {
        id: 3, title: 'DeFi', content: ['Landings', 'Games', 'Tokens', 'Smart contracts'],
    },
    {
        id: 4, title: 'ML', content: ['Image analysis', 'Natural language processing', 'Predictive modeling for time series'],
    },
    {
        id: 5, title: 'Visual', content: ['UI design', 'UX design', 'Logo design', 'Branding'],
    },
];

const Service = () => {
    return (
        <section id = { 'service' } className = { Styles.wrapper }>
            <h2 className = { Styles.title }>{ 'Service examples' }</h2>
            <div className = { Styles.services }>
                {
                    services.map((item) => {
                        return <Card key = { item.id } item = { item } />;
                    })
                }
            </div>
        </section>
    );
};

export default Service;
