// Instruments
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Styles
import Styles from './styles.module.scss';
// Images
import sl1 from '../../theme/assets/images/slider_bg1.svg';
import sl2 from '../../theme/assets/images/slider_bg2.svg';
import sl3 from '../../theme/assets/images/slider_bg3.svg';
import sl4 from '../../theme/assets/images/slider_bg4.svg';
import sl5 from '../../theme/assets/images/slider_bg5.svg';
import sl6 from '../../theme/assets/images/slider_bg6.svg';
import sl7 from '../../theme/assets/images/slider_bg7.svg';

const images = [
    {
        id:      1,
        title:   'Bachu.info',
        type:    'Government security project',
        descr:   ['_Our team designed a web app for reporting the movements of Russian military vehicles, weapons, troops, or saboteurs on Ukrainian territory. Any Ukrainian user who has spotted the enemy can transmit the exact location directly to the Security Service of Ukraine', 'Timeline_: 4 weeks', 'Challenge_: To provide accurate strategic information to the Armed Forces of Ukraine, we developed a solution that analyses metadata from images uploaded by users to the service'],
        img:     sl1,
        project: 'Volunteer',
    },
    {
        id:      2,
        title:   'The International Legion of Defense of Ukraine',
        type:    'Public organization project',
        descr:   ['_A website and chatbot designed for the international community who want to volunteer for military service during this time. This site assists those volunteers wanting to join the Armed Forces of Ukraine with all the logistical help to secure the necessary paperwork', 'Timeline_: 3 weeks', 'Challenge_: We built an operation and communication process between our team of IT volunteers and the government in the first three weeks of the war. Our goal was to make it possible for volunteers to join the Foreign Legion as quickly as possible'],
        img:     sl2,
        project: 'Volunteer',
    },
    {
        id:      3,
        title:   'Forpost Cars App',
        type:    'Government security project',
        descr:   ['_As the war in Ukraine intensifies, any unusual movement is cause for alarm. Our services monitor suspicious vehicles, especially during curfew. With Forpost Cars App you can check whether the vehicle is a security threat by identifying and photographing the license plate', 'Timeline_: 4 weeks', 'Challenge_: We needed to securely synchronize the app’s database with the governmental one to receive updates in real-time without disclosing owners’ personal info'],
        img:     sl3,
        project: 'Volunteer',
    },
    {
        id:      4,
        title:   'SaveUA bot',
        type:    'Public organization project',
        descr:   ['_The war has posed a host of dire humanitarian problems. SaveUA bot allows you to locate, receive or provide help in different regions across Ukraine', 'Timeline_: 3 weeks', 'Challenge_:  No one can fully vouch for the credibility and thus the safety of individuals seeking or delivering help. We have created a bot allowing you to exchange contacts quickly with individuals who have been vetted for security'],
        img:     sl4,
        project: 'Volunteer',
    },
    {
        id:      5,
        title:   'Restaurant Classification review app',
        type:    'NLP project',
        descr:   ['_Our client’s review aggregation service needed to sort tons of user comments into categories. The aim is to keep track of their customers\' experiences at restaurants and use the feedback to improve their offering. We used BERT to divide reviews into 9 categories and added sentiment analysis on top', 'Timeline_: 2 months', 'Challenge_: As our client operates in the UAE and since we don\'t speak Arabic, we used automatic translation for 40% of the comments to have a single pipeline'],
        img:     sl5,
        project: 'Commercial',
    },
    {
        id:      6,
        title:   'Product lists matching for a pricing platform',
        type:    'NLP project',
        descr:   ['_Retail companies are constantly monitoring competitor prices for every product they offer. The challenge is to match the product names as retailers often have varying in-house barcoding for the same products. We developed an automatic product name matching system for our client', 'Timeline_: 3 months', 'Challenge_: Our product name matching system uses product characteristics such as package size, brand name, color, etc. creating a multi-layered comparison algorithm'],
        img:     sl6,
        project: 'Commercial',
    },
    {
        id:      7,
        title:   'Behavioral customer clustering for an apparel company',
        type:    'ML project',
        descr:   ['_Customer segmentation based on demographics or buyer personas describes clients that marketers want, not the clients they actually have. We combined millions of personal and transactional data to develop a model using more than 100 different features to divide existing clients into groups with distinctive behavior', 'Timeline_: 1 month', 'Challenge_: To get the clustering right by creating actionable cluster descriptions. We managed to define 14 distinct clusters that were relevant to the company'],
        img:     sl7,
        project: 'Commercial',
    },
];

const OurWorks = () => {
    const { width } = getComputedStyle(document.body);
    const currentWidth = parseFloat(width);
    const height = (currentWidth - 40) * 0.647;

    const settings = {
        dots:           true,
        fade:           true,
        infinite:       true,
        speed:          500,
        slidesToShow:   1,
        slidesToScroll: 1,
        appendDots:     (dots) => (
            <ul style = { currentWidth < 768 ? { top: height + 10 } : null }> { dots } </ul>
        ),
    };

    return (
        <section id = { 'projects' } className = { Styles.wrapper }>
            <h2 className = { Styles.title }>{ 'Our projects' }</h2>
            <div className = { Styles.carousel_wrapper }>
                <Slider { ...settings }>
                    {
                        images.map((item) => {
                            return (
                                <div
                                    key = { item.id }
                                    className = { Styles.carousel_card }>
                                    <div
                                        style = { currentWidth < 768 ? { height } : null }
                                        className = { Styles.card_img }>
                                        <img
                                            key = { item.id } src = { item.img }
                                            alt = { 'carousel image' } />
                                    </div>
                                    <div className = { Styles.card_info }>
                                        <div className = { Styles.info_title }>
                                            <h3>{ item.title }</h3>
                                            <div>{ item.project }</div>
                                            <span>{ item.type }</span>
                                        </div>
                                        <div className = { Styles.info_text }>
                                            {
                                                item.descr.map((text, idx) => {
                                                    return (
                                                        <p key = { idx }>
                                                            <b>{ text.split('_')[ 0 ] }</b>
                                                            <span>{ text.split('_')[ 1 ] }</span>
                                                        </p>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </Slider>
            </div>
        </section>
    );
};

export default OurWorks;
