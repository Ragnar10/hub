// Styles
import { useState } from 'react';
import Styles from './styles.module.scss';

const Card = (props) => {
    const item = props.item;
    const index = props.index;

    const [details, setDetails] = useState(true);

    return (
        <div className ={Styles.card_wrapper}>
            <div className = { (index <= 2) ? Styles.expertise_card_top : Styles.expertise_card_bottom }>
                <div className = {Styles.card_content}>
                    <div className={ Styles.mob_wrapper }>
                        <h4>{ item.title }</h4>
                        <div
                            className={Styles.more_details}
                            onClick={() => setDetails(!details)}
                        ></div>
                    </div>
                    
                    <div className = {`${Styles.divider} ${!details ? Styles.display : null}` }></div>

                    <ul className = { !details ? Styles.display : null }>
                        { item.descr.map((listItem, idx) => <li key = { idx }>{ listItem }</li>) }
                    </ul>
                </div>

                <div className={`${Styles.background} ${Styles.background_06}`}></div>
                <div className={`${Styles.background} ${Styles.background_04}`}></div>
                <div className={`${Styles.background} ${Styles.background_02}`}></div>
            </div>
        </div>
    );
};

const expertise = [
    {
        id: 1, title: 'Web', descr: ['Design and development', 'Company intranet and portals', 'Games', 'Management automation '], class: Styles.card_icon_web,
    },
    {
        id: 2, title: 'Apps', descr: ['Native Android', 'Native iOS', 'Cross-platform'], class: Styles.card_icon_apps,
    },
    {
        id: 3, title: 'Cybersecurity', descr: ['Penetration testing', 'Smart contract audits', 'Systems integration', 'Security optimization'], class: Styles.card_icon_defi,
    },
    {
        id: 4, title: 'DeFi', descr: ['Landing pages', 'Games', 'Tokens', 'Smart contracts'], class: Styles.card_icon_ml,
    },
    {
        id: 5, title: 'ML', descr: ['Image recognition and analysis', 'Natural language processing (NLP)', 'Predictive modeling for time series'], class: Styles.card_icon_art,
    },
    {
        id: 6, title: 'Design', descr: ['UI & UX', 'Branding', 'Logos', 'Visual identity'], class: Styles.card_icon_art,
    },
];

const AreasExpertise = () => {
    return (
        <section className = { Styles.wrapper }>
            <h2 className = { Styles.title }>{ 'Areas of expertise' }</h2>
            
            <div className = { Styles.expertise }>
                {
                    expertise.map((item, index) => {
                        return <Card key = { item.id } item = { item } index = {index} />;
                    })
                }
            </div>
        </section>
    );
};

export default AreasExpertise;
