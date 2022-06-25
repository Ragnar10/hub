// Styles
import Styles from './styles.module.scss';

const Card = ({ item }) => {
    return (
        <a
            href = { item.link }
            target = { '_blank' }
            rel = 'noreferrer'
            className = { Styles.donations_card }>
            {/* <div className = { `${Styles.card_icon} ${item.class}` } /> */}
            <div className = { Styles.card_info }>
                <div className = { Styles.info_wrapper }>
                    <h4>{ item.title }</h4>
                    <div className = { Styles.divider }></div>
                </div>
                <div>
                    <span className={Styles.descr}>{ item.descr }</span>

                    <span className={Styles.arrow} />
                </div>
            </div>
        </a>
    );
};

const donations = [
    {
        id:    1,
        title: 'Ukraine’s Armed Forces',
        descr: 'by the National Bank of Ukraine',
        class: Styles.card_icon_person,
        link:  'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
    },
    {
        id:    2,
        title: 'Nova Ukraine',
        descr: 'by Nova Ukraine',
        class: Styles.card_icon_building,
        link:  'https://novaukraine.org/donate/',
    },
    {
        id:    3,
        title: 'The Come Back Alive Fund',
        descr: 'by savelife.in.ua',
        class: Styles.card_icon_heart,
        link:  'https://savelife.in.ua/donate/',
    },
    {
        id:    4,
        title: 'Razom',
        descr: 'by Razom',
        class: Styles.card_icon_building,
        link:  'https://razomforukraine.org/donate/',
    },
];

const Donation = () => {
    return (
        <section id = { 'donate' } className = { Styles.wrapper }>
            <div className = { Styles.pre_title }>
                <span>{ 'While you’re here,' }</span>
            </div>
            <div className = { Styles.title }>
                <h3>{ 'Consider making a donation to Ukrainian people' }</h3>
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
