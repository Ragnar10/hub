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
        descr:   ['_A web app designed for reporting the movements of Russian military vehicles, weapons, troops, or saboteurs on Ukrainian territory. Any Ukrainian user who has spotted the enemy can transmit the exact location directly to the Security Service of Ukraine', 'Timeline_: 4 weeks', 'Challenge_: To prevent the misleading of the Armed Forces of Ukraine we developed a solution that analyses metadata from images uploaded by users to the service'],
        img:     sl1,
        project: 'Volunteer',
    },
    {
        id:      2,
        title:   'The International Legion Of Defense Of Ukraine',
        type:    'Public organization project',
        descr:   ['_A website and a chatbot designed for non-citizens of Ukraine volunteering for military service in our country. These solutions give foreigners the instructions for joining the Armed Forces of Ukraine and help with the procedure and paperwork', 'Timeline_: 3 weeks', 'Challenge_: We have built an operation and interaction process between our team of IT volunteers and the government in the first three weeks of the war to make it possible for volunteers to join the Foreign Legion as soon as possible'],
        img:     sl2,
        project: 'Volunteer',
    },
    {
        id:      3,
        title:   'Forpost Cars App',
        type:    'Government security project',
        descr:   ['_Living during the war, the unusual car movement or even an unfamiliar car in your neighborhood looks disturbing, especially during the curfew. With Forpost Cars App you can check whether the suspicious vehicle possesses any danger by pointing your camera at its license plate', 'Timeline_: 4 weeks', 'Challenge_: We needed to securely synchronize the app’s database with the governmental one to receive the updates in real-time without disclosing owners’ personal info'],
        img:     sl3,
        project: 'Volunteer',
    },
    {
        id:      4,
        title:   'SaveUA bot',
        type:    'Public organization project',
        descr:   ['_Lots of humanitarian problems have risen since the war started. SaveUA bot allows you to either find and receive or provide help in different regions across Ukraine', 'Timeline_: 3 weeks', 'Challenge_: No one can fully vouch for the credibility and thus the safety of individuals seeking or delivering help. We have created a bot allowing you to exchange contacts quickly with an individual verified beforehand'],
        img:     sl4,
        project: 'Volunteer',
    },
    {
        id:      5,
        title:   'Reviews classification for a Yelp-like app',
        type:    'NLP project',
        descr:   ['_Our client’s review aggregation service needed to sort tons of users’ comments into categories to keep track of customers’ perceptions of restaurants and what changes should be made by places’ owners. We used BERT to divide reviews into 9 categories and add sentiment analysis on top', 'Timeline_: 2 months', 'Challenge_: As our client operates in Arab world and none of us speaks Arabic, we used automatic translation for 40% of comments to have a single pipeline'],
        img:     sl5,
        project: 'Commercial',
    },
    {
        id:      6,
        title:   'Product lists matching for a pricing platform',
        type:    'NLP project',
        descr:   ['_Retail companies are constantly monitoring competitors’ prices for every product they have. The trickiest part is to match the product names as retailers name the same products in a different way and often have their own barcodes. We developed an automatic product name matching system for our client', 'Timeline_: 3 months', 'Challenge_: Our product name matching system uses product characteristics as well, such as package size, brand name, color, etc. creating a multi-layered comparison algorithm'],
        img:     sl6,
        project: 'Commercial',
    },
    {
        id:      7,
        title:   'Behavioral customer clustering for an apparel company',
        type:    'ML project',
        descr:   ['_Customer segmentation based on demographics or buyer personas describes clients that marketers wish for, not the clients they actually have. We combined millions of rows of personal and transactional data to develop a model using more than 100 different features to divide existing clients into groups with distinctive behavior', 'Timeline_: 1 month', 'Challenge_: The hardest part of getting clustering right is creating actionable cluster descriptions. We managed to define 14 distinct clusters that were relevant to the company'],
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
            <h2 className = { Styles.title }>{ 'Our work' }</h2>
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
