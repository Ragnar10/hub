// Styles
import Styles from './styles.module.scss';

const Card = ({ item }) => {
    return (
        <div className = { Styles.donations_card }>
            <div className = { Styles.card_icon }>
                <span className = { item.class } />
            </div>
            <div className = { Styles.card_info }>
                <div>
                    <h4>{ item.title }</h4>
                    <span />
                </div>
                <span>{ item.descr }</span>
            </div>
        </div>
    );
};

const donations = [
    {
        id: 1, title: 'Ukraine’s Armed Forces', descr: 'by the National Bank of Ukraine', class: Styles.card_icon_person,
    },
    {
        id: 2, title: 'The Come Back Alive Fund', descr: 'by savelife.in.ua', class: Styles.card_icon_heart,
    },
    {
        id: 3, title: 'Nova Ukraine', descr: 'by Nova Ukraine', class: Styles.card_icon_building,
    },
    {
        id: 4, title: 'Razom', descr: 'by Razom', class: Styles.card_icon_building,
    },
];

const Donation = () => {
    return (
        <section className = { Styles.wrapper }>
            <div className = { Styles.pre_title }>
                <span>{ 'While you’re here,' }</span>
                <span />
            </div>
            <div className = { Styles.title }>
                <h3>{ 'Consider making a donation today:' }</h3>
                <div>
                    <span />
                    <span>{ 'Trusted sources guarantee' }</span>
                </div>
            </div>
            <div className = { Styles.donations }>
                {
                    donations.map((item) => {
                        return <Card key = { item.id } item = { item } />;
                    })
                }
            </div>
        </section>
    );
};

export default Donation;
